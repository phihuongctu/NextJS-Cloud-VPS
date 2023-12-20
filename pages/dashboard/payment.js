import Link from "next/link";
import Image from "next/image";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import PopupAddNew from "../../components/Dashboard/popupaddNew";
import { IconEdit, IconTrashGrey } from "../../components/Gallery/icon";
import { ImageEmptyWallet, ImagePaypal, ImageMoMo, ImageZalopay, ImageMasterCard } from "../../components/Gallery/image";

export default function Payment() {
    const dataPayment = [
        {
            title: "Paypal",
            tag: "Chính",            
            id: "0909090909",
            img:""

        },
        {
            title: "MoMo",
            tag: "",
            id: "0909090909",
            img:""
        },
        {
            title: "Zalopay",
            tag: "",
            id: "0909090909",
            img:"/img/zalopay.svg"
        },
        {
            title: "Credit card",
            tag: "",
            id: "************9695",
            img:""
        },
    ]
    return (
        <div id="payment" className="w-full max-w-screen-2xl bg-white">
            
            <div className=" contents items-center min-h-96 text-black px-2">
                {dataPayment.length === 0 ?
                    <div className="grid justify-center text-center items-center py-28">
                        <div className="grid justify-center "><div className="flex items-center justify-center"><ImageEmptyWallet /></div></div>
                        <span className=" my-6 text-2xl font-bold">No payment method yet !</span>
                        <span className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </span>
                    </div>
                    :
                    dataPayment.map(function (item, index) {
                        return (                            
                            <Link href="#" key={index}>                               
                                <div className="h-20 lg:px-4 flex items-center justify-between">
                                    <div className="w-10 min-w-max h-10 rounded overflow-hidden">
                                        {item.title === "Paypal" ? <ImagePaypal/> :
                                            item.title === "MoMo" ? <ImageMoMo/> :
                                            item.title === "Credit card" ? <ImageMasterCard />:<Image src={`${item.img}`} width="40" height="40" alt="zalopay" />
                                        }
                                    </div>
                                    <div className="w-full ml-4 whitespace-nowrap ">
                                        <h3 className="mb-1">{item.title} <span className={`bg-blue-100 text-blue-500 px-2 py-1 ml-2  rounded-2xl text-clampSx ${item.tag === "" ? "hidden" : ""} `}>{item.tag}</span>  </h3>
                                        <span className=" text-gray-400 text-clampSx font-bold">
                                            {item.id}{" "}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="pl-2">
                                              <IconEdit/>
                                        </div>
                                      <div className="pl-2">
                                          <IconTrashGrey/>      
                                      </div>                                                                         
                                    </div>
                                </div>                               
                            </Link>  
                        )
                    })}

            </div>
            <PopupAddNew link="/dashboard/add-payment" />
        </div>
    )
}
Payment.Layout=LayoutDashboard;