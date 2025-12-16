import { useTranslation } from "react-i18next";
import { Navbar } from "../components/export";
import { Cover, coverBg, eclipse } from "./import";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


const parentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};
const lettersTitles = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // stagger letters
      duration: 0.3, ease: "easeOut"
    },
  },
};
const lettersContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // stagger letters
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const imageVariant = {
  hidden: (lang) => ({
    opacity: 0,
    x: lang === "ar" ? -80 : 80, 
    scale: 0.95,
  }),
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.9,
      ease: "easeOut",
    },
  },
};
const buttonVariant = {
  hidden: { opacity: 0, y: 20 ,scale: 0.85, },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 5.2, ease: "easeOut" },
  },
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";
  const controls = useAnimation();

  const titleText = t("header.title") || "";
  const subtitleText = t("header.subtitle") || "";

  // Replay animation on language change
  useEffect(() => {
    (async () => {
      await controls.set("hidden");
      await controls.start("show");
    })();
  }, [controls, i18n.language]);

  return (
    <div className="relative flex flex-col justify-center items-center p-2 py-[2rem] md:p-[2rem] overflow-hidden">

    
      <div
        className={`absolute flex justify-center items-center ${
          lang === "ar" ? "left-0" : "right-0"
        } top-0 w-full md:w-[766.31px] h-[762.58px] z-0`}
      >
        <img
          src={coverBg}
          alt="shape for styling"
          className={`w-full h-full object-cover ${
            lang === "ar" ? "-scale-x-100" : "scale-x-100"
          }`}
        />
      </div>

     
      <div
        className={`absolute hidden md:flex justify-center items-center ${
          lang === "ar" ? "right-0 -scale-x-100" : "left-0"
        } top-0 md:w-[478.94px] h-[478.94px] z-0`}
      >
        <img
          src={eclipse}
          alt="eclipse for styling"
          className="w-full h-full object-cover"
        />
      </div>


      <motion.div
        className="w-full z-10"
        variants={parentVariants}
        initial="hidden"
        animate={controls}
      >
       
        <motion.div variants={childVariant}>
          <Navbar />
        </motion.div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-4 md:gap-[2rem] p-2 md:p-[2rem]">

          
          <motion.div
            className="flex flex-col justify-center items-center md:items-start text-center md:text-start gap-[1rem] p-2 flex-1"
            variants={childVariant}
          >

         
            <motion.h3
              variants={lettersTitles}
              initial="hidden"
              animate={controls}
              dir={lang === "ar" ? "rtl" : "ltr"}
              className={`${
                lang === "ar"
                  ? "font-font-5 text-[24px] lg:text-[28px]"
                  : "font-font-1 text-[18px] lg:text-[20px]"
              } font-bold text-[#DF6951]`}
              aria-label={subtitleText}
            >
              {(lang === "ar"
                ? subtitleText.split(" ")
                : Array.from(subtitleText)
              ).map((item, i) => (
                <motion.span
                  key={`${lang}-subtitle-${i}`}
                  variants={lang === "ar" ? wordVariant : letterVariant}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {item}
                  {lang === "ar" ? " " : ""}
                </motion.span>
              ))}
            </motion.h3>

           
              <motion.h1
                variants={lang === "ar" ? wordVariant : lettersTitles}
                initial="hidden"
                animate={controls}
                dir={lang === "ar" ? "rtl" : "ltr"}
                className={`${
                  lang === "ar" ? "font-font-4" : "font-font-2"
                } text-[#181E4B] font-bold text-[34px] lg:text-[54px] xl:text-[74px] leading-tight`}
                aria-label={titleText}
              >
                {(lang === "ar" ? titleText.split(" ") : Array.from(titleText)).map(
                  (item, i) => (
                    <motion.span
                      key={`${lang}-title-${i}`}
                      variants={lang === "ar" ? wordVariant : letterVariant}
                      style={{ display: "inline-block", whiteSpace: "pre" }}
                    >
                      {item}
                      {lang === "ar" ? " " : ""}
                    </motion.span>
                  )
                )}
              </motion.h1>
          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05, delayChildren: 0 } },
            }}
            initial="hidden"
            animate={controls}
          > 
          <motion.p
                variants={lang === "ar" ? wordVariant : lettersContainer}
                initial="hidden"
                animate={controls}
                dir={lang === "ar" ? "rtl" : "ltr"}
                className={`${
                  lang === "ar"
                    ? "font-font-4 text-[26px] lg:text-[32px]"
                    : "font-font-1 text-[16px] lg:text-[18px]"
                } text-[#5E6282] font-medium`}
                aria-label={t("header.description")}
              >
                {(lang === "ar"
                  ? t("header.description").split(" ")
                  : Array.from(t("header.description"))
                ).map((item, i) => (
                  <motion.span
                    key={`desc-${lang}-${i}`}
                    variants={lang === "ar" ? wordVariant : letterVariant}
                    className="inline-block"
                    style={{ whiteSpace: "pre" }}
                  >
                    {item}
                    {lang === "ar" ? " " : ""}
                  </motion.span>
                ))}
              </motion.p>
          
            <motion.button
              variants={buttonVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={`inline-flex ${
                lang === "ar"
                  ? "font-font-4 text-[26px] lg:text-[32px]"
                  : "font-font-1 text-[16px] lg:text-[18px]"
              } w-[170px] h-[60px] mt-[2rem] outline-none font-medium text-[#FFFFFF]
              border-none bg-[#F1A501] rounded-lg justify-center items-center
              hover:text-[#4d5594] hover:shadow-dual-cyan transition-all duration-300 hover:cursor-pointer`}
            >
              {t("header.cta")}
            </motion.button>

          </motion.div>
           
          </motion.div>

          
          <motion.div
              className="flex items-center justify-center flex-1"
              variants={imageVariant}
              custom={lang}        
              initial="hidden"
              animate={controls}
            >
              <img
                src={Cover}
                alt="hero section cover"
                className={`object-cover w-full h-full ${
                  lang === "ar" ? "-scale-x-100" : "scale-x-100"
                }`}
              />
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
