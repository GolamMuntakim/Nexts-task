import Image from 'next/image'
import React from 'react'

export default function Chart() {
  return (
    <div className='w-full lg:w-[1102px]  gap-[26px] pt-[26px] flex flex-col lg:flex-row'>
     <div className='w-full lg:w-[538px]  rounded-[8px] border-[1px] lg:p-[20px] border-[#0000000D]'>
     <div className="w-full lg:w-[498px]  border-b-[0.5px] 
           border-[#0000000D] pt-[18px] lg:pl-[20px] pb-[15px]">
            <div className="flex justify-between w-full lg:w-[476px] h-[19px] lg:gap-[10px]">
            <h1 className="font-[Urbanist] font-bold text-[16px] leading-[19.2px] text-[#000000]">
            Current Order Summary
            </h1>
            <Image src={'/menu.png'} width="22" height="22" alt="menu"></Image>
            </div>
     </div>
     <div className='e-full lg:w-[497px] h-[48px] rounded-[8px] flex justify-between py-[10px] lg:px-[20px] bg-[#A1045A14] mt-[15px]'>
        <div className='flex lg:gap-[10px] items-center'>
            <Image src={'/Basket.png'} width="22" height="22" alt='basket'></Image>
            <h1 className='w-[295px] h-[17px] font-[Urbanist] font-semibold	text-[14px] leading-[16.8px] text-[#A1045A]'>125 new orders!</h1>
        </div>
        <div>
            <button className='lg:bg-[#FFFFFF] w-full lg:w-[107px] 
            h-[28px] rounded-[4px] py-[7px] px-[14px] text-[#A1045A] font-normal	text-[12px] 
            leading-[14.4px]'>Manage Order</button>
        </div>
     </div>
     <div className='mt-[15px] w-[497px] lg:h-[85px] gap-[20px] grid grid-cols-2 lg:grid-cols-4'>
        <div className='w-[109px] h-[85px] rounded-[8px] border-[1px] p-[15px] border-[#0000000D]'>
            <h1 className='w-[49px] h-[38px] font-semibold	text-[#000000]
             text-[32px] leading-[38.4px] font-[Urbanist]'>389</h1>
            <p className='w-[38px] h-[17px] font-[Urbanist] font-normal	text-[14px] leading-[16.8px]'>Active</p>
        </div>
        <div className='w-[109px] h-[85px] rounded-[8px] border-[1px] p-[15px] border-[#0000000D]'>
            <h1 className='w-[49px] h-[38px] font-semibold	text-[#000000]
             text-[32px] leading-[38.4px] font-[Urbanist]'>125</h1>
            <p className='w-[38px] h-[17px] font-[Urbanist] font-normal	text-[14px] leading-[16.8px]'>Pending</p>
        </div>
        <div className='w-[109px] h-[85px] rounded-[8px] border-[1px] p-[15px] border-[#0000000D]'>
            <h1 className='w-[49px] h-[38px] font-semibold	text-[#000000]
             text-[32px] leading-[38.4px] font-[Urbanist]'>234</h1>
            <p className='w-[38px] h-[17px] font-[Urbanist] font-normal	text-[14px] leading-[16.8px]'>Refund</p>
        </div>
        <div className='w-[109px] h-[85px] rounded-[8px] border-[1px] p-[15px] border-[#0000000D]'>
            <h1 className='w-[49px] h-[38px] font-semibold	text-[#000000]
             text-[32px] leading-[38.4px] font-[Urbanist]'>234</h1>
            <p className='w-[38px] h-[17px] font-[Urbanist] font-normal	text-[14px] leading-[16.8px]'>Cancelled</p>
        </div>
     </div>
     <div className='lg:mt-[15px] w-full lg:w-[497px]  flex-col lg:flex-row flex lg:gap-[20px]'>
        <div>
            <Image src={'/chart.png'} width="133" height="133" alt='chart'></Image>
        </div>
        <div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='w-full lg:w-[322px] h-[17px] font-normal font-urbanist text-[14px] leading-[16.8px] text-[#000000] ml-2'>Active(43%)</h1>
                    <h1 className='w-[22px] h-[17px] font-normal font-urbanist text-[14px] leading-[16.8px] text-[#757D85]'>384</h1>
                </div>
                <Image src={'/active.png'} width="344" height="8" alt="active"></Image>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='w-[322px] h-[17px] font-normal font-urbanist text-[14px] leading-[16.8px] text-[#000000] ml-2'>Pending(20%)</h1>
                    <h1 className='w-[22px] h-[17px] font-normal font-urbanist text-[14px] leading-[16.8px] text-[#757D85]'>125</h1>
                </div>
                <Image src={'/pending.png'} width="344" height="8" alt="active"></Image>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='w-[322px] h-[17px] font-normal font-urbanist text-[14px] leading-[16.8px] text-[#000000] ml-2'>Refund(37%)</h1>
                    <h1 className='w-[22px] h-[17px] font-normal font-urbanist text-[14px] leading-[16.8px] text-[#757D85]'>234</h1>
                </div>
                <Image src={'/refund.png'} width="344" height="8" alt="active"></Image>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h1 className='w-[322px] h-[17px] font-normal font-urbanist text-[14px] leading-[16.8px] text-[#000000] ml-2'>Cancelled(37%)</h1>
                    <h1 className='w-[22px] h-[17px] font-normal font-urbanist text-[14px] leading-[16.8px] text-[#757D85]'>234</h1>
                </div>
                <Image src={'/cancel.png'} width="344" height="8" alt="active"></Image>
            </div>
        </div>
     </div>
     </div>
     <div className='w-full lg:w-[538px]  rounded-[8px] border-[1px] p-[20px] border-[#0000000D]'>
     <div className="w-full lg:w-[498px]  border-b-[0.5px] 
           border-[#0000000D] pt-[18px] lg:pl-[20px] pb-[15px]">
            <div className="flex justify-between w-full lg:w-[476px] h-[19px] gap-[10px]">
            <h1 className="font-[Urbanist] font-bold text-[16px] leading-[19.2px] text-[#000000]">
           Activity Log
            </h1>
            <Image src={'/menu.png'} width="22" height="22" alt="menu"></Image>
            </div>

            
     </div>
     <div>
     <div className="w-full lg:w-[498px] h-[51px] rounded-[3px] border-[1px] py-[8px] border-[#F5F5F8]pt-[67px] flex justify-between px-[12px] mx-auto mt-[12px]">
                <div>
                    <h1 className='text-[#757D85] font-normal text-[12px] leading-[14px]'>12-04-2024 10:14 PM</h1>
                <h1 className="font-medium	">Modified new item</h1>
                </div>
                <h1 className="font-medium text-[#757D85]	text-[14px] leading-[16.8px]">Jakit Sarker</h1>
               </div>
     <div className="w-full lg:w-[498px] h-[51px] rounded-[3px] border-[1px] py-[8px] border-[#F5F5F8]pt-[67px] flex justify-between px-[12px] mx-auto mt-[12px]">
                <div>
                    <h1 className='text-[#757D85] font-normal text-[12px] leading-[14px]'>12-04-2024 10:14 PM</h1>
                <h1 className="font-medium	">Modified new item</h1>
                </div>
                <h1 className="font-medium text-[#757D85]	text-[14px] leading-[16.8px]">Jakit Sarker</h1>
               </div>
     <div className="w-full lg:w-[498px] h-[51px] rounded-[3px] border-[1px] py-[8px] border-[#F5F5F8]pt-[67px] flex justify-between px-[12px] mx-auto mt-[12px]">
                <div>
                    <h1 className='text-[#757D85] font-normal text-[12px] leading-[14px]'>12-04-2024 10:14 PM</h1>
                <h1 className="font-medium	">Modified new item</h1>
                </div>
                <h1 className="font-medium text-[#757D85]	text-[14px] leading-[16.8px]">Jakit Sarker</h1>
               </div>
     <div className="w-full lg:w-[498px] h-[51px] rounded-[3px] border-[1px] py-[8px] border-[#F5F5F8]pt-[67px] flex justify-between px-[12px] mx-auto mt-[12px]">
                <div>
                    <h1 className='text-[#757D85] font-normal text-[12px] leading-[14px]'>12-04-2024 10:14 PM</h1>
                <h1 className="font-medium	">Modified new item</h1>
                </div>
                <h1 className="font-medium text-[#757D85]	text-[14px] leading-[16.8px]">Jakit Sarker</h1>
               </div>
     <div className="w-full lg:w-[498px] h-[51px] rounded-[3px] border-[1px] py-[8px] border-[#F5F5F8]pt-[67px] flex justify-between px-[12px] mx-auto mt-[12px]">
                <div>
                    <h1 className='text-[#757D85] font-normal text-[12px] leading-[14px]'>12-04-2024 10:14 PM</h1>
                <h1 className="font-medium	">Modified new item</h1>
                </div>
                <h1 className="font-medium text-[#757D85]	text-[14px] leading-[16.8px]">Jakit Sarker</h1>
               </div>
     </div>
     </div>
    </div>
  )
}
