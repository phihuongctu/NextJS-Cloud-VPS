import Link from "next/link";
import Image from "next/image";
import LayoutDashboard from "/components/Layout/layoutDashboard";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default function AllPosts({ posts }) {
  return (
    <ul>
      {posts.map((post, index) => (
        <li
          key={index}
          className="py-2 pl-4 border-b flex items-center dark:border-opacity-50 text-sm lg:text-base"
        >
          <Link href={`/posts/${post.id}`}>
            <div className="w-10 min-w-max h-10 rounded-full overflow-hidden">
              <Image src="/img/cpu.svg" width="40" height="40" alt="document" />
            </div>
          </Link>
          <div className="w-full ml-4">
            <Link href={`/posts/${post.id}`}>
              <h3 className="mb-1">{post.title}</h3>
            </Link>
            {/* <div className="flex flex-row flex-wrap justify-between">
            <Link href="/docs/creating-snapshots-with-packer"><span className=" opacity-50 justify-start">{item.time}</span></Link>
            <div className="justify-start flex flex-wrap">
                {item.listtag.map(function (item, index) {
                    return (
                        <a key={index} className="mr-1 mb-1 px-2 py-1 bg-blue-200 bg-opacity-20 text-blue-600 dark:bg-opacity-20 rounded-lg  whitespace-nowrap">{item.tag}</a>
                    )
                })}
            </div>
        </div> */}
          </div>
        </li>
      ))}
    </ul>
  );
}
AllPosts.Layout = LayoutDashboard;
