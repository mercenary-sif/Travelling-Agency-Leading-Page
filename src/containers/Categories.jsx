import { useTranslation } from "react-i18next";
import { Card, SectionHeader } from "../components/export";
import { Service1, Service2, Service3, Service4 } from "./import";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 3, ease: "easeOut" }
  },
};
const parentVariants = {
  hidden: {opacity: 0, y: 30 },
  show: {
    opacity: 1, 
    y: 0,
    transition: { duration: 2, ease: "easeOut" }
  },
};
const TitleVariant = { 
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 4.2, 
      ease: "easeIn" 
    },
  },
};
const swingVariant = {
  show: {
    opacity: 1,
    x: [0, -129, 0, 120, 0],   
    rotate: [0, 15, 0, -15, 0], 
    transition: {
      duration: 10,          
      ease: "easeInOut",       
      repeat: Infinity, 
      repeatType: "loop",           
    },
  },
};
const Categories = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  const services = [
    { icon: Service4, title: t("services.weather.title"), desc: t("services.weather.desc") },
    { icon: Service3, title: t("services.flights.title"), desc: t("services.flights.desc") },
    { icon: Service2, title: t("services.events.title"), desc: t("services.events.desc") },
    { icon: Service1, title: t("services.customization.title"), desc: t("services.customization.desc") },
  ];

  return (
    <motion.section
      className="relative flex flex-col justify-center items-center gap-6 py-12 px-4"
      initial="hidden"
      whileInView="show"
      variants={parentVariants}
      viewport={{  amount: 0.25 }} 
    >
      <SectionHeader
        lang={lang}
        TxtCenter
        Title={
          <motion.div
            variants={TitleVariant}    
          >
            {t("categories.title")}
          </motion.div>
        }
        subTitle={<motion.div
            variants={swingVariant}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {t("categories.subtitle")}
          </motion.div>}
      />

      <div className="flex gap-6 flex-wrap justify-center mt-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
          >
            <Card lang={lang} Icon={s.icon} service={s.title} descriptive={s.desc} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Categories;
