import Image from "next/image";
import { valueListItems as listItems } from "../../data/data";

export const Values = ({title, subTitle}) => {
  return (
    <div className="bg-[url('/images/bg-about.png')] bg-cover bg-center">
      <h3 className="mt-8 py-4 px-4 text-2xl text-gray-700 text-center">
        {title}
        <span className="block text-green-700 ml-4 text-lg align-middle sm:inline">{subTitle}</span>
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

