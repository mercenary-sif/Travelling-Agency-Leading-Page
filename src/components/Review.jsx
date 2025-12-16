

const Review = ({profile , content , username , location , lang}) => {
  return (
    <div  className='relative w-[80%] md:w-[541px] h-[245px]  shadow-dual-cyan  flex flex-col justify-start items-start gap-[1rem]  p-[1rem]  rounded-2xl bg-white transition-all duration-300 hover:shadow-xl hover:shadow-black group '>
      <div className={`absolute shadow-dual-cyan  ${lang==='ar'?'right-[-2rem]':'left-[-2rem]'} top-[-2rem] flex justify-center items-center  w-[68px] h-[68px] overflow-hidden rounded-full`}>
        <img src={profile} alt="profile pic" className={`object-fill  ${lang==='ar'? "-scale-x-100" : "scale-x-100"} `}/>
      </div>
      <div className=" flex flex-col justify-start items-start gap-[1rem] md:gap-[2rem] p-[2rem] ">
          <p className={`${lang=== "ar" ? 'font-font-4  text-[22px] md:text-[24px] lg:text-[26px]' : 'font-font-1  text-[12px] md:text-[14px] lg:text-[16px]'}  text-[#5E6282] font-medium`}>"{content}" </p>
          <div className="flex flex-col justify-start items-start gap-1 p-2">
            <h4 className='cursor-not-allowed  font-font-1  md:text-[16px] lg:text-[18px] text-[#5E6282] font-semibold '> 
                {username}
            </h4>
            <p className={`${lang==='ar'? 'font-font-5  text-[18px] lg:text-[22px]':'font-font-1  text-[14px] lg:text-[16px]'} text-[#5E6282] font-medium `}>
                {location}
            </p>
          </div>
      </div>
    </div>
  )
}

export default Review
