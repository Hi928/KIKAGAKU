import Image from "next/image";

const Future = () => {
  return (
    <div className="bg-[url('/images/bg-future.png')] bg-cover bg-center mt-24 h-96">
      <h3 className="py-4 px-4 text-2xl text-gray-700 text-center">3年後にやりたいこと
        <span className="text-green-700 ml-4 text-lg align-middle">FUTURE</span>
      </h3>
      <ul className="flex flex-col items-center justify-center sm:gap-12 sm:flex-row">
        <li className="my-2 py-4 px-4 sm:max-w-sm">
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum incidunt accusamus ratione cumque tenetur quaerat laboriosam, optio deleniti fuga repellendus quidem, totam culpa asperiores rem cupiditate similique quod veritatis!</p>
        </li>
        <li className="flex justify-center items-center min-w-full sm:min-w-min">
          <Image
            priority
            src="/images/future.png"
            height={480}
            width={251}
            alt=""
            className=""
          />
        </li>
      </ul>
    </div >
  );
}

export default Future;