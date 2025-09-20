"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function HeroSection() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-teal-900/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-teal-400/10 dark:from-blue-600/5 dark:to-teal-600/5" />
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} space-y-6`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headlines */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("رؤيتك تستحق الأفضل", "Your Vision Deserves the Best")}
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t("أفضل رعاية لعينيك في مصر", "Best Eye Care in Egypt")}
              </motion.h2>
            </div>

            {/* Subheadline */}
            <motion.p
              className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto ${isRTL ? 'lg:mx-0' : 'lg:mr-0'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t(
                "احجز استشارتك الآن مع أفضل أطباء العيون في مصر واستمتع برؤية واضحة مع أحدث التقنيات الطبية",
                "Book your consultation now with the best eye doctors in Egypt and enjoy clear vision with the latest medical technologies"
              )}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                {t("احجز الآن", "Book Now")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 px-8 py-4 text-lg rounded-xl"
              >
                01234567890
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t("مريض راضي", "Happy Patients")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t("سنوات خبرة", "Years Experience")}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{t("خدمة عملاء", "Customer Service")}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              {/* Eye Care Illustration */}
              <div className="flex items-center justify-center h-96">
                <motion.div
                  className="relative"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <Eye className="w-32 h-32 text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-teal-400 rounded-full opacity-80"
                    animate={{
                      y: [10, -10, 10],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-300 rounded-full"
                    animate={{
                      x: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}