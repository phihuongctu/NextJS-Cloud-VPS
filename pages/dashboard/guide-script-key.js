import LayoutDashboard from "/components/Layout/layoutDashboard";
export default function Guide() {
  return (
    <div className="grid text-base text-gray-500">
      <h2 className=" text-3xl font-bold py-4 text-black">
        Sử dụng Startup Script
      </h2>
      <span>
        Có hai loại tập lệnh khởi động. Thông tin thêm về các tập lệnh khởi động
        có thể được tìm thấy <span className="text-blue-500">tại đây</span>.{" "}
      </span>
      <span className=" text-lg text-black font-semibold">Boot</span>
      <span>
        Tập lệnh boot được thực thi trên máy chủ của bạn ngay lần đầu tiên nó
        khởi động.
      </span>
      <span>
        {" "}
        Trên Linux, tập lệnh khởi động được lưu vào /tmp/firstboot.exec, nó được
        thực hiện với /bin/bash (như root), và đầu ra được lưu vào
        /tmp/firstboot.log
      </span>
      <span>
        Trên BSD, tập lệnh khởi động được lưu vào /tmp/firstboot.exec, nó được
        thực hiện với /bin/sh (như root), và đầu ra được lưu vào
        /tmp/firstboot.log
      </span>
      <span>
        Trên Windows, tập lệnh khởi động được lưu vào C:\image\firstboot.cmd, nó
        được thực hiện với cmd.exe (như Administrator), và đầu ra được lưu vào
        C:\image\firstboot.log
      </span>
      <span className=" text-lg text-black font-semibold">PXE</span>
      <span>
        Tập lệnh PXE có thể được sử dụng để tự động cài đặt hệ điều hành tùy
        chỉnh.
      </span>
      <span>
        {" "}
        Tập lệnh PXE sẽ được iPXE thực thi mỗi khi máy chủ của bạn khởi động,
        chỉ khi không có hệ điều hành nào được cài đặt vào đĩa của máy chủ.
      </span>
      <span>Phải là một tập lệnh iPXE hợp lệ.</span>
      <span>
        Tập lệnh PXE được liệt kê trong tùy chọn &quot;Tải lên ISO&quot; trên
        trang triển khai.
      </span>
      <span>Không được hỗ trợ trên kim loại trần.</span>
    </div>
  );
}
Guide.Layout = LayoutDashboard;
