"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-36 z-50 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      title={t("تغيير اللغة", "Change Language")}
    >
      <div className="relative flex items-center justify-center">
        <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <span className="text-[8px] font-bold text-white">
            {language.toUpperCase()}
          </span>
        </motion.div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {t("English", "العربية")}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700"></div>
      </div>
    </motion.button>
  );
}