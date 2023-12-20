import { ImageChangePass } from "/components/Gallery/image";
export default function FormAccount() {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white dark:bg-gray-800">
      <div className="thumbnail grid place-items-center">
        <ImageChangePass />
      </div>
      <h2 className=" text-2xl font-semibold text-center text-gray-700 capitalize dark:text-white">
        Edit Account
      </h2>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email
            </label>
            <input
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="number"
            >
              Number phone
            </label>
            <input
              id="number"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Address
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className=" w-full px-6 py-3 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Save changes
          </button>
        </div>
      </form>
    </section>
  );
}
