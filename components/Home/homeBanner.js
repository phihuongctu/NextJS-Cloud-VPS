import Image from "next/image";
export default function homeBanner(){
  return(
    <div id="banner" className="banner relative">
    <Image
      src="/img/bg_home_2.svg"
      layout="fill"
      objectFit="cover"
      quality={100}
      alt="banner"
    />
    <div className="absolute w-full">
      <div className="deal_title text-4xl font-bold m-8">BLACK FRIDAY</div>
      <div className="deal-ct text-2xl m-8">Web Hosting + Free Domain</div>
      <div className="deal-mall m-8">Up to</div>
      <div className="deal-num text-5xl font-bold m-8">90% OFF</div>
      <div className="deal-mall m-8">Deal ends in:</div>
      <div className="countdowntimer"></div>
      <div className="gotit h-14 w-60 bg-pink-500 m-auto rounded-full">
        <a className="p-4 block text-base " href="#"><span>Got For It</span></a>
      </div>
    </div>
  </div>
  )  
 }