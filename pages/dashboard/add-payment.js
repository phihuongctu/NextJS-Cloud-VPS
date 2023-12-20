import Image from "next/image";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import HeaderDashboard from "../../components/Dashboard/headerDashboard";
import SliderPayment from "../../components/Slider/sliderPayment";
import {ImageJCB, ImageMasterCard, ImageMoMo, ImagePaypal,ImageVisa } from "../../components/Gallery/image";
export default function AddPayment() {
    const dataPayment = [
        {
            title: "Paypal",
            img:"",
            tag:"E Wallet"
        },
        {
            title: "MoMo",
            img:"",
            tag:"E Wallet"
        },
        {
            title: "Airpay",
            img:"/img/airpay.svg",
            tag:"E Wallet"
        },
        {
            title: "Viettelpay",
            img:"/img/viettelpay.svg",
            tag:"E Wallet"
        },
        {
            title: "Vietcombank",
            img:"/img/vietcombank.svg",
            tag:"Internet Banking"
        },
        {
            title: "Vietinbank",
            img:"/img/vietinbank.svg",
            tag:"Internet Banking"
        },
        {
            title: "Techcombank ",
            img:"/img/techcombank.svg",
            tag:"Internet Banking"
        },
        {
            title: "Agribank",
            img:"/img/agribank.svg",
            tag:"Internet Banking"
        },
        {
            title: "Visa",
            img:"",
            tag:"Credit Card"
        },
        {
            title: "JCB",
            img:"",
            tag:"Credit Card"
        },
        {
            title: "Mastercard",
            img:"",
            tag:"Credit Card"
        },

    ]
    return (
        <div className=" bg-white text-black">
            <div className="bg-dashboard">
                <HeaderDashboard title="" />
                <SliderPayment />     
            </div>
            <div className="p-4 flex flex-wrap w-full">
                {dataPayment.map(function (item, index) {        
                    return (
                        
                        <div key={index} className="mb-4 w-3/12 grid justify-center">
                            <div className="flex justify-center"><div className="border rounded-xl w-14 h-14 flex justify-center items-center my-2">
                                {item.title === "Paypal" ? <ImagePaypal /> :
                                    item.title === "MoMo" ? <ImageMoMo /> :
                                        item.title === "Visa" ? <ImageVisa /> :
                                            item.title === "JCB" ? <ImageJCB /> : 
                                            item.title === "Mastercard" ? <ImageMasterCard />:<Image src={`${item.img}`} width="40" height="40" alt="payment" />
                                }
                            </div></div>
                            <h2 className="flex justify-center text-xs overflow-hidden">{item.title}</h2>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
AddPayment.Layout = LayoutDashboard;