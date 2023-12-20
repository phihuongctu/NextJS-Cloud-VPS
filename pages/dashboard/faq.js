import Image from "next/image"
import HeaderDashboard from "../../components/Dashboard/headerDashboard";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import { dataFAQ } from "../../components/Dashboard/FAQ/sectionFAQ"
import Link from "next/link";
export default function FAQs() {
    return (
        <div id="faq">
            <main>
                <div>
                    <HeaderDashboard title="FAQs" />
                </div>
                <div>
                    {dataFAQ.map(function (item, index) {
                        return (
                            <div className="p-4 border-b flex items-center dark:border-opacity-50 text-sm lg:text-base" key={index}>
                                <Link href="/docs/creating-snapshots-with-packer">
                                    <div className="w-10 min-w-max h-10 rounded-full overflow-hidden">
                                        <Image src={`${item.img}`} width="40" height="40" alt="faq" />
                                    </div>
                                </Link>
                                <div className="w-full ml-4">
                                    <Link href="/docs/creating-snapshots-with-packer"><h3 className="mb-1">{item.title}</h3></Link>
                                    <div className="flex flex-row justify-start">
                                        <Link href="/docs/creating-snapshots-with-packer"><span className=" opacity-50 w-6/12">{item.time}</span></Link>
                                        <div>
                                            {item.listtag.map(function (item, index) {
                                                return (
                                                    <a key={index} className="ml-2 px-2 py-1 bg-blue-200 bg-opacity-20 text-blue-600 dark:bg-opacity-20 rounded-lg ">{item.tag}</a>
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
FAQs.Layout = LayoutDashboard;