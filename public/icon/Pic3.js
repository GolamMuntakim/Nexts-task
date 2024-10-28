import Image from "next/image";

export default function Pic3() {
  return (
    <div>
      <Image src={'/pic3.png'} height="58" width="58" alt="pic" className="rounded-8px"></Image>
    </div>
  )
}
