"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  User,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

export default function BookingContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "فحص العيون الشامل",
    "عمليات الليزك",
    "علاج المياه البيضاء",
    "طب عيون الأطفال",
    "علاج المياه الزرقاء",
    "فحص الشبكية",
    "استشارة عامة"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      subtitle: "Call Us",
      value: "01234567890",
      link: "tel:+201234567890",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      subtitle: "WhatsApp",
      value: "01234567890",
      link: "https://wa.me/201234567890",
      color: "green"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      subtitle: "Email",
      value: "info@eyeclinic.com",
      link: "mailto:info@eyeclinic.com",
      color: "teal"
    },
    {
      icon: MapPin,
      title: "العنوان",
      subtitle: "Address",
      value: "123 شارع النيل، القاهرة",
      link: "#map",
      color: "indigo"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 hover:bg-blue-200",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 hover:bg-green-200",
      teal: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 hover:bg-teal-200",
      indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 hover:bg-indigo-200"
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800" id="booking">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            احجز موعدك الآن
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Book Your Appointment Now
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-white dark:bg-slate-900 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    احجز استشارتك
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    املأ البيانات وسنتواصل معك قريباً
                  </p>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    تم إرسال طلبك بنجاح!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    سنتواصل معك خلال 24 ساعة
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        الاسم كاملاً *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                        className="text-right"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        رقم الهاتف *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="01234567890"
                        type="tel"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      type="email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      نوع الخدمة *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-right"
                    >
                      <option value="">اختر نوع الخدمة</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        التاريخ المفضل *
                      </label>
                      <Input
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        الوقت المفضل *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      >
                        <option value="">اختر الوقت</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      ملاحظات إضافية
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="أي معلومات إضافية تريد مشاركتها..."
                      rows={4}
                      className="text-right"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    إرسال الطلب
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <a href={contact.link} className="block">
                      <div className={`w-12 h-12 ${getColorClasses(contact.color)} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                        {contact.subtitle}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                        {contact.value}
                      </p>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      تواصل فوري عبر واتساب
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      احجز موعدك بسرعة أو اطرح أسئلتك مباشرة
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <a href="https://wa.me/201234567890?text=مرحباً، أريد حجز موعد في عيادة العيون">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      واتساب
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    مواعيد العمل
                  </h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">السبت - الخميس</span>
                    <span className="font-medium">9:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">الجمعة</span>
                    <span className="font-medium">2:00 م - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500">الطوارئ</span>
                    <span className="font-medium">24/7</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              id="map"
            >
              <Card className="p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  موقعنا على الخريطة
                </h4>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-500 dark:text-slate-400 mb-2">
                      123 شارع النيل، القاهرة
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a 
                        href="https://maps.google.com/maps?q=Cairo,Egypt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        عرض في خرائط جوجل
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}