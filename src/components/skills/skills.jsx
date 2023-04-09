import Image from "next/image";

const Skills = () => {
  const listItems = [
    {
      id: 1,
      images: [{ src: "/images/skill.png", height: "535", width: "372" }],
      content: "",
    },
    {
      id: 2,
      images: [],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsum incidunt accusamus ratione cumque tenetur quaerat laboriosam, optio deleniti fuga repellendus quidem, totam culpa asperiores rem cupiditate similique quod veritatis!",
    },
  ];
  return (
    <div className="bg-[url('/images/bg-skills.png')] bg-cover bg-center mt-24">
      <h3 className="py-4 px-4 text-2xl text-gray-700 text-center">
        スキル
        <span className="text-green-700 ml-4 text-lg align-middle">SKILLS</span>
      </h3>
      <ul className="flex flex-col items-start justify-center sm:gap-12 sm:flex-row">
        {listItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col justify-center items-center min-w-full sm:min-w-min"
          >
            {item.images
              ? item.images.map((image) => (
                  <Image
                    key={image.src}
                    priority
                    src={image.src}
                    height={image.height}
                    width={image.width}
                    alt=""
                  />
                ))
              : false}
            {item.content ? (
              <p className="my-2 py-4 px-4 sm:max-w-sm">{item.content}</p>
            ) : (
              false
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
