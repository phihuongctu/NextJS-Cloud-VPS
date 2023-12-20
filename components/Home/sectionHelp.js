import Image from "next/image";
export default function Help(){
  return(
    <div className="text-center text-white max-w-screen-lg m-auto h-auto">
    <h2 className="section-title headtitle" >Insights & resources</h2>
    <p className="text-gray-400 mb-4">Insights and resources to help drive your business forward faster.</p>
    <div className="h-auto flex flex-row flex-wrap md:flex-nowrap justify-between">
      <div className="w-50/2 md:w-25/4  mb-4 p-5 h-28 bg-col rounded-2xl">
        <div className=" w-10 h-10 m-auto rounded-lg bg-white"></div>
        <h3 className="font-semibold text-base mt-3 overflow-hidden overflow-ellipsis whitespace-nowrap">FAQ</h3>
      </div>
      <div className="w-50/2 md:w-25/4  mb-4  p-5 h-28 bg-col rounded-2xl">
        <div className=" w-10 h-10 m-auto rounded-lg bg-white"></div>
        <h3 className="font-semibold text-base mt-3 overflow-hidden overflow-ellipsis whitespace-nowrap">Documentation</h3>
      </div>
      <div className="w-50/2 md:w-25/4 mb-4  p-5 h-28 bg-col rounded-2xl">
        <div className=" w-10 h-10 m-auto rounded-lg bg-white"></div>
        <h3 className="font-semibold text-base mt-3 overflow-hidden overflow-ellipsis whitespace-nowrap">Server Status</h3>
      </div>
      <div className="w-50/2 md:w-25/4 mb-4  p-5 h-28 bg-col rounded-2xl">
        <div className=" w-10 h-10 m-auto rounded-lg bg-white"></div>
        <h3 className="font-semibold text-base mt-3 overflow-hidden overflow-ellipsis whitespace-nowrap">VnSo APIs</h3>
      </div>

    </div>

  </div>


  )}