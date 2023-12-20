import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function Detail() {
    return (
        <div className="relative h-screen">
            <div className="h-96 bg-dashboard text-4xl text-white flex justify-center items-center">
                <span className="">Giảm 10%</span>
            </div>
            <div className="p-4 grid">
                <h2 className="text-lg font-bold mb-2">Giảm 10% trên tổng hóa đơn khi đăng ký gói VPS trên 3 năm</h2>
                <span className="text-sm text-gray-500 mb-2" >Hết hạn vào 11/05/2021</span>
                <span className="text-base mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo lacinia amet, mi integer pharetra eu at ut.
                    Laoreet tempor orci, tincidunt bibendum mattis tortor vel vel volutpat.
                    Sollicitudin nulla porttitor libero nulla lacus sed diam.
                    Sit viverra mi lectus elit eget aliquam mauris lectus dui.
                    Bibendum semper dui aliquet amet velit sed id. Lobortis euismod risus lacinia ut odio.
                    Integer lectus id quis aliquet nisi cursus et.
                    Egestas diam dolor turpis sollicitudin amet imperdiet
                </span>                
            </div>
            <div className=" fixed bg-white bottom-20 left-4 right-4 lg:absolute lg:bottom-0" >
                <button className="p-4 w-full relative right-4  text-white bg-dashboard rounded-xl m-4 lg:my-0">Sử dụng</button>
            </div>
        </div>
    )

}
Detail.Layout = LayoutDashboard;