import Image from "next/image";

const Values = () => {
  return (
    <div className="bg-[url('/images/bg-about.png')] bg-cover bg-center">
      <h3 className="mt-8 py-4 px-4 text-2xl text-gray-700 text-center">価値観
        <span className="text-green-700 ml-4 text-lg align-middle">VALUES</span>
      </h3>
      <ul className="flex flex-col items-center justify-center gap-12 sm:flex-row">
        <li className="flex flex-col items-center sm:max-w-sm">
          <Image
            priority
            src="/images/value1.png"
            height={200}
            width={200}
            alt=""
          />
          <h4 className="my-2 py-4 px-4 text-2xl text-teal-700">価値観01</h4>
          <p className="my-2 py-4 px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?</p>
        </li>
        <li className="flex flex-col items-center sm:max-w-sm">
          <Image
            priority
            src="/images/value2.png"
            height={200}
            width={200}
            alt=""
          />
          <h4 className="my-2 py-4 px-4 text-2xl text-teal-700">価値観02</h4>
          <p className="my-2 py-4 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum incidunt accusamus ratione cumque tenetur quaerat laboriosam, optio deleniti fuga repellendus quidem, totam culpa asperiores rem cupiditate similique quod veritatis!</p>
        </li>
        <li className="flex flex-col items-center sm:max-w-sm">
          <Image
            priority
            src="/images/value3.png"
            height={200}
            width={200}
            alt=""
            className=""
          />
          <h4 className="py-4 px-4 text-center text-2xl text-teal-700">価値観03</h4>
          <p className="my-2 py-4 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi necessitatibus iure? Corrupti pariatur eos maxime voluptate, exercitationem perferendis. Corrupti saepe aliquam corporis ab vitae doloremque tempora voluptatibus beatae laborum.</p>
        </li>
      </ul>
    </div >
  );
}

export default Values;