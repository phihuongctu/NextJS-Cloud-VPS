import Image from "next/image";
import Link from "next/link";
export default function Deploy() {
    const dataDeploy = [
        {
          stt: 1,
          svg: "/img/vnso.svg",
          title: "Create an account",
          content: "First, you need to register a user account on our website before configuring and using it on a regular basis.",
          button: "Get Start",
        },
        {
          stt: 2,
          svg: "/img/vnso.svg",
          title: "Register a service",
          content: "First, you need to register a user account on our website before configuring and using it on a regular basis.",
          button: "Register Now",
        },
        {
          stt: 3,
          svg: "/img/vnso.svg",
          title: "Control Panel",
          content: "Our easy-to-use control panel and API let you spend more time coding and less time managing your infrastructure.",
          button: "Go to Dashborad",
        }
      ]
    return(
        <div className="text-center text-white max-w-screen-lg m-auto h-auto relative">
            <h2 className="section-title headtitle" >Deploy an instance with VnSo</h2>
            <p className="text-gray-400 mb-4">Over 30 million instances deployed by thousands of clients</p>

            <div className="h-auto flex flex-row flex-wrap md:flex-nowrap m-auto justify-between">
              {dataDeploy.map(function (item, index) {
                return (
                  <div className="w-full sm:w-100/3-2rem my-4 bg-col rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
                  p-4 flex flex-wrap relative" key={index}>
                    <div className="h-5/6 justify-start pb-4">
                      <p className="mb-8">
                        <Image src={`${item.svg}`} width="158" height="189" alt="deploy" />
                        <span className="absolute w-8 h-8 bg-pink-500 rounded-full leading-relaxed text-lg right-4">{item.stt}</span>
                      </p>
                      <h3 className="font-bold text-3xl mb-4">{item.title}</h3>
                      <p className="text-gray-400 leading-7 overflow-ellipsis line-clamp-3">{item.content}</p>
                    </div>                   
                    <div className="btn-deploy">
                      <Link href={`${item.stt===1 ? "/login":""} ${item.stt===2 ? "/account/dangky":"#"} ${item.stt===3 ? "/acount":""}`} >
                        <span className="font-bold px-auto">{item.button}</span>
                      </Link>
                      
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        
    )
}

 