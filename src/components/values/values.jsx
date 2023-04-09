import Image from "next/image";

const Values = () => {
  const listItems = [
    {
      id: 1,
      images: [{ src: "/images/value1.png", height: "200", width: "200" }],
      title: "価値観01",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
    },
    {
      id: 2,
      images: [{ src: "/images/value2.png", height: "200", width: "200" }],
      title: "価値観02",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
    },
    {
      id: 3,
      images: [{ src: "/images/value3.png", height: "200", width: "200" }],
      title: "価値観03",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus labore error voluptatum, cupiditate commodi nulla assumenda magni optio aliquid consequatur iste nihil voluptas at sequi, recusandae temporibus. Ab, qui?",
    },
  ];
  return (
    <div className="bg-[url('/images/bg-about.png')] bg-cover bg-center">
      <h3 className="mt-8 py-4 px-4 text-2xl text-gray-700 text-center">
        価値観
        <span className="text-green-700 ml-4 text-lg align-middle">VALUES</span>
      </h3>
      <ul className="flex flex-col items-center justify-center gap-12 sm:flex-row">
          {listItems.map((item)=>(
            <li key={item.id} className="flex flex-col items-center sm:max-w-sm">
              {item.images.map((image)=>(
                <Image
                key={image.src}
                priority
                src={image.src}
                height={image.height}
                width={image.width}
                alt=""
              />
              ))
              }
              <h4 className="my-2 py-4 px-4 text-2xl text-teal-700">{item.title}</h4>
              <p className="my-2 py-4 px-4">
                {item.content}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Values;
