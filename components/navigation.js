"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Menu, X, Phone, Calendar, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Navigation() {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "services", "doctor", "booking"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      name: t("الرئيسية", "Home"), 
      href: "#home", 
      id: "home",
      icon: Eye 
    },
    { 
      name: t("خدماتنا", "Services"), 
      href: "#services", 
      id: "services",
      icon: Clock 
    },
    { 
      name: t("عن الطبيب", "About Doctor"), 
      href: "#doctor", 
      id: "doctor",
      icon: MapPin 
    },
    { 
      name: t("احجز موعد", "Book Appointment"), 
      href: "#booking", 
      id: "booking",
      icon: Calendar 
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-slate-800/50"
            : "bg-gradient-to-b from-black/10 to-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Top notification bar */}
        {!isScrolled && (
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center py-2 text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-4">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{t("اتصل الآن: 01234567890 | خدمة 24/7", "Call Now: 01234567890 | 24/7 Service")}</span>
            </div>
          </motion.div>
        )}
        
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between ${isScrolled ? 'h-16' : 'h-20'} transition-all duration-500`}>
            {/* Logo */}
            <motion.div
              className={`flex items-center ${isRTL ? 'space-x-4 rtl:space-x-reverse' : 'space-x-4'} cursor-pointer`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("#home")}
            >
              <motion.div 
                className="relative"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <div className={`${isScrolled ? 'w-12 h-12' : 'w-14 h-14'} bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500`}>
                  <Eye className={`${isScrolled ? 'w-6 h-6' : 'w-7 h-7'} text-white transition-all duration-500`} />
                </div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <motion.h1 
                  className={`${isScrolled ? 'text-xl' : 'text-2xl'} font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent transition-all duration-500`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {t("عيادة العيون", "EyeCare Clinic")}
                </motion.h1>
                {!isScrolled && (
                  <motion.p 
                    className="text-sm text-slate-600 dark:text-slate-400 font-medium"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {t("رؤيتك هي أولويتنا", "Your Vision, Our Priority")}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-1 rtl:space-x-reverse' : 'space-x-1'}`}>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                const IconComponent = item.icon;
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-blue-600 dark:text-blue-400 shadow-lg' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20'
                    }`}
                    whileHover={{ y: -1, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <IconComponent className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-500'}`} />
                    <span className="text-sm">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-30' : ''}`}></div>
                  </motion.button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className={`hidden lg:flex items-center ${isRTL ? 'space-x-3 rtl:space-x-reverse' : 'space-x-3'}`}>
              {/* Emergency Call Button */}
              <motion.a
                href="tel:+201234567890"
                className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="p-1 bg-green-500 rounded-lg">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium">
                  {isScrolled ? "01234567890" : t("اتصل الآن", "Call Now")}
                </span>
              </motion.a>
              
              {/* Book Appointment Button */}
              <motion.button
                onClick={() => scrollToSection("#booking")}
                className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{t("احجز الآن", "Book Now")}</span>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-white/20 dark:border-slate-800/50 shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="container mx-auto px-4 py-8">
                {/* Mobile Navigation Items */}
                <div className="space-y-2 mb-8">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                      <motion.button
                        key={index}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-blue-600 dark:text-blue-400' 
                            : 'text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
                        } ${isRTL ? 'text-right' : 'text-left'}`}
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: isRTL ? -5 : 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-blue-500 group-hover:text-white'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                            layoutId="activeMobileTab"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
                
                {/* Mobile CTA Buttons */}
                <motion.div
                  className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  {/* Emergency Call */}
                  <motion.a
                    href="tel:+201234567890"
                    className="w-full flex items-center justify-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-400 font-medium transition-all duration-300 hover:bg-green-100 dark:hover:bg-green-900/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2 bg-green-500 rounded-lg">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span>{t("اتصال طارئ: 01234567890", "Emergency Call: 01234567890")}</span>
                  </motion.a>
                  
                  {/* Book Appointment */}
                  <motion.button
                    onClick={() => scrollToSection("#booking")}
                    className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5" />
                    <span>{t("احجز موعدك الآن", "Book Your Appointment Now")}</span>
                  </motion.button>
                  
                  {/* Quick Info */}
                  <div className="text-center text-sm text-slate-600 dark:text-slate-400 pt-4">
                    <p>{t("متاح على مدار الساعة - خدمة طوارئ", "Available 24/7 - Emergency Service")}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}