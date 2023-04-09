import Image from "next/image";

const About = () => {
  const listItems = [
    {
      id: 1,
      images: [{ src: "/images/about-1.png", height: "184", width: "157" }],
      title: "趣味",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
    },
    {
      id: 2,
      images: [{ src: "/images/about-2.png", height: "206", width: "158" }],
      title: "好きな食べ物",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
    },
    {
      id: 3,
      images: [{ src: "/images/about-3.png", height: "245", width: "149" }],
      title: "性格",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
    },
  ];
  return (
    <div className="bg-[url('/images/bg-about.png')] bg-cover bg-center">
      <h3 className="mt-8 py-4 px-4 text-2xl text-gray-700 text-center">
        私について
        <span className="text-green-700 ml-4 text-lg align-middle">ABOUT</span>
      </h3>
      <ul className="sm:flex flex-row justify-center items-center">
        {listItems.map((item) => (
          <li key={item.id} className="flex flex-col items-center mt-8">
            {item.images.map((image) => (
              <Image
                key={image.src}
                priority
                src={image.src}
                height={image.height}
                width={image.width}
                alt=""
              />
            ))}
            <h4 className="my-2 py-4 px-4 text-2xl text-teal-700 text-center">
              {item.title}
            </h4>
            <p className="my-2 py-4 px-4">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;