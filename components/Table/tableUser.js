import Image from "next/image";
export default function Table(data) {
  return (
    <div className="bg-white rounded-lg shadow-lg py-6">
      <div className="block overflow-x-auto mx-6">
        <table className="w-full text-left rounded-lg">
          <thead>
            <tr className="text-gray-800 border border-b-0">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Avatar</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full font-light text-gray-700 bg-gray-100 whitespace-no-wrap border border-b-0">
              <td className="px-4 py-4">1</td>
              <td className="px-4 py-4">Bedram Tamang</td>
              <td className="px-4 py-4">
                <Image
                  className="h-6 w-6 rounded-full"
                  src="/img/getoff.svg"
                  alt="Teknix"
                  width={20}
                  height={20}
                />
              </td>
              <td className="px-4 py-4">tmgbedu@gmail.com</td>
              <td className="px-4 py-4">
                <span className="text-sm bg-green-500 text-white rounded-full px-2 py-1">
                  Active
                </span>
              </td>
              <td className="text-center py-4">
                <a href="#">
                  <span className="fill-current text-green-500 material-icons">
                    edit
                  </span>
                </a>
                <a href="#">
                  <span className="fill-current text-red-500 material-icons">
                    highlight_off
                  </span>
                </a>
              </td>
            </tr>
            <tr className="w-full font-light text-gray-700 whitespace-no-wrap border">
              <td className="px-4 py-4">2</td>
              <td className="px-4 py-4">Taylor Otwel</td>
              <td className="px-4 py-4">
                <Image
                  className="h-6 w-6 rounded-full"
                  src="/img/getoff.svg"
                  alt="Teknix"
                  width={20}
                  height={20}
                />
              </td>
              <td className="px-4 py-4">taylow@laravel.com</td>
              <td className="px-4 py-4">
                <span className="text-sm bg-yellow-500 text-white rounded-full px-2 py-1">
                  Pending
                </span>
              </td>
              <td className="text-center py-4">
                <a href="#">
                  <span className="fill-current text-green-500 material-icons">
                    edit
                  </span>
                </a>
                <a href="#">
                  <span className="fill-current text-red-500 material-icons">
                    highlight_off
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
