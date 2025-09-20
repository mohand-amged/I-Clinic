"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Eye, Glasses, Monitor, Baby } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function ProblemSolutionSection() {
  const { t, isRTL } = useLanguage();
  const problems = [
    {
      icon: Eye,
      title: t("رؤية ضبابية", "Blurred Vision"),
      subtitle: t("رؤية غير واضحة", "Unclear Sight"),
      description: t("صعوبة في الرؤية الواضحة للأشياء القريبة أو البعيدة", "Difficulty in clear vision for near or distant objects"),
    },
    {
      icon: Glasses,
      title: t("مشاكل النظارات", "Glasses Issues"),
      subtitle: t("مشاكل العدسات", "Lens Problems"),
      description: t("الحاجة المستمرة لتغيير النظارات أو العدسات", "Continuous need to change glasses or contact lenses"),
    },
    {
      icon: Monitor,
      title: t("إجهاد العين", "Eye Strain"),
      subtitle: t("تعب العيون", "Eye Fatigue"),
      description: t("تعب العين من الاستخدام المطول للشاشات", "Eye fatigue from prolonged screen usage"),
    },
  ];

  const solutions = [
    {
      title: t("فحص شامل للعين", "Comprehensive Eye Examination"),
      description: t("فحص دقيق باستخدام أحدث الأجهزة التشخيصية", "Precise examination using the latest diagnostic equipment"),
    },
    {
      title: t("عمليات الليزك المتطورة", "Advanced LASIK Surgery"),
      description: t("تقنيات حديثة لتصحيح النظر بدون نظارات", "Modern techniques for vision correction without glasses"),
    },
    {
      title: t("علاج متخصص", "Specialized Treatment"),
      description: t("خطط علاجية مخصصة لكل حالة", "Customized treatment plans for each case"),
    },
  ];

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
            {t("هل تعاني من مشاكل في الرؤية؟", "Do You Suffer from Vision Problems?")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            {t("نحن هنا لمساعدتك", "We're Here to Help You")}
          </p>
        </motion.div>

        {/* Problems Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className={`flex items-center ${isRTL ? 'space-x-4 rtl:space-x-reverse' : 'space-x-4'} bg-red-50 dark:bg-red-900/20 px-6 py-3 rounded-full`}>
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
                {t("المشاكل الشائعة", "Common Problems")}
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-red-100 dark:border-red-900/50">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    {problem.subtitle}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {problem.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arrow Transition */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className={`flex items-center ${isRTL ? 'space-x-4 rtl:space-x-reverse' : 'space-x-4'} bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-full`}>
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                {t("الحلول المتطورة", "Advanced Solutions")}
              </h3>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t("عيادتنا مجهزة بأحدث تقنيات فحص وعلاج العيون", "Our clinic is equipped with the latest eye examination and treatment technologies")}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {t("نوفر رعاية متقدمة وشاملة لعينيك", "We provide advanced and comprehensive care for your eyes")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-green-100 dark:border-green-900/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      {solution.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {solution.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {t("لا تنتظر أكثر - احجز استشارتك اليوم", "Don't wait any longer - Book your consultation today")}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t("احصل على الرعاية التي تستحقها عيناك", "Get the care your eyes deserve")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}