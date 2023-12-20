import Image from "next/image";
export default function newLetter(){
  return(
    <div className="text-center text-white max-w-screen-lg m-auto h-auto pt-4">
    <p>
      <Image src="/img/getoff.svg" width="170" height="160" alt="get off"/>
    </p>
    <h2 className="section-title headtitle" >GET 15% OFF</h2>
    <p className="text-gray-400 mb-4">Subscribe now to get free discount coupon code for your order</p>
  </div>
  
  )}