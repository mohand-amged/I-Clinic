"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function StickyCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling down 500px
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ctaOptions = [
    {
      icon: Phone,
      label: t("اتصال مباشر", "Direct Call"),
      action: () => window.open("tel:+201234567890", "_self"),
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-600"
    },
    {
      icon: MessageCircle,
      label: t("واتساب", "WhatsApp"),
      action: () => window.open(`https://wa.me/201234567890?text=${encodeURIComponent(t("مرحباً، أريد حجز موعد", "Hello, I want to book an appointment"))}`, "_blank"),
      color: "bg-green-600 hover:bg-green-700",
      textColor: "text-green-600"
    },
    {
      icon: Calendar,
      label: t("احجز موعد", "Book Appointment"),
      action: () => {
        const bookingSection = document.getElementById("booking");
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: "smooth" });
        }
      },
      color: "bg-teal-600 hover:bg-teal-700",
      textColor: "text-teal-600"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-50"
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="relative">
            {/* Expanded Menu */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="absolute bottom-16 left-0 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
                      {t("كيف تريد التواصل؟", "How do you want to contact us?")}
                    </h3>
                    <div className="space-y-3 min-w-[200px]">
                      {ctaOptions.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            option.action();
                            setIsExpanded(false);
                          }}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className={`p-2 rounded-lg ${option.color} text-white group-hover:scale-110 transition-transform`}>
                            <option.icon className="w-4 h-4" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {option.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main CTA Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {!isExpanded ? (
                <Button
                  onClick={() => setIsExpanded(true)}
                  size="lg"
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-2xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </Button>
              ) : (
                <Button
                  onClick={() => setIsExpanded(false)}
                  size="lg"
                  className="w-14 h-14 rounded-full bg-slate-600 hover:bg-slate-700 text-white shadow-2xl"
                >
                  <X className="w-6 h-6" />
                </Button>
              )}
            </motion.div>

            {/* Pulsing Ring Animation */}
            {!isExpanded && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}

            {/* Tooltip */}
            {!isExpanded && (
              <motion.div
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {t("تواصل معنا الآن", "Contact us now")}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}