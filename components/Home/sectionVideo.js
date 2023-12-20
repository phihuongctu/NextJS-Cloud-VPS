import Image from "next/image";
export default function Video(){
  return(
    <div className="text-center text-white max-w-screen-lg m-auto h-auto relative">
    <Image
      src="/img/bg_video.png"
      layout="fill"
      objectFit="cover"
      quality={100}
      alt="video"
    />
    <div className="h-auto">
      <div className="wave relative">
        <Image
          src="/img/wave1.svg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="after video"
        />
      </div>
      <div className="w-full relative">
        <h2 className="section-title headtitle" >That will boost your productivity</h2>
        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat odio non a nibh nunc</p>
        <div className="h-80 m-auto my-4 w-11/12 md:h-96 lg:w-3/5 bg-white bg-opacity-30 rounded-lg"></div>
      </div>

      <div className="wave relative">
        <Image
          src="/img/wave2.svg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="before video"
        />
      </div>

    </div>
  </div>
  )}