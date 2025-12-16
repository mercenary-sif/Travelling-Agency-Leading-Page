import { shape } from "./import"

const Card = ({Icon , W_Icon , H_Icon , service , descriptive , lang}) => {
  return (
    <div  className='z-999 relative w-[260px] h-[380px]  hover:border-[4px] border-[#1E1D4C] shadow-dual-cyan  flex flex-col justify-center items-center g-[1rem] md:gap-[2rem] p-[2rem] rounded-2xl bg-white transition-all duration-300 hover:shadow-xl group '>
        <div className="absolute bottom-[-2rem] left-[-2rem]  w-20 h-20 rounded-xl opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300 z-[-1]" >
            <img src={shape} alt="hover effect" className="w-[] h-[] object-cover "/>
        </div>
        <div className={`flex items-center justify-center  max-h-[95px]`} 
        >
            <img src={Icon} alt="service logo"  className="object-cover" style={{ width:W_Icon , height:H_Icon}} />
        </div>
        <div className="flex  flex-1 flex-col gap-[1rem] p-2 items-center justify-center text-center " >
               <h3 className={`${lang=== "ar" ? 'font-font-6  text-[18px] lg:text-[22px]' : 'font-font-3  text-[16px] lg:text-[18px]'}  text-[#1E1D4C] font-semibold`} >{service}</h3>
               <p className={` ${lang=== "ar" ? 'font-font-4  text-[20px] lg:text-[22px]' : 'font-font-1  text-[14px] lg:text-[16px]'}  text-[#5E6282] font-semibold `}> {descriptive} </p>
        </div>
    </div>
  )
}
// ${lang=== "ar" ? '' : ''}
export default Card
