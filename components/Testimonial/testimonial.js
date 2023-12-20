import Image from "next/image";
export default function testimonial() {
  return (
    <div>
      <section className="p-6">
        <div className="container max-w-xl mx-auto">
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-coolGray-900 dark:text-coolGray-100">
            <Image
              src="https://source.unsplash.com/random/100x100"
              alt=""
              className="w-20 h-20 rounded-full object-"
            />
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
              &quot;Et, dignissimos obcaecati. Recusandae praesentium doloribus
              vitae? Rem unde atque mollitia!&quot;
            </blockquote>
            <div className="text-center dark:text-coolGray-400">
              <p>Leroy Jenkins</p>
              <p>CEO of Company Co.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
