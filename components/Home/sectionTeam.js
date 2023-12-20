import Image from "next/image";
import Link from "next/link";
export default function Team(){
  const dataOurteam = [
    {
      img: "",
      name: "Raihan Rafuj",
      regency: "President"
    },
    {
      img: "",
      name: "Raihan Rafuj",
      regency: "Vice President"
    },
    {
      img: "",
      name: "Raihan Rafuj",
      regency: "Chief Executive Officer"
    },
    {
      img: "",
      name: "Raihan Rafuj",
      regency: "Product Manager"
    },
    {
      img: "",
      name: "Raihan Rafuj",
      regency: "Product Manager"
    },
  ]
  return(
    <div className="text-center text-white max-w-screen-lg m-auto h-auto">
    <h2 className="section-title headtitle" >Our team</h2>
    <p className="text-gray-400 mb-4">Insights and resources to help drive your business forward faster.</p>
    <div className="h-auto flex flex-row flex-wrap m-auto lg:flex-wrap px-2 justify-start ">
      {dataOurteam.map(function (item, index) {
        return (
          <div className="mb-8 p-4 w-6/12 md:w-1/4 " key={index}>
            <Image src="/img/user.png" width="160" height="160" alt="our team" />
            <h3 className="font-semibold text-lg mb-1">
              {item.name}
            </h3>
            <p className=" text-gray-400">
              {item.regency}
            </p>
          </div>
        )
      })}
      <div className="bg-col mb-8 p-4 w-6/12 md:w-1/4 rounded-2xl">
       <Link href="#" ><a className=" font-semibold text-xl pt-16 block mb-4">View All</a></Link>
        <Image src="/img/viewall.svg" width="40" height="40" alt="view all our team"/>
      </div>
    </div>
    <div className="join">
      <p className="content-start font-semibold text-lg m-auto ml-4">
        We’re hiring
    </p>
      <Link href="#"><a className="btn-join content-end w-44 h-12 font-semibold  rounded-full p-3 my-auto mr-4">
        Join Us</a>
    </Link>
    </div>
  </div>

  )}