import Image from "next/image";
import { useEffect } from "react";
export default function Table({ filters }) {
  const dataBilling = [
    {
      order: "#1",
      date: "15/05/2021",
      total: "326.040₫",
      status: "Failed",
    },
    {
      order: "#2",
      date: "15/05/2021",
      total: "326.040₫",
      status: "Failed",
    },
    {
      order: "#3",
      date: "15/05/2021",
      total: "326.040₫",
      status: "Success",
    },
    {
      order: "#4",
      date: "15/05/2021",
      total: "326.040₫",
      status: "Success",
    },
    {
      order: "#5",
      date: "15/05/2021",
      total: "326.040₫",
      status: "Success",
    },
    {
      order: "#6",
      date: "15/05/2021",
      total: "326.040₫",
      status: "Success",
    },
    {
      order: "#7",
      date: "15/05/2021",
      total: "326.040₫",
      status: "Success",
    },
    {
      order: "#8",
      date: "15/05/2021",
      total: "326.040₫",
      status: "Success",
    },
  ]
  const { _page, _limit } = filters;
  const offset = (_page - 1) * _limit;
  const current = offset + _limit;
  return (
    <div className="bg-white  py-6">
      <div className="block overflow-x-auto mx-6">
        <table className="w-full text-left rounded-lg">
          <thead>
            <tr className="text-gray-800 border-b border-gray-100 ">
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataBilling.map(function (item, index) {
              if (index >= offset && index < current) {
                return (
                  <tr className="w-full font-light text-gray-700 whitespace-no-wrap border-b border-gray-100 " key={index}>
                    <td className="px-4 py-4">{item.order}</td>
                    <td className="px-4 py-4">{item.date}</td>
                    <td className="px-4 py-4">{item.total}</td>
                    <td className="px-4 py-4">
                      <span className={`text-sm text-white rounded-full px-2 py-1 ${item.status === "Success" ? "bg-green-500" : "bg-red-500"}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <a href="#">
                        <span className="fill-current text-blue-500">{item.status === "Success" ? "View" : "Pay"}</span>
                      </a>
                      <a href="#">
                        <span className="fill-current text-red-500 ml-4 ">
                          delete
                            </span>
                      </a>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
