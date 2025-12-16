
const SectionHead = ({TxtCenter , Title , subTitle , lang}) => {
  return (
    <div className={`flex relative z-999 flex-col justify-center ${ TxtCenter ? 'text-center items-center' : 'text-start items-start'}  g-4 p-2 md:p-[2rem]`}>
           <h3 className={`${lang ==='ar'?'font-font-4  text-[26px] lg:text-[34px]':'font-font-1  text-[16px] lg:text-[18px]'} text-[#6246E5] font-semibold `}> {subTitle} </h3>
           <h1 className={`${lang ==='ar'?' font-font-5  text-[30px] md:text-[50px]':' font-font-2  text-[30px] md:text-[50px]'} text-[#14183E] font-semibold `}> {Title} </h1>
    </div>
  )
}

export default SectionHead
