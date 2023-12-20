import Image from "next/image";
import Link from "next/link";
export default function box_product() {
    const dataCpu = [
        {
          name: "Standard",
          cpu: 2,
          ssd: "2555GB",
          ram: "4GB",
          bandwitch: "2000GB",
          price: 5000,
        },
        {
          name: "Premium",
          cpu: 4,
          ssd: "2555GB",
          ram: "4GB",
          bandwitch: "2000GB",
          price: 5000,
        },
        {
          name: "Enterprise",
          cpu: 5,
          ssd: "3000GB",
          ram: "8GB",
          bandwitch: "4000GB",
          price: 10000,
        }
      ]
    return (
        <section className="text-center text-white max-w-screen-lg h-auto relative">
            <h2 className="section-title headtitle" >Simple, flexible pricing</h2>
            <p className="text-gray-400 mb-4">No overcharges or hidden fees. We prefer simple and transparent.</p>
            <div className="h-auto flex flex-row flex-wrap md:flex-nowrap justify-between">
                {dataCpu.map(function (item, index) {
                    return (
                        <div className="bg-col w-full md:w-100/3-2rem my-4  rounded-2xl leading-9 hover:-translate-y-4 hover:duration-500 hover:shadow-lg;
                        relative" key={index}>
                            <div className={`${item.name === "Premium" ? "bg-premium" : ""} ${item.name === "Standard" ? " bg-standard" : ""} ${item.name === "Enterprise" ? " bg-enterprise" : ""} grid items-center h-12 p-2 text-xl rounded-t-2xl z-0 text-blue-900`}>{item.name}</div>
                            <p className={`${item.name === "Premium" ? "block" : "hidden"} absolute top-0 z-10`}><Image src="/img/most_popular.svg" width="105" height="112" /></p>
                            <div className="p-4">
                                <p className="mt-4">
                                    <Image src="/img/icon_cpu.svg" width="80" height="80" alt="icon product" />
                                </p>
                                <p ><b>{item.cpu}</b> CPU</p>
                                <p><b>{item.ssd}</b> SSD</p>
                                <p><b>{item.ram}</b> RAM</p>
                                <p><b>{item.bandwitch}</b> Bandwidth</p>
                                <p><b>{item.price}</b> VND/Month</p>
                                <div className="">
                                <div className="btn-trial w-52 h-12 m-auto my-4 font-bold rounded-full leading-12" >
                                    <Link href="#">
                                        <span>Start Free Trial</span>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}