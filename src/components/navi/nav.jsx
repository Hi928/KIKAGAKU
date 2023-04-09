import Image from "next/image";

const Nav = () => {
  const listItems = [
    { id: 1, content: "ABOUT" },
    { id: 2, content: "SKILLS" },
    { id: 3, content: "VALUES" },
    { id: 4, content: "FUTURE" },
  ];
  return (
    <>
      <div className="flex sm:items-center">
        <Image
          priority
          src="/images/logo.png"
          height={180}
          width={144}
          className="items-center"
          alt=""
        />
      </div>
      <ul className="flex gap-12 sm:items-center sm:gap-8 sm:mr-4">
        {listItems.map((item) => (
          <li key={item.id} className="text-cyan-600">
            {item.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
