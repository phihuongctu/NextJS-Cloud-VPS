import Image from "next/image";
import SliderLocation from "../Slider/sliderLocation";

export default function Location() {    
      return(
    <div className="text-center text-white w-full max-w-screen-lg m-auto h-auto relative">
        <h2 className="section-title headtitle" >Develop locally, deploy globally®</h2>
        <p className="mb-4 text-gray-400">17 locations worldwide</p>
        <div className="w-full h-52 sm:h-96 lg:h-500 relative" >
            <Image src="/img/map.svg" layout="fill" alt="map" />
        </div>
        <div className="relative">
            <div className="flex w-screen max-w-full lg:max-w-screen-lg flex-row h-40 px-0" >
                <SliderLocation/>
            </div>
        </div>

    </div>
      )
}