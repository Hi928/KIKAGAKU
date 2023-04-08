const { default: Image } = require("next/image")

const Footer = () => {
  return (

    <footer className="bg-slate-800 flex flex-col items-center">
      <p className="hidden sm:block mt-6 text-white text-xl">CREATED BY 名前 太郎</p>
      <ul className="text-white flex text-sm gap-4 flex-wrap justify-center sm:hidden">
        <li className="w-1/3 py-2">お問い合わせ</li>
        <li className="w-1/3 py-2">助成金について</li>
        <li className="w-1/3 py-2">特定商取引法に基づく表記</li>
        <li className="w-1/3 py-2">プライバシーポリシー</li>
      </ul>
      <Image
        priority
        src="/images/logo_white.png"
        height={80}
        width={100}
        className="items-center mt-10"
        alt=""
      />
      <div className="flex items-center gap-10 mt-8">
        <Image
          priority
          src="/images/twitter.png"
          height={24}
          width={20}
          className="items-center"
          alt=""
        />
        <Image
          priority
          src="/images/facebook.png"
          height={24}
          width={24}
          className="items-center"
          alt=""
        />
      </div>
      <p className="mt-8 text-white text-xs mb-6">©︎2021 KIKAGAKU</p>
    </footer>
  )
}

export default Footer;