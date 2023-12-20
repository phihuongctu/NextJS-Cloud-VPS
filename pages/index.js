import Image from "next/image";
import Banner from "/components/Home/homeBanner";
import Product from "/components/Home/boxProduct";
import Deploy from "/components/Home/sectionDeploy";
import Usage from "/components/Home/sectionUsage";
import Partners from "/components/Home/sectionPartners";
import Video from "/components/Home/sectionVideo";
import Service from "/components/Home/sectionourService";
import Team from "/components/Home/sectionTeam";
import Review from "/components/Home/sectionReview";
import Letter from "/components/Home/sectionnewLetter";
import Help from "/components/Home/sectionHelp";
import Location from "../components/Home/sectionLocation";
import Link from "next/link";
export default function Landing() {
  return (
    <main className="flex-1">
      <div id="main " className="bg-body">
        <Banner></Banner>
        <div className="content max-w-11/12 lg:max-w-screen-lg m-auto">
          <Product></Product>
          <Location></Location>
          <Deploy></Deploy>
          <Usage></Usage>
          <Video></Video>
          <Service></Service>
          <Team></Team>
          <Partners></Partners>
          <Review></Review>
          <Letter></Letter>
          <Help></Help>
        </div>
      </div>
    </main>
  );
}
