import Image from "next/image";


export default function Nav() {
  return (
    <div className='w-full lg:w-[1102px] h-[78px] rounded-[8px] border-[1px] border-solid border-[#0000000D] bg-[#FFFFFF] lg:px-[20px] lg:py-[10px]'>
    <div className="flex justify-between items-center">
        <div>
            <label className="input input-bordered flex items-center lg:gap-[24px] w-full lg:w-[116px] h-[24px]">
            <Image src={'/search.png'} width="24" height="24" alt="search"></Image>
            <input 
            type="text"
            className='grow  outline-none'
            placeholder='Search here'
            ></input>
            </label>
        </div>
        <div className="flex lg:gap-[30px] gap-2 w-full lg:w-[277px] h-[44px] ">
            <div>
                <Image src={'/Notification.png'} height="24" width="24" alt="notification"></Image>
            </div>
            <div>
                <Image src={'/Message.png'} height="24" width="24" alt="message"></Image>
            </div>
            <div className="bg-[#C2C2C2] w-[1px] h-[44px] rounded-[8px] opacity-50"></div>
            <div className="flex lg:gap-[12px]">
                <div className="flex flex-col items-end gap-[6px]">
                    <h1 className="font-[Urbanist] font-semibold text-[14px] leading-[16.8px] text-[#000000]">Nayamul Roni</h1>
                    <h1 className="font-[Urbanist] font-medium	text-[12px] leading-[14.4px] ">Super Admin</h1>
                </div>
                <div>
                    <Image src={'/profile.png'} height="36" width="36" alt="profile"></Image>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
