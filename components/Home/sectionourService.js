import Image from "next/image";
export default function Service(){
  return(
    <div className="text-center text-white max-w-screen-lg m-auto h-auto">
    <h2 className="section-title headtitle" >To Use Our Service</h2>
    <p className="text-gray-400">Over 30 million instances deployed by thousands of clients</p>
    <div className="h-auto flex flex-row flex-wrap lg:flex-nowrap justify-between py-8 ">
      <div className="bg-col w-full my-4 rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
    pt-11 pb-11 md:w-50/2 lg:w-25/4 ">
        <p className=" mb-8">
          <Image src="/img/productivity.svg" width="80" height="80" alt="productivity"/>

        </p>
        <h3 className="text-xl font-semibold">Productivity</h3>
      </div>
      <div className="bg-col w-full my-4 rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
    pt-11 pb-11 md:w-50/2  lg:w-25/4" >
        <p className="mb-8">
          <Image src="/img/optimization.svg" width="80" height="80"  alt="optimization"/>

        </p>
        <h3 className="text-xl font-semibold">Optimization</h3>
      </div>
      <div className="bg-col w-full my-4 rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
    pt-11 pb-11 md:w-50/2   lg:w-25/4" >
        <p className="mb-8">
          <Image src="/img/safety.svg" width="80" height="80" alt="safety" />

        </p>
        <h3 className="text-xl font-semibold">Safety</h3>
      </div>
      <div className="bg-col w-full my-4 rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
    pt-11 pb-11 md:w-50/2  lg:w-25/4" >
        <p className="mb-8">
          <Image src="/img/productivity.svg" width="80" height="80" alt="sustainability" />

        </p>
        <h3 className="text-xl font-semibold">Sustainability</h3>
      </div>
    </div>
    <p>
      <a href="#" className="h-14 border-white border border-solid p-4 rounded-full sm:px-20 hover:text-black">
        <span className="p-4">
          Explore Features
        </span>
      </a>
    </p>
  </div>
  )}