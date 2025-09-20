"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Settings, 
  UserCheck, 
  CreditCard, 
  Award,
  Clock,
  Shield,
  Users,
  Star
} from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Settings,
      title: "أحدث المعدات",
      subtitle: "Latest Equipment",
      description: "نستخدم أحدث الأجهزة الطبية والتقنيات المتطورة في فحص وعلاج العيون",
      stats: "99% دقة التشخيص",
      color: "blue"
    },
    {
      icon: UserCheck,
      title: "أطباء خبراء",
      subtitle: "Expert Doctors",
      description: "فريق من أطباء العيون المتخصصين مع خبرة تزيد عن 10 سنوات",
      stats: "+15 سنة خبرة",
      color: "teal"
    },
    {
      icon: CreditCard,
      title: "أسعار مناسبة",
      subtitle: "Affordable Prices",
      description: "نقدم أفضل خدمات العيون بأسعار مناسبة مع إمكانية التقسيط",
      stats: "خصم 20% للطلاب",
      color: "green"
    },
    {
      icon: Clock,
      title: "خدمة سريعة",
      subtitle: "Fast Service",
      description: "مواعيد سريعة وخدمة فورية مع أوقات انتظار قصيرة",
      stats: "أقل من 15 دقيقة انتظار",
      color: "indigo"
    }
  ];

  const achievements = [
    { icon: Users, number: "5000+", label: "مريض راضي" },
    { icon: Award, number: "15+", label: "سنة خبرة" },
    { icon: Star, number: "4.9", label: "تقييم العملاء" },
    { icon: Shield, number: "100%", label: "ضمان الجودة" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500/10 to-blue-600/10",
        border: "border-blue-200 dark:border-blue-700",
        icon: "bg-blue-100 dark:bg-blue-900/30 text-blue-600",
        accent: "text-blue-600"
      },
      teal: {
        bg: "from-teal-500/10 to-teal-600/10",
        border: "border-teal-200 dark:border-teal-700",
        icon: "bg-teal-100 dark:bg-teal-900/30 text-teal-600",
        accent: "text-teal-600"
      },
      green: {
        bg: "from-green-500/10 to-green-600/10",
        border: "border-green-200 dark:border-green-700",
        icon: "bg-green-100 dark:bg-green-900/30 text-green-600",
        accent: "text-green-600"
      },
      indigo: {
        bg: "from-indigo-500/10 to-indigo-600/10",
        border: "border-indigo-200 dark:border-indigo-700",
        icon: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600",
        accent: "text-indigo-600"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
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
            لماذا تختار عيادتنا؟
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Why Choose Our Clinic?
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`p-6 text-center h-full hover:shadow-lg transition-all duration-300 border-2 ${colors.border} bg-gradient-to-br ${colors.bg} group hover:-translate-y-2`}>
                  <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    {feature.subtitle}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className={`font-bold ${colors.accent} text-sm`}>
                    {feature.stats}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                إنجازاتنا تتحدث عنا
              </h3>
              <p className="text-xl opacity-90">
                Our achievements speak for themselves
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-sm opacity-90">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              ضمان الجودة
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              نضمن جودة الخدمة مع إمكانية استرداد الأموال في حالة عدم الرضا
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-teal-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              خدمة 24/7
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              خدمة عملاء متاحة على مدار الساعة للرد على استفساراتكم
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              اعتماد دولي
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              عيادتنا معتمدة من الهيئات الطبية المحلية والدولية
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}