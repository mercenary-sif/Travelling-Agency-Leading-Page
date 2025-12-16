import navigator from '../assets/navigation .png'
import { Decoying2 } from './import'
const Destination = ({cover , isLastItem , name , price , days ,  lang}) => {
  return (
   <div  className='relative w-[90%] md:w-[360px] h-[500px]  hover:border-[4px] border-[#1E1D4C]  shadow-[#5E6282] shadow-2xl flex flex-col justify-end items-center  rounded-3xl transition-all duration-300 group '>
      {isLastItem && <div className="absolute flex justify-end items-center right-06  md:right-[-5rem] bottom-0   w-full z-[-1] ">
        <img
          src={Decoying2}
          alt="Decoying for styling"
          className="w-[96px] h-[252px] mr-[2rem] object-cover"
        />
      </div>}
      <div className="flex absolute w-full z-[-1] h-full items-center">
         <img src={cover} alt="destination cover" className='object-fill h-full  w-full'/>
      </div>
      <div className={`flex rounded-b-xl  z-1 bg-gray-100 flex-col w-full justify-start items-start gap-[2rem] p-[1rem] ${lang=== "ar" ? 'font-font-5 text-[20px] lg:text-[22px]' : 'font-font-1 text-[16px] lg:text-[18px]'}  text-[#5E6282]  font-medium `}>
        <div className="flex justify-between w-full items-center p-2 ">
            <h3 className='hover:cursor-pointer hover:text-[#1E1D4C]' >
                 {name}
            </h3>
            <p>
            {price}
            </p>
        </div>
        <div className="flex justify-start items-center p-2 gap-2 ">
              <img src={navigator} alt="navigator" className='w-[20px] h-[20px] cursor-pointer ' />
              <p className={`${lang=== "ar" ? 'text-[19px]' : 'text-[16px]'}`}> {days} </p>
        </div>
      </div>
    </div>
  )
}

export default Destination
