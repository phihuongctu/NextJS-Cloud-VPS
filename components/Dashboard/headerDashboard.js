import Image from "next/image";
export default function HeaderDashboard(props) {
    return(
        <div className={` bg-dashboard h-auto m-auto p-8 pb-4 text-white text-center ${props.title==="Trung tâm phần thưởng"?"pt-0":""}`}>
        <h2 className={`lg:text-4xl text-3xl  font-semibold mb-5 ${props.title===""?"hidden":""}`}>{props.title}</h2>
        <span className={`text-base mb-4 ${props.minititle===""?"hidden":""}`}>{props.minititle}</span>        
        <div className="mt-5 flex flex-nowrap h-14  bg-white-12 border-solid border-search border bg-opacity-30 rounded-lg p-4">
          <Image src="/img/search.svg" width="20" height="56" alt="icon search" />
          <input
            type="text"
            placeholder="Search..."            
            className="w-full ml-4 outline-none bg-white bg-opacity-0 placeholder-white"
          ></input>
        </div>
      </div>
    );
}
    