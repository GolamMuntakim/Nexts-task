import Image from "next/image";


const Graph = () => {
    return (
        <div className="w-full lg:w-[1100px]  pt-[30px] flex flex-col lg:flex-row gap-[20px]">
           <div className="w-full lg:w-[540px] h-[327px] rounded-[8px] border-[1px] border-[#0000000D]">
           <div className="w-full lg:w-[498px]  border-b-[0.5px] 
           border-[#0000000D] pt-[18px] lg:pl-[20px] pb-[15px]">
            <div className="flex justify-between w-full lg:w-[476px] h-[19px] lg:gap-[10px]">
            <h1 className="font-[Urbanist] font-bold text-[16px] leading-[19.2px] text-[#000000]">Revenue 600 AED</h1>
            <Image src={'/menu.png'} width="22" height="22" alt="menu"></Image>
            </div>
           </div>
           <div className="flex ">
               <div className="lg:w-[46px] h-[186px]  lg:pl-[12px] space-y-[20px] lg:pt-[70px]">
                <h1 className="w-[46px] h-[14px] font-[Urbanist] font-normal text-[12px]
                 leading-[14.4px]">AED 500</h1>
                <h1 className="w-[46px] h-[14px] font-[Urbanist] font-normal text-[12px]
                 leading-[14.4px]">AED 400</h1>
                <h1 className="w-[46px] h-[14px] font-[Urbanist] font-normal text-[12px]
                 leading-[14.4px]">AED 400</h1>
                <h1 className="w-[46px] h-[14px] font-[Urbanist] font-normal text-[12px]
                 leading-[14.4px]">AED 200</h1>
                <h1 className="w-[46px] h-[14px] font-[Urbanist] font-normal text-[12px]
                 leading-[14.4px]">AED 100</h1>
                <h1 className="w-[46px] h-[14px] font-[Urbanist] font-normal text-[12px]
                 leading-[14.4px]">AED 0</h1>
               </div>
              <div>
              <div className="pt-[79px] lg:pl-[61px] lg:pr-[20px]">
                <Image src={'/graph.png'} width="459" height="190" className="w-[320px] lg:w-[459px]" alt="graph"></Image>
               </div>
               <div className="w-full lg:w-[453px] h-[14px] flex lg:pl-[58px] gap-[0.5px] lg:gap-3 font-[Urbanist] font-normal	text-[12px] leading-[14.8px] text-center">
                    <h1 className="w-[25px] h-[14px]">00hr</h1>
                    <h1 className="w-[25px] h-[14px]">02hr</h1>
                    <h1 className="w-[25px] h-[14px]">04hr</h1>
                    <h1 className="w-[25px] h-[14px]">06h4</h1>
                    <h1 className="w-[25px] h-[14px]">08hr</h1>
                    <h1 className="w-[25px] h-[14px]">10hr</h1>
                    <h1 className="w-[25px] h-[14px]">12hr</h1>
                    <h1 className="w-[25px] h-[14px]">14hr</h1>
                    <h1 className="w-[25px] h-[14px]">16hr</h1>
                    <h1 className="w-[25px] h-[14px]">20hr</h1>
                    <h1 className="w-[25px] h-[14px]">22hr</h1>
                    <h1 className="w-[25px] h-[14px]">24hr</h1>
                </div>
              </div>
           </div>
           </div>
           <div className="w-full lg:w-[540px] h-[327px] border-[1px] border-[#0000000D] rounded-[8px] space-y-[10px]">
           <div className="w-full lg:w-[498px]  border-b-[0.5px] 
           border-[#0000000D] pt-[18px] lg:pl-[20px] pb-[15px]">
            <div className="flex justify-between w-full lg:w-[476px] h-[19px] gap-[10px]">
            <h1 className="font-[Urbanist] font-bold text-[16px] leading-[19.2px] text-[#000000]">
                Pending Task
            </h1>
            <Image src={'/menu.png'} width="22" height="22" alt="menu"></Image>
            </div>
           </div>
           <div className="space-y-[10px]">
               <div className="w-full lg:w-[489px] h-[41px] rounded-[3px] border-[1px] py-[6px] border-[#F5F5F8]pt-[67px] flex justify-between px-3 mx-auto">
                <h1 className="font-medium	">Restaurant Account </h1>
                <h1 className="bg-[#A1045A1A] w-[37px] h-[29px] text-[#A1045A1A] rounded-[5px] 
                py-[6px] px-[12px] text-[#A1045A] font-medium	text-[14px] leading-[16.8px]">10</h1>
               </div>
               <div className="w-full lg:w-[489px] h-[41px] rounded-[3px] border-[1px] py-[6px] border-[#F5F5F8]pt-[67px] flex justify-between px-3 mx-auto">
                <h1 className="font-medium	">Restaurant Onboarding </h1>
                <h1 className="bg-[#A1045A1A] w-[37px] h-[29px] text-[#A1045A1A] rounded-[5px] 
                py-[6px] px-[12px] text-[#A1045A] font-medium	text-[14px] leading-[16.8px]">10</h1>
               </div>
               <div className="w-full lg:w-[489px] h-[41px] rounded-[3px] border-[1px] py-[6px] border-[#F5F5F8]pt-[67px] flex justify-between px-3 mx-auto">
                <h1 className="font-medium	">Rider Partners</h1>
                <h1 className="bg-[#A1045A1A] w-[37px] h-[29px] text-[#A1045A1A] rounded-[5px] 
                py-[6px] px-[12px] text-[#A1045A] font-medium	text-[14px] leading-[16.8px]">10</h1>
               </div>
               <div className="w-full lg:w-[489px] h-[41px] rounded-[3px] border-[1px] py-[6px] border-[#F5F5F8]pt-[67px] flex justify-between px-3 mx-auto">
                <h1 className="font-medium	">Rider Onboarding</h1>
                <h1 className="bg-[#A1045A1A] w-[37px] h-[29px] text-[#A1045A1A] rounded-[5px] 
                py-[6px] px-[12px] text-[#A1045A] font-medium	text-[14px] leading-[16.8px]">10</h1>
               </div>
               <div className="w-full lg:w-[489px] h-[41px] rounded-[3px] border-[1px] py-[6px] border-[#F5F5F8]pt-[67px] flex justify-between px-3 mx-auto">
                <h1 className="font-medium	">Support Tickets</h1>
                <h1 className="bg-[#A1045A1A] w-[37px] h-[29px] text-[#A1045A1A] rounded-[5px] 
                py-[6px] px-[12px] text-[#A1045A] font-medium	text-[14px] leading-[16.8px]">10</h1>
               </div>
           </div>
           </div>
        </div>
    );
};

export default Graph;