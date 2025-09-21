"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function HeroSection() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-teal-900/20 overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-teal-400/10 dark:from-blue-600/5 dark:to-teal-600/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Enhanced Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.1, 1],
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
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400/60 rounded-full"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-teal-400/40 rounded-full"
        animate={{
          y: [15, -15, 15],
          x: [5, -5, 5],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-2/3 left-3/4 w-3 h-3 bg-blue-300/50 rounded-full"
        animate={{
          x: [-8, 8, -8],
          opacity: [0.2, 0.9, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-20 sm:py-32 relative z-10">
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 dark:border-blue-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 dark:bg-blue-300 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'} space-y-8`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-700/50 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t("متاح الآن - خدمة 24/7", "Available Now - 24/7 Service")}
            </motion.div>
            
            {/* Main Headlines */}
            <div className="space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                  {t("رؤيتك", "Your")}
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-500 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {t("تستحق", "Vision")}
                </span>
                <br />
                <span className="text-slate-800 dark:text-slate-200">
                  {t("الأفضل", "Deserves the Best")}
                </span>
              </motion.h1>
              <motion.div
                className="flex items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
                <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
                  {t("أفضل رعاية لعينيك في مصر", "Best Eye Care in Egypt")}
                </p>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
              </motion.div>
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

            {/* Enhanced Subheadline */}
            <motion.p
              className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto ${isRTL ? 'lg:mx-0' : 'lg:mr-0'} leading-relaxed`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t(
                "احجز استشارتك الآن مع أفضل أطباء العيوع في مصر واستمتع برؤية واضحة مع أحدث التقنيات الطبية",
                "Book your consultation now with Egypt's leading eye specialists and enjoy crystal-clear vision with the latest medical technologies"
              )}
            </motion.p>
            
            {/* Enhanced CTA Buttons */}
            <motion.div
              className={`flex flex-col sm:flex-row gap-6 justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex items-center justify-center gap-3">
                  <div className="p-1 bg-white/20 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-lg">{t("احجز الآن", "Book Now")}</span>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </div>
              </motion.button>
              
              <motion.a
                href="tel:+201234567890"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-700 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-1 bg-green-500 rounded-lg">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg">01234567890</span>
                <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                  {t("مجاني", "Free")}
                </div>
              </motion.a>
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