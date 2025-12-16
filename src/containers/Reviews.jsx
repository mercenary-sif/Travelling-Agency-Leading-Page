import { useState } from "react";
import { Review, SectionHeader } from "../components/export";
import { profile_pic1, profile_pic2, profile_pic3 } from "./import";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


const parentVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const TitleVariant = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeIn" },
  },
};

const swingVariant = {
  show: {
    opacity: 1,
    x: [0, -20, 0, 20, 0],
    rotate: [0, 3, 0, -3, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};


const Reviews = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const [active, setActive] = useState(0);

  const ListOfReviews = t("reviews.list", { returnObjects: true });

  const next = () =>
    setActive((prev) => (prev + 1) % ListOfReviews.length);

  const prev = () =>
    setActive((prev) =>
      prev === 0 ? ListOfReviews.length - 1 : prev - 1
    );

  const nextIndex = (active + 1) % ListOfReviews.length;

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
      className="relative flex w-full flex-col xl:flex-row justify-center items-center gap-[1rem] md:gap-[2rem] p-[1rem] md:px-[2rem] md:my-[4rem]"
    >
      
      <div className="flex flex-col justify-center items-center xl:items-start gap-2 p-[1rem] lg:px-[2rem]">
        <SectionHeader
          lang={lang}
          TxtCenter={false}
          Title={
            <motion.div variants={TitleVariant}>
              {t("reviews.title")}
            </motion.div>
          }
          subTitle={
            <motion.div variants={swingVariant}>
              {t("reviews.subTitle")}
            </motion.div>
          }
        />

        <div className="flex gap-[1.5rem] mt-6 w-[30%] justify-center">
          {ListOfReviews.map((_, i) => (
            <span
              key={i}
              className={`w-[12px] h-[12px] rounded-full hidden lg:block cursor-not-allowed transition ${
                i === active ? "bg-[#212832]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      
      <div className="flex  flex-col w-full md:w-[50%] lg:flex-row justify-center items-center gap-[4rem] p-2">
        <motion.div variants={cardVariant} className="relative">
          {/* NEXT REVIEW (BACKGROUND CARD) */}
          <div
            onClick={() => setActive(nextIndex)}
            className={`cursor-pointer absolute 
            ${lang==='ar' ? 'bottom-[-3rem] md:bottom-[-6rem] left-[-2rem] '
              :'bottom-[-3rem] md:bottom-[-6rem] right-[-2rem] md:right-[-4rem]'
            } 
            scale-[0.95] opacity-40 z-0`}
          >
            <Review
              lang={lang}
              profile={[profile_pic1, profile_pic2, profile_pic3][nextIndex]}
              {...ListOfReviews[nextIndex]}
            />
          </div>

          {/* CURRENT REVIEW */}
          <div className="relative z-10 flex items-center justify-center">
            <Review
              lang={lang}
              profile={[profile_pic1, profile_pic2, profile_pic3][active]}
              {...ListOfReviews[active]}
            />
          </div>
        </motion.div>

        
        <div className={`flex items-center flex-col gap-[2rem]`}>
          <div className="flex items-center gap-[2rem]">
            {ListOfReviews.map((_, i) => (
              <span
                key={i}
                className={`w-[12px] h-[12px] rounded-full block lg:hidden cursor-not-allowed transition ${
                  i === active ? "bg-[#212832]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className={`flex items-center ${lang==='ar' ? 'flex-row-reverse' :'flex-row'} lg:flex-col gap-[2rem]`}>
            <button
              onClick={prev}
              className="p-2 rounded-full border hover:bg-gray-100 transition"
            >
              <ChevronUp size={20} className="hidden lg:block" />
              <ChevronLeft size={20} className="block lg:hidden" />
            </button>

            <button
              onClick={next}
              className="p-2 rounded-full border hover:bg-gray-100 transition"
            >
              <ChevronDown size={20} className="hidden lg:block" />
              <ChevronRight size={20} className="block lg:hidden" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;
