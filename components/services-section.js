"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  Zap, 
  Droplets, 
  Baby, 
  ArrowRight,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Eye,
      title: "فحص العيون الشامل",
      subtitle: "Comprehensive Eye Exam",
      description: "فحص دقيق ومتكامل للعين باستخدام أحدث الأجهزة التشخيصية المتطورة",
      features: [
        "فحص قاع العين",
        "قياس ضغط العين",
        "فحص الرؤية الملونة",
        "تقييم العضلات"
      ],
      price: "من 200 جنيه",
      duration: "30-45 دقيقة",
      color: "blue"
    },
    {
      icon: Zap,
      title: "عمليات الليزك",
      subtitle: "LASIK Surgery",
      description: "تصحيح النظر بالليزر لعلاج قصر وطول النظر والاستجماتيزم",
      features: [
        "ليزك تقليدي",
        "فيمتو ليزك",
        "سمايل ليزك",
        "متابعة ما بعد العملية"
      ],
      price: "من 5000 جنيه",
      duration: "15-20 دقيقة",
      color: "teal"
    },
    {
      icon: Droplets,
      title: "علاج المياه البيضاء",
      subtitle: "Cataract Treatment",
      description: "إزالة المياه البيضاء وزراعة العدسات الداخلية بأحدث التقنيات",
      features: [
        "عملية الفاكو",
        "عدسات أحادية البؤرة",
        "عدسات متعددة البؤرة",
        "عدسات تورك"
      ],
      price: "من 8000 جنيه",
      duration: "20-30 دقيقة",
      color: "indigo"
    },
    {
      icon: Baby,
      title: "طب عيون الأطفال",
      subtitle: "Pediatric Eye Care",
      description: "رعاية متخصصة لعيون الأطفال وعلاج مشاكل النظر في سن مبكرة",
      features: [
        "فحص الأطفال حديثي الولادة",
        "علاج الحول",
        "كسل العين",
        "مشاكل الجفون"
      ],
      price: "من 300 جنيه",
      duration: "20-30 دقيقة",
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        icon: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
        border: "border-blue-200 dark:border-blue-800",
        gradient: "from-blue-500 to-blue-600"
      },
      teal: {
        bg: "bg-teal-50 dark:bg-teal-900/20",
        icon: "bg-teal-100 dark:bg-teal-900/30 text-teal-600",
        border: "border-teal-200 dark:border-teal-800",
        gradient: "from-teal-500 to-teal-600"
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        icon: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600",
        border: "border-indigo-200 dark:border-indigo-800",
        gradient: "from-indigo-500 to-indigo-600"
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        icon: "bg-green-100 dark:bg-green-900/30 text-green-600",
        border: "border-green-200 dark:border-green-800",
        gradient: "from-green-500 to-green-600"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
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
            خدماتنا المتخصصة
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Our Specialized Services
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${colors.border} ${colors.bg} group`}>
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8" />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                        <div className={`text-lg font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                          {service.price}
                        </div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8 flex-grow">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        يشمل الخدمة:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white group-hover:shadow-lg transition-all duration-300`}
                      size="lg"
                    >
                      <span>احجز الآن</span>
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              لست متأكد من الخدمة المناسبة؟
            </h3>
            <p className="text-xl mb-6 opacity-90">
              احجز استشارة مجانية مع أطبائنا المتخصصين
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 border-white hover:bg-blue-50 px-8"
            >
              استشارة مجانية
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}