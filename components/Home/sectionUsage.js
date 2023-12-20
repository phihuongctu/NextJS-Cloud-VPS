import Image from "next/image";
export default function Usage(){
  return(
    <div className="text-center text-white max-w-screen-lg m-auto h-auto">
    <h2 className="section-title headtitle" >Lorem ipsum dolor sit amet,</h2>
    <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat odio non a nibh nunc</p>
    <div className="h-auto flex flex-row flex-wrap md:flex-nowrap m-auto justify-between">
      <div className="w-full md:w-100/3-2rem my-4 bg-col rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
   p-8 h-56 grid content-center">
        <p className="pb-4">
          <Image src="/img/user.svg" width="80" height="80" alt="usage" />

        </p>
        <h3 className="text-4xl text-blue-400">
          15827
        </h3>
        <p>Premium User</p>
      </div>
      <div className="w-full md:w-100/3-2rem my-4 bg-col rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
   p-8 h-56 grid content-center">
        <p className="pb-4">
          <Image src="/img/like.svg" width="80" height="80" alt="usage"/>
        </p>
        <h3 className=" text-4xl text-blue-400" >
          1767
        </h3>
        <p>Daily Visitor</p>
      </div>
      <div className="w-full md:w-100/3-2rem my-4 bg-col rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
   p-8 h-56 grid content-center">
        <p className="pb-4">
          <Image src="/img/like.svg" width="80" height="80" alt="usage"/>
        </p>
        <h3 className=" text-4xl text-blue-400">
          76%
        </h3>
        <p>Satisfaction</p>
      </div>
    </div>
  </div>

  )}