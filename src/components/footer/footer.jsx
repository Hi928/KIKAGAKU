import Image from "next/image";
import { footerListItems as listItems, footerImageItems as imageItems, footerSnsItems as snsItems } from "../../data/data";
import React from "react";

export const Footer = (props) => {
  return (
    <footer className="bg-slate-800 flex flex-col items-center">
      <p className="hidden sm:block mt-6 text-white text-xl">
        {`CREATED BY ${props.name}`}
      </p>
      <ul className="text-white flex text-sm gap-4 flex-wrap justify-center sm:hidden">
        {listItems.map((item) => (
          <li key={item.id} className="w-1/3 py-2">
            {item.content}
          </li>
        ))}
      </ul>
      <Image
        priority
        src={imageItems[0].src}
        height={imageItems[0].height}
        width={imageItems[0].width}
        className="items-center mt-10"
        alt={imageItems[0].alt}
      />
      <div className="flex items-center gap-10 mt-8">
        {snsItems.map((item) => (
          <Image
            key={item.id}
            priority
            src={item.src}
            height={item.height}
            width={item.width}
            alt={item.alt}
            className="items-center"
          />
        ))}
      </div>
      <p className="mt-8 text-white text-xs mb-6">{props.copyRight}</p>
    </footer>
  );
};
