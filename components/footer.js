"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Eye,
  Heart,
  ArrowUp
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "عن الطبيب", href: "#doctor" },
    { name: "احجز موعد", href: "#booking" },
  ];

  const services = [
    "فحص العيون الشامل",
    "عمليات الليزك",
    "علاج المياه البيضاء",
    "طب عيون الأطفال"
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com/eyeclinic",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      href: "https://instagram.com/eyeclinic",
      color: "hover:text-pink-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/eyeclinic", 
      color: "hover:text-blue-400"
    },
    {
      icon: Youtube,
      name: "YouTube",
      href: "https://youtube.com/eyeclinic",
      color: "hover:text-red-600"
    }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-teal-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Clinic Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">عيادة العيون</h3>
                  <p className="text-sm text-slate-400">Eye Care Clinic</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed">
                عيادة متخصصة في طب وجراحة العيون مع أحدث التقنيات والمعدات الطبية 
                لتقديم أفضل رعاية صحية لعينيك.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">5000+</div>
                  <div className="text-xs text-slate-400">مريض راضي</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-teal-400">15+</div>
                  <div className="text-xs text-slate-400">سنة خبرة</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
                روابط سريعة
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
                خدماتنا
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-slate-300 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
                معلومات التواصل
              </h4>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">اتصل بنا</p>
                    <a href="tel:+201234567890" className="text-slate-300 hover:text-white transition-colors">
                      01234567890
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="font-medium">البريد الإلكتروني</p>
                    <a href="mailto:info@eyeclinic.com" className="text-slate-300 hover:text-white transition-colors">
                      info@eyeclinic.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-medium">العنوان</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      123 شارع النيل<br />
                      القاهرة، مصر
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">مواعيد العمل</p>
                    <div className="text-slate-300 text-sm">
                      <p>سبت - خميس: 9ص - 6م</p>
                      <p>الجمعة: 2م - 6م</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links & CTA */}
        <motion.div
          className="border-t border-slate-800 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">تابعنا على:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Emergency CTA */}
            <Button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
              size="lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              طوارئ 24/7
            </Button>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p className="flex items-center gap-2">
              © 2024 عيادة العيون. جميع الحقوق محفوظة
              <Heart className="w-4 h-4 text-red-500" />
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>
    </footer>
  );
}