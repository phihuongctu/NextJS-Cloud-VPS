import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function Add() {
    return (
        <div className="relative h-screen">
            <label>Tên nhãn </label>
            <input className="p-4 bg-gray-100 w-full mt-1 mb-4 outline-none rounded-lg"></input>
            <label>SSH key</label>
            <textarea className="bg-gray-100 w-full mt-1 mb-4 outline-none rounded-lg h-44"></textarea>
            <span>Cần trợ giúp tạo khóa? Xem hướng dẫn của chúng tôi về cách <span className=" text-blue-500">tạo SSH keys</span>.</span>
            <button className="bg-dashboard p-4 w-full text-white rounded-xl absolute left-0 bottom-0">Tạo</button>
        </div>
    )
}
Add.Layout=LayoutDashboard;