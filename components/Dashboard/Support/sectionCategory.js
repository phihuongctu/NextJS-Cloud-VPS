import Image from "next/image";
import Link from "next/link";
export default function Categories(){
    const dataCategory = [
        {
            img: "/img/support-data.svg",
            title: "Data Manager",
        },
        {
            img: "/img/support-inf.svg",
            title: "Development",
        },
        {
            img: "/img/support-infra.svg",
            title: "Infrastructure",
        },
        {
            img: "/img/support-opera.svg",
            title: "Operating System",
        },
        {
            img: "/img/support-app.svg",
            title: "Server App",
        },
        {
            img: "/img/support-game.svg",
            title: "Game Servers",
        }
    ]
    return(
        <div >
        <div className="flex flex-row flex-nowrap justify-between p-4 items-center">
            <h4 className=" text-clampLg font-semibold">Popular Categories</h4>
            <div>
                <a className=" text-clampSx text-blue-600 my-auto mr-2 ">View All</a>
                <Image src="/img/arrow-blue.svg" width="12" height="12" alt="viewall category"/>
            </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between font-semibold text-black">
            {dataCategory.map(function (item, index) {
                return (
                    <div className="w-3/6 cursor-pointer" key={index}>
                        <Link href={`${item.title==="Documention"?"/documentation":"#"}`}>
                        <div className=" h-28 bg-white p-4 px-auto rounded-xl m-2 text-center shadow-black-4-8">
                            <div className="w-10 h-10 bg-gray-500 bg-opacity-20 rounded-full m-auto">
                                <Image src={`${item.img}`} width="25" height="40" alt="icon" />
                            </div>
                            <h6 className="text-clampBase font-medium mt-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{item.title}</h6>
                        </div>
                        </Link>
                    </div>
                )
            }
            )}
        </div>
    </div>

    )
}