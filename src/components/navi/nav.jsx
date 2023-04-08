import Image from "next/image";

const Nav = () => {
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
        <li className="text-cyan-600">ABOUT</li>
        <li className="text-cyan-600">SKILLS</li>
        <li className="text-cyan-600">VALUES</li>
        <li className="text-cyan-600">FUTURE</li>
      </ul>
    </>
  );
};

export default Nav;
