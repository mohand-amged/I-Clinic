"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: t("أحمد محمد", "Ahmed Mohamed"),
      age: t("32 سنة", "32 years"),
      location: t("القاهرة", "Cairo"),
      service: t("عملية الليزك", "LASIK Surgery"),
      rating: 5,
      text: t("رؤيتي رجعت واضحة بعد الليزك والدكتور كان محترف جداً. اصعملية كانت سريعة ومريحة ولم أشعر بأي ألم. أنصح بشدة بالعيادة", "My vision became clear after LASIK and the doctor was very professional. The operation was quick and comfortable and I didn't feel any pain. I highly recommend the clinic"),
      image: "👨‍💼"
    },
    {
      name: t("فاطمة أحمد", "Fatima Ahmed"),
      age: t("45 سنة", "45 years"),
      location: t("الجيزة", "Giza"),
      service: t("علاج المياه البيضاء", "Cataract Treatment"),
      rating: 5,
      text: t("عملية المياه البيضاء تمت بنجاح تام والطاقم الطبي كان متعاون جداً. الأسعار مناسبة والخدمة ممتازة", "Cataract surgery was completely successful and the medical staff was very cooperative. The prices are reasonable and the service is excellent"),
      image: "👩‍💼"
    },
    {
      name: t("محمود سعد", "Mahmoud Saad"),
      age: t("28 سنة", "28 years"),
      location: t("الإسكندرية", "Alexandria"),
      service: t("فحص العيون الشامل", "Comprehensive Eye Exam"),
      rating: 5,
      text: t("فحص دقيق ومفصل بأحدث الأجهزة. الدكتور شرح لي كل شيء بطريقة واضحة وأعطاني نصائح مفيدة جداً", "Accurate and detailed examination with the latest equipment. The doctor explained everything clearly and gave me very helpful advice"),
      image: "👨‍⚕️"
    },
    {
      name: t("سارة عبدالله", "Sara Abdullah"),
      age: t("35 سنة", "35 years"),
      location: t("القاهرة", "Cairo"),
      service: t("علاج جفاف العين", "Dry Eye Treatment"),
      rating: 5,
      text: t("كنت أعاني من جفاف العين الشديد والعلاج كان فعال جداً. الآن أشعر بالراحة والعيون لا تؤلمني", "I suffered from severe dry eyes and the treatment was very effective. Now I feel comfortable and my eyes don't hurt"),
      image: "👩‍🔬"
    },
    {
      name: t("علي حسن", "Ali Hassan"),
      age: t("50 سنة", "50 years"),
      location: t("المنصورة", "Mansoura"),
      service: t("فحص شبكية العين", "Retinal Examination"),
      rating: 5,
      text: t("اكتشف الدكتور مشكلة في الشبكية مبكراً وتم العلاج بنجاح. أشكر الفريق الطبي على الاهتمام والمتابعة", "The doctor discovered a retina problem early and treatment was successful. I thank the medical team for their attention and follow-up"),
      image: "👨‍🎓"
    },
    {
      name: t("منى إبراهيم", "Mona Ibrahim"),
      age: t("40 سنة", "40 years"),
      location: t("طنطا", "Tanta"),
      service: t("عملية المياه الزرقاء", "Glaucoma Surgery"),
      rating: 5,
      text: t("عملية المياه الزرقاء تمت بأمان تام والمتابعة ممتازة. أنصح جميع من يعاني من نفس المشكلة", "Glaucoma surgery was completely safe and follow-up was excellent. I recommend it to everyone who suffers from the same problem"),
      image: "👩‍🎓"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
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
            {t("ماذا يقول مرضانا", "What Our Patients Say")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            {t("آراء وتجارب حقيقية من مرضانا", "Real opinions and experiences from our patients")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-700 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-700 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>

            {/* Current Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 mx-8 bg-white dark:bg-slate-900 shadow-xl">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </blockquote>

                  {/* Patient Info */}
                  <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-2xl">
                      {testimonials[currentIndex].image}
                    </div>
                    <div className="text-right rtl:text-right">
                      <div className="font-bold text-slate-900 dark:text-white text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {testimonials[currentIndex].age} • {testimonials[currentIndex].location}
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {testimonials[currentIndex].service}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
            {t("تقييمات أخرى من مرضانا", "More Reviews from Our Patients")}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={`grid-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-900">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed line-clamp-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-sm">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
              {t("انضم لآلاف المرضى الراضين", "Join Thousands of Satisfied Patients")}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              {t("اكتب تجربتك وشارك قصة نجاحك معنا", "Write your experience and share your success story with us")}
            </p>
            <div className="flex justify-center">
              {renderStars(5)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}