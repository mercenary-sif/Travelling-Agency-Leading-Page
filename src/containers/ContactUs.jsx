import { Mail } from "lucide-react";
import { Mask, Mask2, SendIcon } from "./import";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const TitleVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 3.2, ease: "easeIn" },
  },
};

const swingVariant = {
  show: {
    opacity: 1,
    x: [0, -22, 0, 9, 0],   
    rotate: [0, 5, 0, -175, 0], 
    transition: {
      duration: 5,          
      ease: "easeInOut",       
      repeat: Infinity, 
      repeatType: "loop",           
    },
  },
};

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
      className="relative w-full h-[490px] flex justify-center items-center g-[1rem] p-[2rem] mt-[2rem]"
    >
      <div className="relative w-full md:w-[85%] h-[413px] shadow-dual-cyan flex flex-col justify-center items-center gap-[2rem] p-[1rem] lg:p-[3rem] rounded-lg rounded-tl-[5rem] bg-[#d8d1f1ec] transition-all duration-300 group">

        {/* Send Icon */}
        <motion.div
          variants={swingVariant}
          initial="hidden"
          animate="show"
          className="absolute flex justify-end items-center right-[-1rem] top-[-1rem] md:right-[-2rem] md:top-[-2rem] z-10"
        >
          <img
            src={SendIcon}
            alt="sender icon for styling"
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-cover"
          />
        </motion.div>

        {/* Mask */}
        <div className="absolute flex justify-end items-center right-[1rem] top-[1rem] md:right-[2rem] md:top-[2rem] z-10">
          <img
            src={Mask}
            alt="Decoying for styling"
            className="w-[150px] h-[250px] md:w-[264px] md:h-[351.52px] object-cover"
          />
        </div>

        {/* Mask 2 */}
        <div className="absolute flex justify-end items-center left-0 bottom-0 opacity-30 z-0">
          <img
            src={Mask2}
            alt="Decoying for styling"
            className="w-[250px] h-[250px] md:w-[389.45px] md:h-[389.45px] object-cover"
          />
        </div>

        {/* Title */}
        <motion.h1
          variants={TitleVariant}
          className={`tracking-[-4%] ${lang==='ar' ? 'font-font-6 text-[28px] md:text-[34px] lg:text-[43px]' : 'font-font-1 text-[18px] md:text-[24px] lg:text-[33px]'} text-center text-[#5E6282] font-semibold`}
        >
          {t("contact.title")}
        </motion.h1>

        {/* Input + Button */}
        <motion.div
          variants={parentVariants}
          className={`flex items-center justify-center gap-4 z-10`}
        >
          <div className="flex items-center gap-2 w-[55%] md:w-[421px] h-[45px] md:h-[65px] px-5 rounded-lg border border-[#b3b3b3] bg-white shadow-sm">
            <Mail className="w-5 h-5 text-gray-400" strokeWidth={1.5} />

            <input
              type="email"
              placeholder={t("contact.placeholder")}
              className={`flex-1 outline-none  w-full ${lang==='ar'? 'font-font-4  text-[14px] lg:text-[16px]':'font-font-1  text-[12px] lg:text-[16px]'} text-[#39425D] placeholder-gray-400`}
            />
          </div>

          <button className={`h-[45px] md:h-[65px] px-4 md:px-[3rem] rounded-lg bg-[#FF8A65] text-white ${lang==='ar'? 'font-font-4  text-[20px] lg:text-[26px]':'font-font-1  text-[14px] lg:text-[16px]'} hover:bg-[#ff7043] transition`}>
            {t("contact.button")}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
