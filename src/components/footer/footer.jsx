const { default: Image } = require("next/image");

const Footer = () => {
  const listItems = [
    { id: 1, content: "お問い合わせ" },
    { id: 2, content: "助成金について" },
    { id: 3, content: "特定商取引法に基づく表記" },
    { id: 4, content: "プライバシーポリシー" },
  ];
  const imageItems = [
    {
      id: 1,
      src: "/images/logo_white.png",
      height: "80",
      width: "100",
    },
  ];
  const snsItems = [
    {
      id: 1,
      src: "/images/twitter.png",
      height: "24",
      width: "24",
    },
    {
      id: 2,
      src: "/images/facebook.png",
      height: "24",
      width: "24",
    },
  ];
  return (
    <footer className="bg-slate-800 flex flex-col items-center">
      <p className="hidden sm:block mt-6 text-white text-xl">
        CREATED BY 名前 太郎
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
        alt=""
      />
      <div className="flex items-center gap-10 mt-8">
        {snsItems.map((item) => (
          <Image
            key={item.id}
            priority
            src={item.src}
            height={item.height}
            width={item.width}
            className="items-center"
            alt=""
          />
        ))}
      </div>
      <p className="mt-8 text-white text-xs mb-6">©︎2021 KIKAGAKU</p>
    </footer>
  );
};

export default Footer;