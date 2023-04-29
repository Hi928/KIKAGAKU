import Image from "next/image";
import React from "react";

export const FirstView = (props) => {
  return (
    <div className=" bg-teal-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="mt-4 sm:ml-10 sm:mt-0">
        <h1 className="text-center sm:text-left py-4 px-4 text-6xl text-white">{props.title}</h1>
        <h2 className="text-center sm:text-left py-4 px-4 text-4xl text-white">{props.subTitle}</h2>
      </div>
      <Image
        priority
        src="/images/hero.png"
        height={585}
        width={498}
        className="sm:mr-12"
        alt="ヒーロー"
      />
    </div>
  );
};