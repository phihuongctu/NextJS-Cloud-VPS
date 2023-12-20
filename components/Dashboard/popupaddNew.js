import Image from "next/image";
import Link from "next/link";
export default function PopupAddNew(props) {
    return(
        <Link href={`${props.link}`}>
            <div className="bg-blue-600 w-12 h-12 rounded-full fixed flex bottom-24 justify-center items-center">
            <Image src="/img/plus.svg" width="30" height="30" alt="add new"/>            
            </div>           
        </Link> 
    );
}
    