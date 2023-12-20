import Image from "next/image"
import Link from "next/link";
import HeaderDashboard from "../../components/Dashboard/headerDashboard";
import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function Documentation() {
    const dataDocument =
        [
            {
                img: "/img/cloud-sever.jpg",
                title: "Creating Snapshots With Packer",
                time: "7 months ago",
                listtag: [
                    {
                        tag: "Data Management"
                    },
                    {
                        tag: "Development"
                    },
                    {
                        tag: "PHP"
                    },
                ]
            },
            {
                img: "/img/cloud-sever.jpg",
                title: "Using Chocolatey Package Manager on Windows",
                time: "7 months ago",
                listtag: [
                    {
                        tag: "CMS"
                    },
                    {
                        tag: "Databases"
                    },
                    {
                        tag: "One-Click Apps"
                    },
                ]
            },
            {
                img: "/img/image-place-holder.jpg",
                title: "Install Code-Server on Ubuntu 18.04 LTS",
                time: "7 months ago",
                listtag: [
                    {
                        tag: "One-Click Apps"
                    },
                    {
                        tag: "Reference Guides"
                    },
                    {
                        tag: "One-Click Apps Wordpress"
                    },
                ]
            },
            {
                img: "/img/image-place-holder.jpg",
                title: "Using Chef-solo to Configure a Django App on Ubuntu",
                time: "7 months ago",
                listtag: [
                    {
                        tag: "PHP"
                    },
                    {
                        tag: "Reference "
                    },
                    {
                        tag: "Wordpress"
                    },
                ]
            },
            {
                img: "/img/cloud-sever.jpg",
                title: "Cách cài đặt phiên bản mới nhất của SQLite3",
                time: "7 months ago",
                listtag: [
                    {
                        tag: "Data Management"
                    },
                    {
                        tag: "Development"
                    },
                    {
                        tag: "PHP"
                    },
                ]
            },
        ]
    return (
        <div id="document">
            <main>
                <div >
                    <HeaderDashboard title="Documentation" />
                </div>
                <div>
                    {dataDocument.map(function (item, index) {
                        return (
                            <div className="py-2 pl-4 min-h-full border-b flex items-center dark:border-opacity-50 text-sm lg:text-base" key={index}>
                                <Link href="/docs/creating-snapshots-with-packer"><div className="w-10 min-w-max h-10 rounded-full overflow-hidden">
                                    <Image src={`${item.img}`} width="40" height="40" alt="document"/>
                                </div></Link>
                                <div className="w-full ml-4">
                                    <Link href="/docs/creating-snapshots-with-packer"><h3 className="mb-1">{item.title}</h3></Link>
                                    <div className="flex flex-row flex-wrap justify-between">
                                        <Link href="/docs/creating-snapshots-with-packer"><span className=" opacity-50 justify-start">{item.time}</span></Link>
                                        <div className="justify-start flex flex-wrap">
                                            {item.listtag.map(function (item, index) {
                                                return (
                                                    <a key={index} className="mr-1 mb-1 px-2 py-1 bg-blue-200 bg-opacity-20 text-blue-600 dark:bg-opacity-20 rounded-lg  whitespace-nowrap">{item.tag}</a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="h-52"></div>
            </main>
        </div>
    )
}
Documentation.Layout = LayoutDashboard;