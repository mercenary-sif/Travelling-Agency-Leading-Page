import React from "react";
import { Brand1, Brand2, Brand3, Brand4, Brand5 } from "./import";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const logoVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 2.2, ease: "easeOut" },
  },
};

const Brands = () => {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row flex-wrap mt-[2rem] lg:flex-nowrap justify-center lg:justify-around items-center gap-[1rem] md:gap-[2rem] p-[1rem] md:p-[4rem]"
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
    >
      {[Brand1, Brand2, Brand3, Brand4, Brand5].map((brand, i) => (
        <motion.img
          key={i}
          src={brand}
          alt="the logo of our partnership"
          variants={logoVariant}
          className={`${
            i === 0 ? "w-[130px] h-[130px]" :
            i === 1 ? "w-[172.86px] h-[110px]" :
            i === 2 ? "w-[163px] h-[140px]" :
            i === 3 ? "w-[163px] h-[40px]" :
            "w-[160px] h-[40px] mt-[4rem] md:mt-0"
          }`}
        />
      ))}
    </motion.div>
  );
};

export default Brands;
