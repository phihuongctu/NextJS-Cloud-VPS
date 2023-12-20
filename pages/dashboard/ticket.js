import LayoutDashboard from "/components/Layout/layoutDashboard";
import HeaderDashboard from "../../components/Dashboard/headerDashboard";
import Link from "next/link";
import PopupAddNew from "../../components/Dashboard/popupaddNew";
import Tag from "../../components/Dashboard/sectionTag";
export default function Ticket() {    
    const dataTicket =
        [
            {
                img: "",
                title: "Tôi cần hỗ trợ",
                type: "Default",
                status: "New",
                date: "08/07/2021"
            },
            {
                img: "",
                title: "Tôi cần hỗ trợ",
                type: "Default",
                status: "Processing",
                date: "08/07/2021"
            },
            {
                img: "",
                title: "Tôi cần hỗ trợ",
                type: "Default",
                status: "New",
                date: "08/07/2021"
            },
            {
                img: "",
                title: "Tôi cần hỗ trợ",
                type: "Default",
                status: "New",
                date: "08/07/2021"
            },
            {
                img: "",
                title: "Tôi cần hỗ trợ",
                type: "Default",
                status: "New",
                date: "08/07/2021"
            },
            {
                img: "",
                title: "Tôi cần hỗ trợ",
                type: "Default",
                status: "New",
                date: "08/07/2021"
            },
        ]
    return (
        <div id="document">
            <main>
                <div >
                    <HeaderDashboard title="Ticket" />                    
                    <Tag title="ticket"/>
                </div>
                <div className="pt-4">
                    {dataTicket.map(function (item, index) {
                        return (
                            <div className="py-2 px-4 min-h-full border-b flex items-center dark:border-opacity-50" key={index}>
                                <Link href="/docs/creating-snapshots-with-packer">
                                    <div className="w-10 min-w-max h-10 rounded-full overflow-hidden bg-gray-700 pl-4">

                                    </div>
                                </Link>
                                <div className="w-full pl-4">
                                    <div className="flex justify-between text-gray-500 text-xs ">
                                        <span>{item.type}</span>
                                        <span className={`bg-opacity-20 dark:bg-opacity-20 rounded-full whitespace-nowrap py-1 p-2                                 
                                        ${item.status === "New" ? " bg-green-200 text-green-500" : " bg-gray-200"}`}>{item.status}</span>
                                        <span>{item.date}</span>
                                    </div>
                                    <span className=" font-semibold">{item.title}</span>
                                    <span className="block text-gray-500">Test replieeee</span>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <PopupAddNew link="/dashboard/new-ticket" />
                <div className="h-52"></div>

            </main>
        </div>
    )
}
Ticket.Layout = LayoutDashboard;