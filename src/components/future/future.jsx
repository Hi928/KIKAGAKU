import Image from "next/image";
import { futureListItems as listItems } from "../../data/data";

export const Future = ({ title, subTitle }) => {
  return (
    <div className="bg-[url('/images/bg-future.png')] bg-cover bg-center mt-24 h-96">
      <h3 className="py-4 px-4 text-2xl text-gray-700 text-center">
        {title}
        <span className="block text-green-700 ml-4 text-lg align-middle sm:inline">
          {subTitle}
        </span>
      </h3>
      <ul className="flex flex-col items-center justify-center sm:gap-12 sm:flex-row">
        {listItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-center items-center min-w-full sm:min-w-min"
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
