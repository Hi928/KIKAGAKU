import Image from "next/image";
import { skillsListItems as listItems } from "../../data/data";

export const Skills = (props) => {
  return (
    <div className="bg-[url('/images/bg-skills.png')] bg-cover bg-center mt-24">
      <h3 className="py-4 px-4 text-2xl text-gray-700 text-center">
        {props.title}
        <span className="block text-green-700 ml-4 text-lg align-middle sm:inline">
          {props.subTitle}
        </span>
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
                    alt={image.alt}
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
