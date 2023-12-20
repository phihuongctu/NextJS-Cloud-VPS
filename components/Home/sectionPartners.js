import Image from "next/image";
export default function Partners(){
  return(
    <div className="text-center text-white max-w-screen-lg m-auto h-auto">
    <h2 className="section-title headtitle" >Partners & investors</h2>
    <p className="text-gray-400 mb-4">Insights and resources to help drive your business forward faster.</p>
    <div className="h-auto flex flex-row flex-wrap m-auto sm:flex-wrap justify-between">
      <div className="w-50/2 sm:w-25/4 py-2 grid">
        <Image src="/img/default-logo.png" width="208" height="62" objectFit="cover" alt="logo" />

      </div>
      <div className="w-50/2 sm:w-25/4 py-2 grid">
        <Image src="/img/default-logo.png" width="208" height="62" objectFit="cover" alt="logo"/>

      </div>
      <div className="w-50/2 sm:w-25/4  py-2 grid">
        <Image src="/img/default-logo.png" width="208" height="62" objectFit="cover" alt="logo" />

      </div>
      <div className="w-50/2 sm:w-25/4  py-2 grid">
        <Image src="/img/default-logo.png" width="208" height="62" objectFit="cover" alt="logo"/>

      </div>
      <div className="w-50/2 sm:w-25/4  py-2 grid">
        <Image src="/img/default-logo.png" width="208" height="62"  objectFit="cover" alt="logo" />

      </div>
      <div className="w-50/2 sm:w-25/4 py-2 grid">
        <Image src="/img/default-logo.png" width="208" height="62" objectFit="cover" alt="logo" />

      </div>
      <div className="w-50/2 sm:w-25/4  py-2 grid">
        <Image src="/img/default-logo.png" width="208" height="62" objectFit="cover" alt="logo" />

      </div>
      <div className="w-50/2 sm:w-25/4 py-2  grid">
        <div className="bg-col w-full h-full bg-opacity-20 rounded inline-flex items-center justify-center">
          <a className="font-semibold text-base ml-2" href="#">View All</a>
          <div className="mx-2 my-auto flex">
            <Image src="/img/viewall.svg" width="40" height="40" alt="view all partner"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  )}