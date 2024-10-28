"use client"
import Image from "next/image";



export default function Date() {
   
  return (
    <div className="w-full lg:w-[1102px] h-[40px] flex justify-between pt-[30px] my-auto mx-auto">
        <div className="w-[332px] h-[40px] rounded-[8px] border-[#0000000D] border-[1px] shadow-[#1018280D] flex">
            <div className="h-[40px] w-[94px] bg-[#FAFAFA] border-r-[1px] border-[#0000000D]  lg:py-[8px] lg:px-[16px] text-[#000000] font-[Urbanist] font-semibold text-[14px] leading-[16.8px]">
                <h1 className="w-[62px] h-[17px]">12 months</h1>
            </div>
            <div className="h-[40px] w-[81px] bg-[#FAFAFA] border-r-[1px] border-[#0000000D]  lg:py-[8px] lg:px-[16px] text-[#000000] font-[Urbanist] font-semibold text-[14px] leading-[16.8px]">
             <h1 className="w-[49px] h-[17px]">30 days</h1>
                </div>
            <div className="h-[40px] w-[73px] bg-[#FAFAFA] border-r-[1px] border-[#0000000D]  lg:py-[8px] lg:px-[16px] text-[#000000] font-[Urbanist] font-semibold text-[14px] leading-[16.8px]">
                <h1 className="w-[41px] h-[17px]">7 days</h1>
            </div>
            <div className="h-[40px] w-[84px] bg-[#FAFAFA] border-r-[1px] border-[#0000000D]  lg:py-[8px] lg:px-[16px] text-[#000000] font-[Urbanist] font-semibold text-[14px] leading-[16.8px]">
                <h1 className="w-[52px] h-[17px]">24 hours</h1>
            </div>
        </div>
        <div className="w-full lg:w-[138px] h-[40px] flex flex-col lg:flex-row lg:gap-[12px] border-[1px] border-[#0000000D] rounded-[8px] lg:py-[10px] lg:px-[14px]">
            <Image src={'/calendar.png'} height='20' width='20' alt="calender"></Image>
            <h1 className="w-full lg:w-[82px] h-[17px] text-[#000000] leading-[16.8px] font-[Urbanist] text-[14px] font-medium">Custom Date</h1>
        </div>
    </div>
  )
}
