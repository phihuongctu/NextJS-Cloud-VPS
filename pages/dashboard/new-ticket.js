import LayoutDashboard from "/components/Layout/layoutDashboard";

export default function NewTicket() {
  return (
    <>
      <div className="container items-center pt-8 pb-24 my-0 mx-auto lg:pb-4 ">
        <h1 className="text-2xl text-center">New Ticket</h1>
        <form className="flex flex-col w-full max-w-4xl mx-auto my-6 mb-4  transform  rounded-lg ">
          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-base leading-7 text-blueGray-500"
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ticket subject"
              className="w-full px-4 py-2 mt-2 mr-4 text-base text-black  border transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none  focus:ring-2 "
            />
          </div>
          <div className="relative mt-4">
            <label
              className="text-base leading-7 text-blueGray-500"
              htmlFor="date"
            >
              Select your IP
            </label>
            <div className="relative ">
              <select
                name="date"
                className="w-full px-4 py-2 mt-2 text-base text-blueGray-500 transform border  rounded-lg appearance-none bg-blueGray-100 focus:border-blue-500 focus:outline-none  focus:ring-2 "
              >
                <option
                  className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase "
                  value="1912"
                >
                  19.01.21
                </option>
                <option
                  className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase "
                  value="1912"
                >
                  02.02.21
                </option>
                <option
                  className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase "
                  value="1912"
                >
                  16.02.21
                </option>
                <option
                  className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase "
                  value="1912"
                >
                  {" "}
                  02.03.21
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-blueGray-500">
                <svg
                  fill="#ffffff"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative mt-4">
            <label
              className="text-base leading-7 text-blueGray-500"
              htmlFor="date"
            >
              Ticket Type
            </label>
            <div className="relative ">
              <select
                name="date"
                className="w-full px-4 py-2 mt-2 text-base text-blueGray-500  transform border  rounded-lg appearance-none bg-blueGray-100 focus:border-blue-500 focus:outline-none  focus:ring-2 "
              >
                <option
                  className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase "
                  value="1912"
                >
                  FAQ
                </option>
                <option
                  className="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase "
                  value="1912"
                >
                  General
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-blueGray-500">
                <svg
                  fill="#ffffff"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="text-base leading-7 text-blueGray-500"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500  border transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 apearance-none autoexpand"
                id="description"
                type="text"
                name="description"
                placeholder="Message..."
                required
                defaultValue={""}
              />
            </div>
          </div>
          <section className="flex flex-col w-full h-full p-1 overflow-auto">
            <header className="flex flex-col items-center justify-center py-12 text-base text-blueGray-500  transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
              <p className="flex flex-wrap justify-center mb-3 text-base leading-7 dark:text-black text-blueGray-500">
                <span>Drag and drop your</span>&nbsp;
                <span>files anywhere or</span>
              </p>
              <button className="w-auto px-2 py-1 my-2 mr-2 text-blueGray-500 dark:text-black  transform border rounded-md hover:text-blueGray-600 text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100">
                Upload a file
              </button>
            </header>
          </section>

          <div className="flex items-center w-full pt-4">
            <button className="w-full py-3 text-base text-white transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
              Button
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

NewTicket.Layout = LayoutDashboard;
