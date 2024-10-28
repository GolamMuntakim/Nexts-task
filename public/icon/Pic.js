import Image from "next/image";


export default function Pic() {
  return (
    <div>
      <Image src={'/pic.png'} height="58" width="58" alt="pic" className="rounded-8px"></Image>
    </div>
  )
}
