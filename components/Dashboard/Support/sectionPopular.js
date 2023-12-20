import Image from "next/image";
import Link from "next/link";
export default function Popular() {
    const dataPopular = [
        {
            img: "/img/support-doc.svg",
            title: "Documention",
        },
        {
            img: "/img/support-dev.svg",
            title: "Development",
        },
        {
            img: "/img/support-inf.svg",
            title: "Infrastructure",
        },
        {
            img: "/img/support-oper.svg",
            title: "Operating System",
        },
    ]
    return (
        <div className="flex flex-row flex-wrap justify-between font-semibold pt-4 text-black dark:bg-opacity-50">
            {dataPopular.map(function (item, index) {
                return (
                    <div className="w-3/6 cursor-pointer" key={index}>
                        <Link href={`${item.title === "Documention" ? "/dashboard/documentation" : "#"}`}>

                            <div className=" h-28 bg-white p-4 px-auto rounded-xl m-2 text-center shadow-black-4-8">
                                <div className="w-10 h-10 bg-gray-500 bg-opacity-20 rounded-full m-auto">
                                    <Image src={`${item.img}`} width="25" height="40" alt="icon" />
                                </div>
                                <h6 className="text-base font-medium mt-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{item.title}</h6>

                            </div>

                        </Link>
                    </div>
                )
            }
            )}
        </div>
    )
}