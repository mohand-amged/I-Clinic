"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar"); // Default to Arabic
  const [isRTL, setIsRTL] = useState(true);

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
      setIsRTL(savedLanguage === "ar");
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "ar" ? "en" : "ar";
    setLanguage(newLanguage);
    setIsRTL(newLanguage === "ar");
    localStorage.setItem("language", newLanguage);
    
    // Update document direction
    document.documentElement.setAttribute("dir", newLanguage === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", newLanguage);
  };

  const t = (arabicText, englishText) => {
    return language === "ar" ? arabicText : englishText;
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    t, // translation function
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};