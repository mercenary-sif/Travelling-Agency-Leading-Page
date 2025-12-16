import { useTranslation } from "react-i18next";
import { Destination, SectionHeader } from "../components/export";
import { Full_Europe, London_UK, Rome_Italy } from "./import";
import { motion } from "framer-motion";

const DistinationsImages = [Rome_Italy, London_UK, Full_Europe];


const parentVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 4, ease: "easeOut" },
  },
};

const TitleVariant = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 4.2, ease: "easeInOut" },
  },
};

const swingVariant = {
  show: {
    opacity: 1,
    x: [0, -35, 0, 45, 0],
    rotate: [0, 5, 0, -15, 0],
    transition: {
      duration: 6,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const TopSelling = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const topSellingData = t("topSelling.destinations", { returnObjects: true });

  return (
    <motion.section
      className="flex flex-col justify-center items-center gap-[1rem] p-[1rem] md:p-[2rem]"
      initial="hidden"
      whileInView="show"
      variants={parentVariants}
      viewport={{ amount: 0.25 }}
    >
      <SectionHeader
        lang={lang}
        TxtCenter={true}
        Title={
          <motion.div variants={TitleVariant}>
            {t("topSelling.title")}
          </motion.div>
        }
        subTitle={
          <motion.div
            variants={swingVariant}
            initial="hidden"
            animate="show"
          >
            {t("topSelling.subTitle")}
          </motion.div>
        }
      />

      <div className="w-full lg:w-[85%] flex flex-col md:flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-[2rem] p-2">
        {topSellingData.map((item, i) => (
          <motion.div
            className="w-full lg:w-[85%] flex flex-col md:flex-row flex-wrap xl:flex-nowrap justify-center items-center gap-[2rem] p-2"
            key={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3}}
          >
            <Destination
              lang={lang}
              name={item.name}
              price={item.price}
              days={item.days}
              cover={DistinationsImages[i]}
              isLastItem={i === topSellingData.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TopSelling;
