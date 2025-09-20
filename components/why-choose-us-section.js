"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
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
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Settings,
      title: t("أحدث المعدات", "Latest Equipment"),
      subtitle: t("أحدث التقنيات", "Advanced Technology"),
      description: t("نستخدم أحدث الأجهزة الطبية والتقنيات المتطورة في فحص وعلاج العيون", "We use the latest medical equipment and advanced technologies for eye examination and treatment"),
      stats: t("99% دقة التشخيص", "99% Diagnostic Accuracy"),
      color: "blue"
    },
    {
      icon: UserCheck,
      title: t("أطباء خبراء", "Expert Doctors"),
      subtitle: t("خبراء متخصصون", "Specialized Experts"),
      description: t("فريق من أطباء العيون المتخصصين مع خبرة تزيد عن 10 سنوات", "Team of specialized ophthalmologists with over 10 years of experience"),
      stats: t("+15 سنة خبرة", "+15 Years Experience"),
      color: "teal"
    },
    {
      icon: CreditCard,
      title: t("أسعار مناسبة", "Affordable Prices"),
      subtitle: t("أسعار تنافسية", "Competitive Rates"),
      description: t("نقدم أفضل خدمات العيون بأسعار مناسبة مع إمكانية التقسيط", "We provide the best eye care services at affordable prices with installment options"),
      stats: t("خصم 20% للطلاب", "20% Student Discount"),
      color: "green"
    },
    {
      icon: Clock,
      title: t("خدمة سريعة", "Fast Service"),
      subtitle: t("خدمة فورية", "Immediate Service"),
      description: t("مواعيد سريعة وخدمة فورية مع أوقات انتظار قصيرة", "Quick appointments and immediate service with short waiting times"),
      stats: t("أقل من 15 دقيقة انتظار", "Less than 15 min wait"),
      color: "indigo"
    }
  ];

  const achievements = [
    { icon: Users, number: "5000+", label: t("مريض راضي", "Happy Patients") },
    { icon: Award, number: "15+", label: t("سنة خبرة", "Years Experience") },
    { icon: Star, number: "4.9", label: t("تقييم العملاء", "Customer Rating") },
    { icon: Shield, number: "100%", label: t("ضمان الجودة", "Quality Guarantee") }
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
            {t("لماذا تختار عيادتنا؟", "Why Choose Our Clinic?")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            {t("اكتشف ما يميزنا عن الآخرين", "Discover what makes us different from others")}
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
                {t("إنجازاتنا تتحدث عنا", "Our Achievements Speak for Us")}
              </h3>
              <p className="text-xl opacity-90">
                {t("أرقام تعبر عن جودتنا", "Numbers that reflect our quality")}
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
              {t("ضمان الجودة", "Quality Guarantee")}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t("نضمن جودة الخدمة مع إمكانية استرداد الأموال في حالة عدم الرضا", "We guarantee service quality with money-back option in case of dissatisfaction")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-teal-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {t("خدمة 24/7", "24/7 Service")}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t("خدمة عملاء متاحة على مدار الساعة للرد على استفساراتكم", "Customer service available 24/7 to answer your inquiries")}
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {t("اعتماد دولي", "International Accreditation")}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t("عيادتنا معتمدة من الهيئات الطبية المحلية والدولية", "Our clinic is accredited by local and international medical bodies")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}