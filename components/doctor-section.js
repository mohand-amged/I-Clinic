"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { 
  Award, 
  BookOpen, 
  Users, 
  Calendar,
  GraduationCap,
  Stethoscope,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export default function DoctorSection() {
  const { t } = useLanguage();
  
  const mainDoctor = {
    name: t("د. أحمد محمد الشريف", "Dr. Ahmed Mohamed El-Sharif"),
    title: t("استشاري طب وجراحة العيون", "Consultant Ophthalmologist & Eye Surgeon"),
    image: "👨‍⚕️",
    experience: t("15+ سنة خبرة", "15+ years experience"),
    patients: t("5000+ مريض", "5000+ patients"),
    rating: 4.9,
    location: t("القاهرة، مصر", "Cairo, Egypt"),
    
    qualifications: [
      t("بكالوريوس الطب والجراحة - جامعة القاهرة", "MBBS - Cairo University"),
      t("ماجستير طب وجراحة العيون - جامعة عين شمس", "Master in Ophthalmology - Ain Shams University"),
      t("دكتوراة في طب العيون - جامعة القاهرة", "PhD in Ophthalmology - Cairo University"),
      t("زمالة الكلية الملكية للجراحين - لندن", "Fellowship of the Royal College of Surgeons - London")
    ],
    
    specializations: [
      {
        icon: Award,
        title: t("جراحة الليزك المتطورة", "Advanced LASIK Surgery"),
        description: t("خبرة في أحدث تقنيات تصحيح النظر بالليزر", "Expertise in the latest laser vision correction techniques")
      },
      {
        icon: Stethoscope,
        title: t("جراحة المياه البيضاء", "Cataract Surgery"),
        description: t("إجراء أكثر من 2000 عملية ناجحة", "Performed over 2000 successful surgeries")
      },
      {
        icon: BookOpen,
        title: t("أمراض الشبكية", "Retinal Diseases"),
        description: t("تشخيص وعلاج أمراض الشبكية المعقدة", "Diagnosis and treatment of complex retinal diseases")
      },
      {
        icon: Users,
        title: t("طب عيون الأطفال", "Pediatric Ophthalmology"),
        description: t("رعاية متخصصة لعيون الأطفال والرضع", "Specialized care for children's and infants' eyes")
      }
    ],
    
    achievements: [
      t("عضو الجمعية المصرية لطب وجراحة العيون", "Member of Egyptian Society of Ophthalmology"),
      t("عضو الأكاديمية الأمريكية لطب العيون", "Member of American Academy of Ophthalmology"),
      t("حاصل على جائزة أفضل طبيب عيون في القاهرة 2023", "Best Ophthalmologist in Cairo Award 2023"),
      t("مؤلف 15 بحث علمي في مجال طب العيون", "Author of 15 scientific papers in ophthalmology")
    ]
  };

  const teamMembers = [
    {
      name: t("د. فاطمة أحمد", "Dr. Fatima Ahmed"),
      title: t("أخصائي طب عيون الأطفال", "Pediatric Ophthalmology Specialist"),
      image: "👩‍⚕️",
      experience: t("8 سنوات خبرة", "8 years experience")
    },
    {
      name: t("د. محمد علي", "Dr. Mohamed Ali"),
      title: t("أخصائي جراحة الشبكية", "Retinal Surgery Specialist"),
      image: "👨‍⚕️",
      experience: t("10 سنوات خبرة", "10 years experience")
    },
    {
      name: t("أ. سارة محمود", "Ms. Sara Mahmoud"),
      title: t("أخصائي فحص النظر", "Vision Testing Specialist"),
      image: "👩‍💼",
      experience: t("5 سنوات خبرة", "5 years experience")
    }
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
            {t("فريقنا الطبي المتخصص", "Our Specialized Medical Team")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            {t("أطباء متخصصون في طب وجراحة العيون", "Doctors specialized in ophthalmology and eye surgery")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </motion.div>

        {/* Main Doctor Profile */}
        <motion.div
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 md:p-12 shadow-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/10 dark:to-teal-900/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Doctor Image and Basic Info */}
              <div className="text-center lg:text-right">
                <motion.div
                  className="relative inline-block mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center text-8xl mx-auto lg:mx-0 shadow-xl">
                    {mainDoctor.image}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-yellow-500" />
                  </div>
                </motion.div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {mainDoctor.name}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                  {mainDoctor.nameEn}
                </p>
                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {mainDoctor.title}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{mainDoctor.experience.split(' ')[0]}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{t("سنة خبرة", "Years")}</div>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-xl">
                    <div className="text-2xl font-bold text-teal-600">{mainDoctor.patients.split(' ')[0]}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{t("مريض", "Patients")}</div>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-500 flex items-center justify-center gap-1">
                      <Star className="w-5 h-5 fill-current" />
                      {mainDoctor.rating}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{t("تقييم", "Rating")}</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex justify-center lg:justify-start space-x-4 rtl:space-x-reverse">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="w-4 h-4 mr-2" />
                    {t("اتصال", "Call")}
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t("احجز موعد", "Book Appointment")}
                  </Button>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="space-y-8">
                {/* Qualifications */}
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    {t("المؤهلات العلمية", "Academic Qualifications")}
                  </h4>
                  <ul className="space-y-2">
                    {mainDoctor.qualifications.map((qualification, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{qualification}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-teal-600" />
                    {t("التخصصات", "Specializations")}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {mainDoctor.specializations.map((spec, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <spec.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            {spec.title}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            {spec.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    {t("الجوائز والإنجازات", "Awards & Achievements")}
                  </h4>
                  <ul className="space-y-2">
                    {mainDoctor.achievements.slice(0, 3).map((achievement, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Award className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            {t("باقي أعضاء الفريق الطبي", "Other Medical Team Members")}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.image}
                  </motion.div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {member.experience}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("احجز استشارة مع فريقنا الطبي المتخصص", "Book a Consultation with Our Specialized Medical Team")}
            </h3>
            <p className="text-xl mb-6 opacity-90">
              {t("اختر الطبيب المناسب واحجز موعدك بسهولة", "Choose the right doctor and book your appointment easily")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-white hover:bg-blue-50"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t("احجز موعد", "Book Appointment")}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t("اتصل بنا", "Contact Us")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}