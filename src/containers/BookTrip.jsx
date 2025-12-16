import React from 'react'
import { Book_A_Trip, Step_1, Step_2, Step_3 } from './import'
import { SectionHeader } from '../components/export'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'


const parentVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      staggerChildren: 0.3, 
      duration: 1.5, 
      ease: 'easeOut' 
    },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}

const TitleVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeIn' } },
}

const swingVariant = {
  show: {
    opacity: 1,
    x: [0, -20, 0, 20, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
}
const imageVariant = {
  hidden: (lang) => ({
    opacity: 0,
    x: lang === "ar" ? -60 : 80, 
    scale: 0.95,
  }),
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 2.5,
      ease: "easeOut",
    },
  },
};


const BookTrip = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'ar' ? 'ar' : 'en'

  // Map steps from i18n
  const stepsData = t('bookTrip.steps', { returnObjects: true })

  return (
    <motion.div
      className='flex flex-col lg:flex-row justify-center items-center gap-[1rem] p-2 lg:gap-[2rem] py-[2rem] md:p-[2rem] lg:px-[5rem]'
      initial="hidden"
      whileInView="show"
      variants={parentVariants}
      viewport={{ amount: 0.3 }}
    >
      <div className={`flex flex-col justify-center items-center gap-2 p-[1rem] lg:p-[2rem] w-full md:flex-[0.9]`}>
        <SectionHeader
          lang={lang}
          TxtCenter={false}
          Title={
            <motion.div variants={TitleVariant}>
              {t('bookTrip.title')}
            </motion.div>
          }
          subTitle={
            <motion.div variants={swingVariant}>
              {t('bookTrip.subTitle')}
            </motion.div>
          }
        />

        <img
          src={Book_A_Trip}
          alt="Book a trip with us"
          className='object-fill w-full h-full block md:hidden'
        />

        <div className='flex flex-col justify-center items-center gap-2 p-[1rem] w-full'>
          {stepsData.map((item, i) => (
            <motion.div key={i} variants={cardVariant}>
              <StepCard
                lang={lang}
                Icon={[Step_1, Step_2, Step_3][i]}
                Title={item.title}
                descriptive={item.descriptive}
              />
            </motion.div>
          ))}
        </div>
      </div>
        <div className='hidden md:flex md:flex-1 justify-center items-center'>
  <motion.div
    variants={imageVariant}
    custom={lang}       
    initial="hidden"
    whileInView="show"         
    viewport={{ amount: 0.6 }}
  >
    <img
      src={Book_A_Trip}
      alt="Book a trip with us"
      className='object-fill w-full md:w-[685px] h-full lg:h-[759px]'
    />
  </motion.div>
</div>

      
    </motion.div>
  )
}

export default BookTrip

const StepCard = ({ Icon, Title, descriptive , lang}) => {
  return (
    <div className="flex justify-center items-center gap-2 p-2 rounded-lg hover:bg-gray-50 hover:shadow-dual-cyan">
      <div className="flex justify-center items-center w-[65px] h-full">
        <img src={Icon} alt="steps icons" className='object-fill w-[48px] h-[48px]' />
      </div>
      <div className="flex flex-col justify-center items-start gap-2 p-[1rem] w-full">
        <h3 className={`${lang=== "ar" ? 'font-font-5 text-[20px] lg:text-[22px]' : 'font-font-1 text-[16px] lg:text-[18px]'}  text-[#5E6282] font-bold`}>
          {Title}
        </h3>
        <h4 className={`${lang=== "ar" ? 'font-font-4 text-[26px] lg:text-[32px]' : 'font-font-1 text-[16px] lg:text-[18px]'} text-[#84829A]`}>
          {descriptive}
        </h4>
      </div>
    </div>
  )
}
