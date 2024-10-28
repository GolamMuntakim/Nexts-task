import Image from "next/image";


export default function Pic4() {
  return (
    <div>
     <Image src={'/pic4.png'} height="58" width="58" alt="pic" className="rounded-8px"></Image>
    </div>
  )
}
