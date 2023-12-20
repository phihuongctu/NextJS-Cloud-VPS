import { IconCaretDown } from "../../components/Gallery/icon";
import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function Add() {
    return (
        <div className="relative h-auto w-full">            
            <label>Tên nhãn </label>
            <input className="p-4 bg-gray-100 w-full mt-1 mb-4 outline-none rounded-lg"></input>
            <div className="grid w-full">
                <label>Type</label>
                <div className="bg-gray-100 rounded-lg mb-4 mt-1 flex justify-between items-center">
                    <select className="p-4 bg-gray-100 outline-none w-52 rounded-lg appearance-none dark:text-black">
                        <option value="boot">Boot</option>
                        <option value="pxe">PXE</option>
                    </select>
                    <div className="mr-4">
                        <IconCaretDown/>
                    </div>                    
                </div>
            </div>                       
            <label>Script</label>
            <textarea className="bg-gray-100 w-full mt-1 mb-4 outline-none rounded-lg h-auto min-h-96"></textarea>
            <button className="bg-dashboard p-4 w-full text-white rounded-xl ">Add Script</button>
        </div>
    )
}
Add.Layout=LayoutDashboard;