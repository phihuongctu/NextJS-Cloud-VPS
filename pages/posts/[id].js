import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SliderPost from "../../components/Slider/sliderPost";
import LayoutDashboard from "/components/Layout/layoutDashboard";
// get all path
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
};
// get post detail
export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const resPost = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  const resAllPost = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await resPost.json();
  return {
    props: {
      posts: data,
    },
  };
};

export default function PostDetail({ posts }) {

  const dataTag = [
    {
      tag: "Closed",
    },
    {
      tag: "Answered",
    },
    {
      tag: "Processing",
    },
    {
      tag: "Pending",
    },
  ];
  return (
    <article>
      <div className="thumbnail">
        <Image
          src="/img/image-place-holder.jpg"
          width="1024"
          height="500"
          alt="thumbnail"
        />
      </div>
      <header className="flex flex-col before:bg-white before:h-6 before:relative relative -top-6 before:rounded-t-3xl">
        <h3 className="mb-4 text-left text-2xl font-bold pl-4 ">{posts.title}</h3>
        <time className="text-gray-600 mb-4 px-4 text-sm">7 months ago</time>
        <div className="flex pb-2 flex-wrap px-4">
          {
            dataTag.map(function (item, index) {             
              return (
                <Link href="#" key={index}>
                  <div className="bg-blue-200 bg-opacity-30 p-1 px-2 mr-2 mb-2 rounded-lg text-blue-500 text-clampSx cursor-pointer">                   
                    <span className="whitespace-nowrap">{item.tag}</span>
                  </div>
                </Link>
              );
            })}
        </div>
        <description className="px-4 text-base">
          {" "}
          description et iusto sed quo iure voluptatem occaecati omnis eligendi
          aut ad voluptatem doloribus vel accusantium quis pariatur molestiae
          porro eius odio et labore et velit aut
        </description>
      </header>
      <section className="px-4">
        <p className="text-gray-800 text-base">{posts.body}</p>
      </section>
      <div className="px-4">
        <h4 className="text-clampLg font-bold py-4">Next guide</h4>
        <SliderPost/>
      </div>

      <ul>
        {/* {posts.map((post, index) => (
          <li
            key={index}
            className="py-2 pl-4 border-b flex items-center dark:border-opacity-50 text-sm lg:text-base"
          >
            <div className="w-10 min-w-max h-10 rounded-full overflow-hidden">
              <Image src="/img/cpu.svg" width="40" height="40" alt="document" />
            </div>

            <div className="w-full ml-4">
              <h3 className="mb-1">{post.title}</h3>

              <div className="flex flex-row flex-wrap justify-between">
            <Link href="/docs/creating-snapshots-with-packer"><span className=" opacity-50 justify-start">{item.time}</span></Link>
            <div className="justify-start flex flex-wrap">
                {item.listtag.map(function (item, index) {
                    return (
                        <a key={index} className="mr-1 mb-1 px-2 py-1 bg-blue-200 bg-opacity-20 text-blue-600 dark:bg-opacity-20 rounded-lg  whitespace-nowrap">{item.tag}</a>
                    )
                })}
            </div>
        </div>
            </div>
          </li>
        ))} */}
      </ul>
    </article>
  );
}
PostDetail.Layout = LayoutDashboard;
