import Link from "next/link";
import LayoutFullView from "/components/Layout/layoutFullView";
export default function Page404() {
  return (
    <section className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
      <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
          <div className="mb-10 lg:mb-20">
            <svg
              width="115"
              height="32"
              viewBox="0 0 115 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3967 0.5343C13.6306 -0.1781 15.1508 -0.1781 16.3847 0.5343L26.7874 6.54027C28.0213 7.25267 28.7814 8.56923 28.7814 9.99403V22.006C28.7814 23.4308 28.0213 24.7473 26.7874 25.4597L16.3847 31.4657C15.1508 32.1781 13.6306 32.1781 12.3967 31.4657L1.99404 25.4597C0.760122 24.7473 0 23.4308 0 22.006V9.99403C0 8.56923 0.760122 7.25267 1.99404 6.54027L12.3967 0.5343Z"
                fill="url(#paint0_linear)"
              ></path>
              <path
                d="M11.5991 25.3054L11.4896 25.2421L12.234 22.4958L6.51985 16.9611L6.49796 16.8977L8.5997 9.31386L8.64348 9.27161L16.5031 7.24362L16.5688 7.26475L22.3267 12.8206L22.3486 12.884L20.2468 20.4678L20.225 20.5101L11.5991 25.3054ZM6.65121 16.8977L12.3653 22.4113L12.3872 22.4747L11.6647 25.1153L20.1155 20.3833L22.1953 12.8629L16.5031 7.37037L8.73106 9.37724L6.65121 16.8977Z"
                fill="white"
              ></path>
              <path
                d="M17.2477 17.7005L10.4608 16.0105L10.439 15.9048L15.4306 11.0672L15.5401 11.0884L17.3353 17.616L17.2477 17.7005ZM10.6141 15.926L17.1602 17.5526L15.4306 11.2574L10.6141 15.926Z"
                fill="white"
              ></path>
              <path
                d="M12.3655 22.5169L12.256 22.4957L8.62173 9.37715L8.7093 9.29265L22.2612 12.8205L22.283 12.9261L12.3655 22.5169ZM8.77498 9.46165L12.3436 22.3479L22.1079 12.9473L8.77498 9.46165Z"
                fill="white"
              ></path>
              <path
                d="M10.4677 15.886L6.54461 16.858L6.57728 16.9807L10.5003 16.0088L10.4677 15.886Z"
                fill="white"
              ></path>
              <path
                d="M16.4467 7.29758L15.3969 11.094L15.5238 11.1267L16.5736 7.33025L16.4467 7.29758Z"
                fill="white"
              ></path>
              <path
                d="M17.3213 17.6482L17.229 17.7384L20.1099 20.4854L20.2023 20.3953L17.3213 17.6482Z"
                fill="white"
              ></path>
              <path
                d="M11.5991 25.3054L11.4896 25.2421L12.234 22.4958L6.51985 16.9611L6.49796 16.8977L8.5997 9.31386L8.64348 9.27161L16.5031 7.24362L16.5688 7.26475L22.3267 12.8206L22.3486 12.884L20.2468 20.4678L20.225 20.5101L11.5991 25.3054ZM6.65121 16.8977L12.3653 22.4113L12.3872 22.4747L11.6647 25.1153L20.1155 20.3833L22.1953 12.8629L16.5031 7.37037L8.73106 9.37724L6.65121 16.8977Z"
                stroke="white"
                strokeWidth="0.5"
              ></path>
              <path
                d="M17.2477 17.7005L10.4608 16.0105L10.439 15.9048L15.4306 11.0672L15.5401 11.0884L17.3353 17.616L17.2477 17.7005ZM10.6141 15.926L17.1602 17.5526L15.4306 11.2574L10.6141 15.926Z"
                stroke="white"
                strokeWidth="0.5"
              ></path>
              <path
                d="M12.3655 22.5169L12.256 22.4957L8.62173 9.37715L8.7093 9.29265L22.2612 12.8205L22.283 12.9261L12.3655 22.5169ZM8.77498 9.46165L12.3436 22.3479L22.1079 12.9473L8.77498 9.46165Z"
                stroke="white"
                strokeWidth="0.5"
              ></path>
              <path
                d="M10.4677 15.886L6.54461 16.858L6.57728 16.9807L10.5003 16.0088L10.4677 15.886Z"
                stroke="white"
                strokeWidth="0.5"
              ></path>
              <path
                d="M16.4467 7.29758L15.3969 11.094L15.5238 11.1267L16.5736 7.33025L16.4467 7.29758Z"
                stroke="white"
                strokeWidth="0.5"
              ></path>
              <path
                d="M17.3213 17.6482L17.229 17.7384L20.1099 20.4854L20.2023 20.3953L17.3213 17.6482Z"
                stroke="white"
                strokeWidth="0.5"
              ></path>
              <path
                d="M6.5856 17.4047C6.8637 17.4047 7.08915 17.1872 7.08915 16.9188C7.08915 16.6505 6.8637 16.4329 6.5856 16.4329C6.30751 16.4329 6.08206 16.6505 6.08206 16.9188C6.08206 17.1872 6.30751 17.4047 6.5856 17.4047Z"
                fill="white"
              ></path>
              <path
                d="M8.68727 9.86312C8.96537 9.86312 9.19081 9.64558 9.19081 9.37724C9.19081 9.1089 8.96537 8.89137 8.68727 8.89137C8.40917 8.89137 8.18373 9.1089 8.18373 9.37724C8.18373 9.64558 8.40917 9.86312 8.68727 9.86312Z"
                fill="white"
              ></path>
              <path
                d="M16.5252 7.81394C16.8033 7.81394 17.0287 7.59641 17.0287 7.32807C17.0287 7.05973 16.8033 6.84219 16.5252 6.84219C16.2471 6.84219 16.0216 7.05973 16.0216 7.32807C16.0216 7.59641 16.2471 7.81394 16.5252 7.81394Z"
                fill="white"
              ></path>
              <path
                d="M22.1954 13.3698C22.4735 13.3698 22.699 13.1523 22.699 12.884C22.699 12.6156 22.4735 12.3981 22.1954 12.3981C21.9174 12.3981 21.6919 12.6156 21.6919 12.884C21.6919 13.1523 21.9174 13.3698 22.1954 13.3698Z"
                fill="white"
              ></path>
              <path
                d="M20.1594 20.9326C20.4375 20.9326 20.6629 20.715 20.6629 20.4467C20.6629 20.1783 20.4375 19.9608 20.1594 19.9608C19.8813 19.9608 19.6559 20.1783 19.6559 20.4467C19.6559 20.715 19.8813 20.9326 20.1594 20.9326Z"
                fill="white"
              ></path>
              <path
                d="M17.2256 18.0806C17.5037 18.0806 17.7292 17.863 17.7292 17.5947C17.7292 17.3264 17.5037 17.1088 17.2256 17.1088C16.9475 17.1088 16.7221 17.3264 16.7221 17.5947C16.7221 17.863 16.9475 18.0806 17.2256 18.0806Z"
                fill="white"
              ></path>
              <path
                d="M12.3215 22.9183C12.5996 22.9183 12.8251 22.7008 12.8251 22.4324C12.8251 22.1641 12.5996 21.9465 12.3215 21.9465C12.0434 21.9465 11.818 22.1641 11.818 22.4324C11.818 22.7008 12.0434 22.9183 12.3215 22.9183Z"
                fill="white"
              ></path>
              <path
                d="M10.5483 16.4329C10.8264 16.4329 11.0518 16.2153 11.0518 15.947C11.0518 15.6787 10.8264 15.4611 10.5483 15.4611C10.2702 15.4611 10.0447 15.6787 10.0447 15.947C10.0447 16.2153 10.2702 16.4329 10.5483 16.4329Z"
                fill="white"
              ></path>
              <path
                d="M15.4742 11.6375C15.7523 11.6375 15.9777 11.42 15.9777 11.1517C15.9777 10.8833 15.7523 10.6658 15.4742 10.6658C15.1961 10.6658 14.9706 10.8833 14.9706 11.1517C14.9706 11.42 15.1961 11.6375 15.4742 11.6375Z"
                fill="white"
              ></path>
              <path
                d="M6.5856 17.4047C6.8637 17.4047 7.08915 17.1872 7.08915 16.9188C7.08915 16.6505 6.8637 16.4329 6.5856 16.4329C6.30751 16.4329 6.08206 16.6505 6.08206 16.9188C6.08206 17.1872 6.30751 17.4047 6.5856 17.4047Z"
                stroke="white"
              ></path>
              <path
                d="M8.68727 9.86312C8.96537 9.86312 9.19081 9.64558 9.19081 9.37724C9.19081 9.1089 8.96537 8.89137 8.68727 8.89137C8.40917 8.89137 8.18373 9.1089 8.18373 9.37724C8.18373 9.64558 8.40917 9.86312 8.68727 9.86312Z"
                stroke="white"
              ></path>
              <path
                d="M16.5252 7.81394C16.8033 7.81394 17.0287 7.59641 17.0287 7.32807C17.0287 7.05973 16.8033 6.84219 16.5252 6.84219C16.2471 6.84219 16.0216 7.05973 16.0216 7.32807C16.0216 7.59641 16.2471 7.81394 16.5252 7.81394Z"
                stroke="white"
              ></path>
              <path
                d="M22.1954 13.3698C22.4735 13.3698 22.699 13.1523 22.699 12.884C22.699 12.6156 22.4735 12.3981 22.1954 12.3981C21.9174 12.3981 21.6919 12.6156 21.6919 12.884C21.6919 13.1523 21.9174 13.3698 22.1954 13.3698Z"
                stroke="white"
              ></path>
              <path
                d="M20.1594 20.9326C20.4375 20.9326 20.6629 20.715 20.6629 20.4467C20.6629 20.1783 20.4375 19.9608 20.1594 19.9608C19.8813 19.9608 19.6559 20.1783 19.6559 20.4467C19.6559 20.715 19.8813 20.9326 20.1594 20.9326Z"
                stroke="white"
              ></path>
              <path
                d="M17.2256 18.0806C17.5037 18.0806 17.7292 17.863 17.7292 17.5947C17.7292 17.3264 17.5037 17.1088 17.2256 17.1088C16.9475 17.1088 16.7221 17.3264 16.7221 17.5947C16.7221 17.863 16.9475 18.0806 17.2256 18.0806Z"
                stroke="white"
              ></path>
              <path
                d="M12.3215 22.9183C12.5996 22.9183 12.8251 22.7008 12.8251 22.4324C12.8251 22.1641 12.5996 21.9465 12.3215 21.9465C12.0434 21.9465 11.818 22.1641 11.818 22.4324C11.818 22.7008 12.0434 22.9183 12.3215 22.9183Z"
                stroke="white"
              ></path>
              <path
                d="M10.5483 16.4329C10.8264 16.4329 11.0518 16.2153 11.0518 15.947C11.0518 15.6787 10.8264 15.4611 10.5483 15.4611C10.2702 15.4611 10.0447 15.6787 10.0447 15.947C10.0447 16.2153 10.2702 16.4329 10.5483 16.4329Z"
                stroke="white"
              ></path>
              <path
                d="M15.4742 11.6375C15.7523 11.6375 15.9777 11.42 15.9777 11.1517C15.9777 10.8833 15.7523 10.6658 15.4742 10.6658C15.1961 10.6658 14.9706 10.8833 14.9706 11.1517C14.9706 11.42 15.1961 11.6375 15.4742 11.6375Z"
                stroke="white"
              ></path>
              <path
                d="M43.3594 9.224H37.0934V6.988H52.3294V9.224H46.0634V25.5H43.3594V9.224ZM63.7233 19H54.3633C54.45 22.068 55.8453 23.602 58.5493 23.602C60.0573 23.602 61.4353 23.108 62.6833 22.12L63.4893 23.992C62.9 24.512 62.146 24.928 61.2273 25.24C60.326 25.5347 59.416 25.682 58.4973 25.682C56.4 25.682 54.7533 25.084 53.5573 23.888C52.3613 22.6747 51.7633 21.0193 51.7633 18.922C51.7633 17.5873 52.0233 16.4 52.5433 15.36C53.0806 14.32 53.826 13.514 54.7793 12.942C55.7326 12.37 56.816 12.084 58.0293 12.084C59.7973 12.084 61.184 12.656 62.1893 13.8C63.212 14.944 63.7233 16.53 63.7233 18.558V19ZM58.0813 14.034C57.0933 14.034 56.2873 14.3287 55.6633 14.918C55.0393 15.5073 54.6406 16.348 54.4673 17.44H61.4093C61.3053 16.3307 60.9673 15.49 60.3953 14.918C59.8233 14.3287 59.052 14.034 58.0813 14.034ZM75.6027 25.5L69.3367 19.312V25.5H66.7367V6.364H69.3367V18.324L75.1607 12.422H78.4107L72.1447 18.714L78.9567 25.5H75.6027ZM87.5172 12.084C90.6545 12.084 92.2232 13.8347 92.2232 17.336V25.5H89.5972V17.492C89.5972 16.348 89.3718 15.516 88.9212 14.996C88.4878 14.476 87.7858 14.216 86.8152 14.216C85.7058 14.216 84.8132 14.5627 84.1372 15.256C83.4785 15.9493 83.1492 16.8767 83.1492 18.038V25.5H80.5492V16.088C80.5492 14.7187 80.4798 13.488 80.3412 12.396H82.7852L83.0192 14.658C83.4352 13.826 84.0332 13.1933 84.8132 12.76C85.6105 12.3093 86.5118 12.084 87.5172 12.084ZM95.9613 12.396H98.5613V25.5H95.9613V12.396ZM98.7693 6.676V9.432H95.7273V6.676H98.7693ZM114.5 25.5H111.38L107.506 20.664L103.684 25.5H100.538L105.998 18.766L100.85 12.396H103.996L107.506 16.868L111.042 12.396H114.214L109.066 18.766L114.5 25.5Z"
                fill="black"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="14.3907"
                  y1="32"
                  x2="14.3907"
                  y2="-3.71429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5558FF"></stop>
                  <stop offset="0.991398" stopColor="#00C0FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-blue-500 mb-10">
              You seem to be lost!
            </h1>
            <p>The page you&apos;re looking for isn&apos;t available.</p>
            <p>Try searching again or use the Go Back button below.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <Link href="/">
              <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600">
                <i className="mdi mdi-arrow-left mr-2" />
                Go Back
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 441.85 285.44"
            className="w-full max-w-lg lg:max-w-full mx-auto"
          >
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".st0{fill:#fff}.st1{fill:#b5dfea}.st2{opacity:.55;fill:#90cedd}.st3{fill:#d7f0f9}.st4{fill:#0582c1}.st5{fill:#79c9e8}.st6{fill:#ffbf4d}.st7{fill:#00668e}.st8{fill:#05556d}.st9{fill:#f98d3d}.st10{fill:#ed701b}.st11{fill:none}.st12{fill:#efaa3a}.st13{opacity:.29;fill:#f98d2b}.st14{fill:#49b4d6}.st15{fill:#ff9f50}.st16{fill:#f77e2d}.st17{opacity:.55;fill:url(#SVGID_1_)}",
              }}
            />
            <path className="st0" d="M0 0h500v500H0z" id="BACKGROUND" />
            <g id="OBJECTS">
              <path
                className="st1"
                d="M423.72 280.45c6.95 0 12.62-5.57 12.73-12.52.53-34.64 3.32-85.75-61.92-99.88-52.8-11.44-21.49-105.27-163.69-99.21-102.07 4.35-74.96 90.39-154.32 97.55-52.81 4.77-53.27 71.56-51.24 102.16.44 6.69 6 11.89 12.71 11.89h405.73z"
              />
              <path
                className="st2"
                d="M374.53 168.04c-52.8-11.44-21.49-105.27-163.69-99.21-24.28 1.03-41.24 6.7-54.07 14.81 4.32-.57 8.91-.97 13.8-1.17 142.19-6.06 110.89 87.77 163.69 99.21 64.55 13.98 62.51 64.15 61.94 98.76h27.52c6.95 0 12.62-5.57 12.73-12.52.53-34.64 3.32-85.74-61.92-99.88z"
              />
              <path
                className="st3"
                d="M311.43 64.84L144.49 45.35c-7.13-.83-13.59 4.28-14.43 11.41L117.6 163.52c-.83 7.13 4.28 13.59 11.41 14.43l166.95 19.49c7.13.83 13.59-4.28 14.43-11.41l12.46-106.75c.83-7.15-4.28-13.61-11.42-14.44z"
              />
              <path
                className="st4"
                d="M321.61 89.83l1.23-10.57c.83-7.13-4.28-13.59-11.41-14.43L144.49 45.35c-7.13-.83-13.59 4.28-14.43 11.41l-1.23 10.57 192.78 22.5z"
              />
              <path
                className="st5"
                d="M155.84 131.97L177 94.68a6.857 6.857 0 0 1 6.74-3.42c3.75.44 6.44 3.83 6 7.58l-4.4 37.72.19.02c2.6.3 4.46 2.66 4.16 5.25a4.74 4.74 0 0 1-5.25 4.16l-.19-.02-.8 6.87c-.33 2.81-2.87 4.82-5.67 4.49-2.81-.33-4.82-2.87-4.49-5.67l.8-6.87-15.24-1.78c-2.6-.3-4.47-2.66-4.16-5.26l.4-3.46c.09-.82.34-1.61.75-2.32zm19.4 2.79l2.73-23.39c.02-.16-.2-.23-.28-.09l-12.5 22.06c-.22.39.03.88.47.93l8.89 1.04c.34.04.65-.21.69-.55zM249.23 142.87l21.16-37.29a6.857 6.857 0 0 1 6.74-3.42c3.75.44 6.44 3.83 6 7.58l-4.4 37.72.19.02c2.6.3 4.46 2.66 4.16 5.25a4.74 4.74 0 0 1-5.25 4.16l-.19-.02-.8 6.87c-.33 2.81-2.87 4.82-5.67 4.49-2.81-.33-4.82-2.87-4.49-5.67l.8-6.87-15.24-1.78c-2.6-.3-4.47-2.66-4.16-5.26l.4-3.46c.09-.82.35-1.6.75-2.32zm19.41 2.79l2.73-23.39c.02-.16-.2-.23-.28-.09l-12.5 22.06c-.22.39.03.88.47.93l8.89 1.04c.34.04.65-.21.69-.55zM207.25 110.04c1.23-10.54 7.48-15.91 17.65-14.73 10.16 1.19 15.01 7.86 13.78 18.39l-4 34.25c-1.23 10.54-7.48 15.91-17.65 14.73-10.16-1.19-15.01-7.86-13.78-18.39l4-34.25zm6.27 36.11c-.55 4.7 1.31 6.73 4.61 7.12 3.29.38 5.57-1.16 6.12-5.87l4.15-35.57c.55-4.7-1.31-6.73-4.61-7.12-3.29-.38-5.57 1.16-6.12 5.87l-4.15 35.57z"
              />
              <path
                className="st0"
                d="M148.51 60.1a3.498 3.498 0 1 1-6.95-.81 3.498 3.498 0 0 1 3.88-3.07 3.51 3.51 0 0 1 3.07 3.88z"
              />
              <path
                className="st5"
                d="M165.25 62.06a3.498 3.498 0 1 1-6.95-.81 3.498 3.498 0 0 1 3.88-3.07 3.49 3.49 0 0 1 3.07 3.88z"
              />
              <path
                className="st6"
                d="M182.61 64.08a3.498 3.498 0 1 1-6.95-.81 3.498 3.498 0 0 1 3.88-3.07c1.92.23 3.3 1.97 3.07 3.88z"
              />
              <g>
                <path
                  className="st7"
                  d="M115.45 185.68s-2.26 10-1.88 20.22c.34 9.15-.75 69.31-.75 69.31h7.35s10.46-47.12 10.85-50.84c.39-3.72 5.65-40.93 5.65-40.93l-21.22 2.24z"
                />
                <path
                  className="st4"
                  d="M120.34 182.94s1.69 12.85 4.57 21.99c2.88 9.13 17.01 70.29 17.01 70.29h7.35s-1.35-47.12-1.86-50.84c-.51-3.72-4.23-40.93-4.23-40.93l-22.84-.51z"
                />
                <path
                  className="st4"
                  d="M142.51 275.2v5.13h13.99c.79 0 1.11-1.03.44-1.47-2.05-1.36-5.32-3.24-8.37-3.66h-6.06zM113.2 275.2v5.13h13.99c.79 0 1.11-1.03.44-1.47-2.05-1.36-5.32-3.24-8.37-3.66h-6.06z"
                />
                <path
                  className="st7"
                  d="M138.43 123.15s4.81-7.31-.71-8.02c-4.24-.55-5.99.72-5.99.72s-4.88-.54-7.56 1.78c-1.83 1.59-8.55 13.9 2.32 18.35s8.55-6.95 8.55-6.95l3.39-5.88z"
                />
                <path
                  className="st8"
                  d="M137.72 115.13c-4.24-.55-5.99.72-5.99.72s-4.88-.54-7.56 1.78c-1.83 1.59-8.55 13.9 2.32 18.35 5.11 2.09 7.3.68 8.2-1.4-10.31 2.9-11.43-9.53-9.73-13.06 1.73-3.59 5.87-1.94 5.87-1.94 1.62-4.08 6.91-3.64 9.09-3.32-.39-.57-1.08-.99-2.2-1.13z"
                />
                <path
                  className="st9"
                  d="M131.66 126.71s-1.43-1.43-2.49 0c-1.07 1.43-.36 4.63 1.43 4.81 0 0-.53 4.63-4.1 4.45v3.74h8.37v-2.85s5.17-2.14 4.99-6.41c-.18-4.28-1.43-7.31-1.43-7.31s-2.85 3.21-6.77 3.57z"
                />
                <path
                  className="st10"
                  d="M132.95 138.06c.83.35.68.87.72 1.65h1.2v-2.85s-2.03.64-5-1.05c0 .01 1.73 1.69 3.08 2.25z"
                />
                <path
                  className="st9"
                  d="M134.66 119.89s-4.34-1.73-4.85-.43c-.33.85.51 1.58 1.67 2.32l-1.02.17c-.23.04-.31.33-.13.47.28.23 1.07.38 2.71.44l1.62-2.97z"
                />
                <path
                  className="st11"
                  d="M108.84 166.97l5.82 18.74-.11-.95.11.95 1.96-27.3z"
                />
                <path
                  className="st6"
                  d="M165.66 130.76c-8.28-6.13-30.88-11.04-30.88-11.04l-1.86 3.39s20.52 7.95 19.17 9.14c-.8.7-10.82 5.29-14.22 6.84-.73.33-1.52.49-2.33.48l-10.39-.06s-7.5-.89-13.39 5.88c-5.27 6.07-14.23 20.12-14.23 20.12l15.1 22.2 1.67 2.45.01-.03-.01.21s.54.06 1.49.15c4.85.45 20.41 1.68 28.64-.07l.23-.05-.39-36.42c13.14-10.4 19.42-18.44 21.66-20.96.56-.67.45-1.69-.27-2.23zM115 180.43l-1.47-3.22-4.69-10.25 7.78-8.72-1.4 19.13-.22 3.06z"
                />
                <path
                  className="st12"
                  d="M113.53 177.21l1.47 3.22-.71 9.71-.02.03-1.67-2.45z"
                />
                <path
                  className="st13"
                  d="M140.72 152.65c-1.4 1.02-1.04 10.02-1.39 15.65-.58 9.43-1.14 17.59-.73 22.85 2.13-.14 4.11-.37 5.79-.73l.23-.05-.39-36.42c13.14-10.4 19.42-18.44 21.66-20.96.59-.67.48-1.69-.24-2.23.01 0-10.38 11.33-24.93 21.89z"
                />
                <path
                  className="st7"
                  d="M147.4 224.38c-.37-2.68-2.41-22.8-3.51-33.8l-5.28.58s7.7 63.33 8.21 84.06h2.44c0-.01-1.35-47.12-1.86-50.84z"
                />
                <g>
                  <path
                    className="st4"
                    d="M113.54 127.75l-1.59-2.85c.8-1.5 1.25-3.22 1.25-5.04 0-5.95-4.83-10.78-10.78-10.78s-10.78 4.83-10.78 10.78c0 5.95 4.83 10.78 10.78 10.78 3 0 5.71-1.23 7.66-3.2l3.46.31z"
                  />
                  <path
                    className="st0"
                    d="M96.81 118.88h.42v1.5c0 .46.14.66.46.66.25 0 .43-.13.66-.41v-1.75h.41v2.46h-.34l-.04-.38h-.02c-.23.27-.47.45-.81.45-.52 0-.75-.33-.75-.96v-1.57zM100.52 121.55v.83h-.42v-3.5h.34l.03.28h.02c.22-.19.5-.34.78-.34.63 0 .97.49.97 1.25 0 .83-.5 1.33-1.06 1.33-.23 0-.46-.11-.68-.28l.02.43zm.6-.5c.4 0 .7-.37.7-.98 0-.54-.18-.91-.65-.91-.21 0-.42.12-.66.33v1.29c.23.2.45.27.61.27zM103.35 120.78c.21.17.43.29.72.29.32 0 .49-.17.49-.38 0-.25-.29-.36-.56-.47-.35-.13-.73-.29-.73-.71 0-.39.31-.7.84-.7.31 0 .58.13.76.28l-.2.26c-.17-.13-.34-.22-.56-.22-.31 0-.45.17-.45.35 0 .23.27.32.55.43.35.13.75.28.75.74 0 .4-.32.73-.9.73-.35 0-.68-.15-.92-.34l.21-.26zM106.26 120.76c.16 0 .3.13.3.32 0 .18-.14.31-.3.31-.17 0-.3-.13-.3-.31 0-.19.14-.32.3-.32zM108.03 120.76c.16 0 .3.13.3.32 0 .18-.14.31-.3.31-.17 0-.3-.13-.3-.31-.01-.19.13-.32.3-.32z"
                  />
                </g>
              </g>
              <g>
                <path
                  className="st5"
                  d="M72.21 257.39s-2.26-2.12-.74-10.14c1.52-8.02 5.38-15.73 3.48-24.43-1.89-8.71-16.73-30.65-16.77-32.11-.05-1.46-4.58 25.53 3.09 36.17 7.67 10.63 8.59 14.32 8.25 19.92-.34 5.59.08 10.1.92 11.4l1.77-.81z"
                />
                <path
                  className="st14"
                  d="M70.8 241.25c-.89 3.58-1.43 12.55-.01 14.7.13.2.32.09.56-.28-.43-1.48-.72-4.08.1-8.42 1.52-8.02 5.38-15.73 3.48-24.43-1.89-8.71-16.73-30.65-16.77-32.11 0 0 2.24 18.29 9.76 30.87 5.4 9 3.77 16.09 2.88 19.67z"
                />
                <path
                  className="st5"
                  d="M74.91 256.83s-4.36-10.88 3.03-20.3c7.39-9.42 19.2-21.52 19.43-26.31 0 0 3.04 22.75-6.58 29.19-9.61 6.44-16.35 7.47-14.69 17.38l-1.19.04z"
                />
                <path
                  className="st14"
                  d="M85.29 234.84c-10.72 7.8-11.59 16.79-9.93 20.96.13.32.37.52.7.63-1.44-9.56 5.25-10.65 14.74-17.01 9.61-6.44 6.58-29.19 6.58-29.19S96 227.04 85.29 234.84z"
                />
                <g>
                  <path
                    className="st5"
                    d="M67.74 257.07s1.4-5.76.65-11.98c-.74-6.22-7.24-9.72-13.31-16.29-3.12-3.38-4.05-21.25-2.11-22.91 0 0-10.72 12.99-9.06 22.5 1.65 9.51 19.14 15.69 20.76 20.29 1.62 4.6 1.48 8.45 1.48 8.45l1.59-.06z"
                  />
                  <path
                    className="st14"
                    d="M49.35 211c-3.54 9.59.09 21.21 11.86 28.43 8.66 5.31 5.9 16.36 5.9 16.36l1.42-4.36c.13-1.88.14-4.08-.13-6.34-.74-6.22-7.24-9.72-13.31-16.29-3.01-3.26-3.98-20-2.31-22.67-.49.62-1.88 2.42-3.43 4.87zM52.78 206.13l.19-.24c-.06.06-.13.14-.19.24z"
                  />
                </g>
                <g>
                  <path
                    className="st5"
                    d="M77.15 256.35s2.51-9.32 8.73-10.58c6.21-1.25 13.35-10.44 13.73-12.24 0 .01-1.05 17.33-22.46 22.82z"
                  />
                  <path
                    className="st14"
                    d="M85.52 248.86c-3.81 1.9-5.39 4.46-5.95 6.79 19.06-6.13 20.04-22.11 20.04-22.11-.08.36-.42 1.01-.97 1.82-1.87 3.28-6.39 10.14-13.12 13.5z"
                  />
                </g>
                <path
                  className="st6"
                  d="M90.6 252.92H58.1l3.86 24.27c.29 1.84 1.88 3.2 3.74 3.2h17.29c1.86 0 3.45-1.35 3.74-3.2l3.87-24.27z"
                />
                <path
                  className="st15"
                  d="M89.96 256.94l.64-4.02H58.1l.64 4.02z"
                />
                <path
                  className="st15"
                  d="M82.73 252.92l-3.86 24.27a3.792 3.792 0 0 1-3.74 3.2H83c1.86 0 3.45-1.35 3.74-3.2l3.86-24.27h-7.87z"
                />
              </g>
              <g>
                <path className="st6" d="M167.86 209.64h146.86v29.86H167.86z" />
                <path className="st13" d="M167.86 209.64h146.86v7.25H167.86z" />
                <path
                  className="st16"
                  d="M180.63 209.64h13.41l-3.6 7.25h-13.41zM210.83 209.64h13.41l-3.6 7.25h-13.4zM241.03 209.64h13.4l-3.59 7.25h-13.4zM271.23 209.64h13.4l-3.6 7.25h-13.39zM314.73 209.64v.2l-3.5 7.05h-13.39l3.59-7.25z"
                />
                <path className="st5" d="M186.14 239.5h10.35v40.83h-10.35z" />
                <path className="st14" d="M194.15 239.5h2.35v40.83h-2.35z" />
                <path className="st5" d="M286.9 239.5h10.35v40.83H286.9z" />
                <path
                  className="st14"
                  d="M294.19 239.5h3.06v40.83h-3.06zM186.14 239.47h10.35v5.14h-10.35z"
                />
                <path className="st14" d="M286.9 239.47h10.35v5.14H286.9z" />
                <path className="st5" d="M186.14 204.97h10.35v4.64h-10.35z" />
                <path className="st14" d="M194.15 204.97h2.35v4.64h-2.35z" />
                <path className="st5" d="M286.9 204.97h10.35v4.64H286.9z" />
                <path
                  className="st14"
                  d="M294.19 204.97h3.06v4.64h-3.06zM186.14 209.03h10.35v.58h-10.35z"
                />
                <path className="st14" d="M286.9 209.03h10.35v.58H286.9z" />
                <path
                  className="st4"
                  d="M194.04 209.64l-14.81 29.86h-11.37v-4.12l12.77-25.74zM210.83 209.64l-14.81 29.86h13.4l14.82-29.86zM254.43 209.64l-14.81 29.86h-13.4l14.81-29.86zM284.63 209.64l-14.81 29.86h-13.4l14.81-29.86zM301.43 209.64l-14.81 29.86h13.4l14.71-29.66z"
                />
                <path
                  className="st7"
                  d="M194.04 209.64l-3.6 7.25h-13.41l3.6-7.25zM224.24 209.64l-3.6 7.25h-13.4l3.59-7.25zM254.43 209.64l-3.59 7.25h-13.4l3.59-7.25zM284.63 209.64l-3.6 7.25h-13.39l3.59-7.25zM314.73 209.84l-3.5 7.05h-13.39l3.59-7.25z"
                />
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="242.075"
                  y1="248.234"
                  x2="242.075"
                  y2="224.179"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
                <path className="st17" d="M171.96 222.56H312.2v14.94H171.96z" />
                <ellipse
                  transform="rotate(-9.249 191.082 198.565)"
                  className="st6"
                  cx="191.05"
                  cy="198.49"
                  rx="9.23"
                  ry="9.23"
                />
                <path
                  className="st4"
                  d="M195.23 198.49c0-2.31-1.87-4.18-4.18-4.18-2.31 0-4.18 1.87-4.18 4.18 0 2.31 1.87 4.18 4.18 4.18 2.31.01 4.18-1.87 4.18-4.18z"
                />
                <ellipse
                  transform="rotate(-9.249 292.07 198.575)"
                  className="st6"
                  cx="292.01"
                  cy="198.49"
                  rx="9.23"
                  ry="9.23"
                />
                <path
                  className="st4"
                  d="M296.19 198.49c0-2.31-1.87-4.18-4.18-4.18-2.31 0-4.18 1.87-4.18 4.18 0 2.31 1.87 4.18 4.18 4.18 2.31.01 4.18-1.87 4.18-4.18z"
                />
              </g>
              <g>
                <path
                  className="st6"
                  d="M370.37 277.17H323.6l7.15-17.34v-.01l2.88-7 .79-1.92 1.29-3.12.26-.64 2.88-7 .53-1.27 5.1-12.38c.92-2.23 4.08-2.23 5 0l5.1 12.38.53 1.27 2.88 7 .26.64 1.29 3.12.79 1.92 2.88 7v.01l7.16 17.34z"
                />
                <path
                  className="st13"
                  d="M326.66 269.73l-3.07 7.43h46.78l-3.06-7.43z"
                />
                <path className="st5" d="M319.85 272.72h53.57v7.57h-53.57z" />
                <path className="st14" d="M361.85 272.72h11.57v7.57h-11.57z" />
                <path
                  className="st13"
                  d="M368.53 272.72h-6.62l-5.31-12.89v-.01l-2.88-7-.79-1.92-1.29-3.12-.26-.64-2.88-7-.53-1.27-4.29-10.42.8-1.96c.92-2.23 4.08-2.23 5 0l5.1 12.38.53 1.27 2.88 7 .26.64 1.29 3.12.79 1.92 2.88 7v.01l5.32 12.89z"
                />
                <path
                  className="st4"
                  d="M357.98 247.14h-22.01l2.88-7h16.26zM363.21 259.81v.01h-32.46v-.01l2.87-7h26.71z"
                />
                <path
                  className="st7"
                  d="M357.98 247.14h-6.61l-2.88-7h6.62zM363.21 259.81v.01h-6.62v-.01l-2.87-7h6.61z"
                />
              </g>
              <g>
                <path
                  className="st3"
                  d="M72.22 107.1c3.49 0 6.53-2.54 7.01-6 .08-.62.13-1.25.13-1.9 0-7.71-6.25-13.96-13.96-13.96-.32 0-.63.01-.94.03-.64-7.6-7.01-13.57-14.77-13.57-8.19 0-14.83 6.64-14.83 14.83 0 .36.02.72.04 1.08-2.32-1.3-5.03-1.99-7.91-1.86-7.45.34-13.57 6.3-14.1 13.74 0 .06-.01.12-.01.18-.24 4.04 3.03 7.44 7.08 7.44h52.26zM405.35 118.06c11.04 0 11.65-16.61.62-17.15-.3-.01-.6-.02-.91-.02-1.97 0-3.86.31-5.64.88-1.48-8.99-9.28-15.85-18.69-15.85-9.62 0-17.55 7.17-18.77 16.45a17.45 17.45 0 0 0-7.54-1.71c-1.51 0-2.97.19-4.37.55-9.65 2.49-7.63 16.85 2.34 16.85h52.96zM272.8 36.21c11.03 0 11.65-16.61.62-17.14-.3-.01-.6-.02-.91-.02-1.97 0-3.86.31-5.64.88-1.48-8.99-9.28-15.85-18.68-15.85-9.61 0-17.55 7.17-18.77 16.45a17.501 17.501 0 0 0-11.9-1.16c-9.65 2.48-7.62 16.84 2.34 16.84h52.94z"
                />
                <circle className="st6" cx="97.11" cy="40.45" r="26.45" />
                <path
                  className="st15"
                  d="M97.32 14c7.19 4.73 11.95 12.87 11.95 22.12 0 14.61-11.84 26.45-26.45 26.45-.07 0-.14 0-.22-.01 4.17 2.74 9.15 4.34 14.51 4.34 14.61 0 26.45-11.84 26.45-26.45 0-14.53-11.73-26.33-26.24-26.45z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform" />
      <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform" />
    </section>
  );
}
Page404.Layout = LayoutFullView;