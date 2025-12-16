import React from "react";
import {
  GooglePlay,
  logo_footer,
  PlayStore,
  Social1,
  Social2,
  Social3,
} from "./import";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const footerParent = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.2,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 3.2, ease: "easeOut" },
  },
};


const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "ar" ? "ar" : "en";

  return (
    <motion.div
      variants={footerParent}
      initial="hidden"
      whileInView="show"
      viewport={{once: true , amount: 0.4 }}
      className="relative shadow-dual-cyan flex flex-col justify-center items-center gap-[1rem] p-[1rem] rounded-t-[2rem] bg-gray-300 transition-all duration-300 hover:shadow-xl hover:shadow-black group"
    >
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-around items-center lg:items-start gap-[4rem] p-2 md:p-[2rem] w-full">

        <motion.div
          variants={footerItem}
          className="flex w-full mt-[2rem] md:mt-0 md:w-[25%] flex-col justify-start items-center md:items-start gap-[2rem] p-2"
        >
          <img
            src={logo_footer}
            alt="logo of brand Jadoo"
            className="w-[122px] cursor-pointer h-[46px] object-fill"
          />
          <p className={` ${lang==='ar' ? ' font-font-4 text-[22px] md:text-[26px]':'text-[14px] md:text-[16px] font-font-1'} cursor-pointer hover:text-[#DF6951] text-[#5E6282]  font-medium text-center md:text-start`}>
            {t("footer.description")}
          </p>
        </motion.div>

        {/* Company */}
        <motion.div
          variants={footerItem}
          className="flex flex-col justify-center items-center md:items-start p-2 gap-[2rem]"
        >
          <h3 className={` ${lang==='ar' ? 'text-[19px] font-font-6':'text-[16px] font-font-1' }   cursor-pointer hover:text-[#DF6951] text-black font-bold text-center md:text-start`}>
            {t("footer.company")}
          </h3>
          <div className="flex flex-col justify-center items-center md:items-start p-2 gap-[1rem]">
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.companyLinks.about")}
            </p>
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.companyLinks.careers")}
            </p>
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.companyLinks.mobile")}
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={footerItem}
          className="flex flex-col justify-center items-center md:items-start p-2 gap-[2rem]"
        >
          <h3 className={` ${lang==='ar' ? 'text-[19px] font-font-6':'text-[16px] font-font-1' }   cursor-pointer hover:text-[#DF6951] text-black font-bold text-center md:text-start`}>
            {t("footer.contact")}
          </h3>
          <div className="flex flex-col justify-center items-center md:items-start p-2 gap-[1rem]">
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.contactLinks.help")}
            </p>
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.contactLinks.press")}
            </p>
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.contactLinks.affiliates")}
            </p>
          </div>
        </motion.div>

        {/* More */}
        <motion.div
          variants={footerItem}
          className="flex flex-col justify-center items-center md:items-start p-2 gap-[2rem]"
        >
          <h3 className={` ${lang==='ar' ? 'text-[19px] font-font-6':'text-[16px] font-font-1' }   cursor-pointer hover:text-[#DF6951] text-black font-bold text-center md:text-start`}>
            {t("footer.more")}
          </h3>
          <div className="flex flex-col justify-center items-center md:items-start p-2 gap-[1rem]">
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.moreLinks.airlineFees")}
            </p>
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.moreLinks.airline")}
            </p>
            <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } cursor-pointer hover:text-[#DF6951] text-[#5E6282] font-medium text-center md:text-start`}>
              {t("footer.moreLinks.lowFare")}
            </p>
          </div>
        </motion.div>

        {/* Social */}
        <motion.div
          variants={footerItem}
          className="flex flex-col justify-center items-center gap-2"
        >
          <div className="flex justify-center items-center gap-[1rem]">
            <img src={Social3} alt="facebook" className="w-[50px] h-[50px] rounded-full cursor-pointer" />
            <img src={Social1} alt="instagram" className="w-[50px] h-[50px] rounded-full cursor-pointer" />
            <img src={Social2} alt="x" className="w-[50px] h-[50px] rounded-full cursor-pointer" />
          </div>
          <p className={`${lang==='ar' ? 'text-[24px] font-font-4':'text-[15px] font-font-1' } text-[#5E6282] font-medium text-center`}>
            {t("footer.discover")}
          </p>
          <div className="flex justify-center items-center gap-2">
            <img src={GooglePlay} alt="Google Play" className="w-[107px] h-[40px]" />
            <img src={PlayStore} alt="Play Store" className="w-[107px] h-[40px]" />
          </div>
        </motion.div>
      </div>

      <motion.p
        variants={footerItem}
        className={`${lang==='ar'? 'text-[26px] font-font-4':'text-[16px] font-font-1'} text-[#5E6282] font-semibold text-center mt-[2rem]`}
      >
        {t("footer.developedBy")}
        <a
          className="hover:text-[#120514] cursor-pointer"
          href="https://www.facebook.com/the.mercenary.sif"
        >
          {" "}The Mercenary AGUAGUENA Sif Eddine
        </a>
      </motion.p>

      <motion.p
        variants={footerItem}
        className={`${lang==='ar'? 'text-[26px] font-font-4':'text-[16px] font-font-1'} text-[#5E6282] font-semibold text-center mt-[2rem]`}
      >
        {t("footer.rights")}
      </motion.p>
    </motion.div>
  );
};

export default Footer;
