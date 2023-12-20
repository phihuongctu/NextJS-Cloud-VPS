import Image from "next/image";
import SliderReview from "../Slider/sliderReview";
export default function Review(){
  return(
    
    <div className="text-center text-white max-w-screen-lg m-auto h-auto">
    <h2 className="section-title headtitle" >Testimonials</h2>
    <p className="text-gray-400 pb-4">5000+ happy clients all around the world.</p>
    <div className="py-8 w-screen max-w-4/5 m-auto flex flex-nowrap">
        <SliderReview/>
    </div>
  </div>

  )}