import Image from "next/image";
import SliderSupport from "../../Slider/sliderSupport";
export  const dataFAQ = [
    {
        img: "/img/image-place-holder.jpg",
        title: "Nhân viên có tư vấn ngoài giờ làm việc hay không?",
        time: "9 months ago",
        listtag: [  
            {
                tag: "Account"
            },              
            {
                tag: "Support"
            },
        ]
        
    },
    {
        img: "/img/image-place-holder.jpg",
        title: "Nhân viên có tư vấn ngoài giờ làm việc hay không?",
        time: "9 months ago",
        listtag: [                
            {
                tag: "Support"
            },
        ]
        
    },
    {
        img: "/img/image-place-holder.jpg",
        title: "Nhân viên có tư vấn ngoài giờ làm việc hay không?",
        time: "9 months ago",
        listtag: [                
            {
                tag: "Support"
            },
        ]
    },
    {
        img: "/img/image-place-holder.jpg",
        title: "Nhân viên có tư vấn ngoài giờ làm việc hay không?",
        time: "9 months ago",
        listtag: [                
            {
                tag: "Support"
            },
        ]
    },
    {
        img: "/img/image-place-holder.jpg",
        title: "Nhân viên có tư vấn ngoài giờ làm việc hay không?",
        time: "9 months ago",
        listtag: [               
            {
                tag: "Support"
            },
        ]
    },
]
export default function FAQ() {
  
    return (
        <div >
            <div className="flex flex-row flex-nowrap justify-between p-4 items-center">
                <h4 className="text-clampLg font-semibold">FAQ</h4>
                <div>
                    <a href="/faq">
                        <span className=" text-clampSx text-blue-600 my-auto mr-2">View All</span>
                        <Image src="/img/arrow-blue.svg" width="12" height="12" alt="viewall FAQ" />
                    </a>

                </div>
            </div>
            <div className="silder flex text-black">
                <SliderSupport />
                {/* {dataFAQ.map(function (item, index) {
                return (
                    <div className="w-1/3 min-w-max h-80 ml-4 pb-4 bg-white rounded-2xl overflow-hidden" key={index}>
                        <Image src={`${item.img}`} width="400" height="216" />
                        <div className="px-4 pt-4">
                            <h6>
                                {item.title}
                            </h6>
                        </div>
                        <div className="p-4 flex">
                            <Image src="/img/time.svg" width="22" height="22" />
                            <p className="ml-2 text-sm opacity-50">{item.time}</p>
                        </div>
                    </div>
                )
            })} */}
            </div>
        </div>

    )
}