import Image from "next/image";


export default function Pic2() {
  return (
    <div>
       <Image src={'/pic2.png'} height="58" width="58" alt="pic" className="rounded-8px"></Image>

    </div>
  )
}
