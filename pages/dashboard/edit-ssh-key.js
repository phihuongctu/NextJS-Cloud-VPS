import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function Edit() {
    return (
        <div className="relative h-screen">
            <div className="flex justify-between mb-4">
                <div className=" w-6/12">
                    <h2 className="text-clampSm font-semibold">Ngày tạo</h2>
                    <span className=" text-clampSx text-gray-400">19/10/2020 07:46</span>
                </div>
                <div className=" w-6/12">
                    <h2 className="text-clampSm font-semibold">Ngày cập nhật</h2>
                    <span className=" text-clampSx text-gray-400">31/12/2020 14:03</span>
                </div>
            </div>
            <label className="text-clampSm">Tên nhãn </label>
            <input className="p-4 bg-gray-100 w-full mt-1 mb-4 outline-none rounded-lg"></input>
            <label className="text-clampSm">SSH key</label>
            <textarea className="bg-gray-100 w-full mt-1 mb-4 outline-none rounded-lg h-44"></textarea>
            <span className="text-gray-400">Cần trợ giúp tạo khóa? Xem hướng dẫn của chúng tôi về cách <span className=" text-blue-500">tạo SSH keys</span>.</span>
            <button className="bg-dashboard p-4 w-full text-white rounded-xl absolute left-0 bottom-0">Cập nhật</button>
        </div>
    )
}
Edit.Layout=LayoutDashboard;