import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[url('/images/bg-about.png')] bg-cover bg-center">
      <h3 className="mt-8 py-4 px-4 text-2xl text-gray-700 text-center">私について
        <span className="text-green-700 ml-4 text-lg align-middle">ABOUT</span>
      </h3>
      <ul className="sm:flex flex-row justify-center items-center">
        <li className="flex flex-col items-center mt-8">
          <Image
            priority
            src="/images/about-1.png"
            height={184}
            width={157}
            alt=""
          />
          <h4 className="my-2 py-4 px-4 text-2xl text-teal-700 text-center">趣味</h4>
          <p className="my-2 py-4 px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?</p>
        </li>
        <li className="flex flex-col items-center mt-8">
          <Image
            priority
            src="/images/about-2.png"
            height={206}
            width={158}
            alt=""
          />
          <h4 className="my-2 py-4 px-4 text-2xl text-teal-700 text-center">好きな食べ物</h4>
          <p className="my-2 py-4 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum incidunt accusamus ratione cumque tenetur quaerat laboriosam, optio deleniti fuga repellendus quidem, totam culpa asperiores rem cupiditate similique quod veritatis!</p>
        </li>
        <li className="flex flex-col items-center mt-8">
          <Image
            priority
            src="/images/about-3.png"
            height={245}
            width={149}
            alt=""
            className="mt-4"
          />
          <h4 className="my-2 py-4 px-4 text-2xl text-teal-700 text-center">性格</h4>
          <p className="my-2 py-4 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi necessitatibus iure? Corrupti pariatur eos maxime voluptate, exercitationem perferendis. Corrupti saepe aliquam corporis ab vitae doloremque tempora voluptatibus beatae laborum.</p>
        </li>
      </ul>
    </div >
  );
}

export default About;