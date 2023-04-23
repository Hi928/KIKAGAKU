import Head from "next/head";
import { Footer } from "../Footer/footer";
import { Header } from "../Header/header";

export const siteTitle = "fwywd";

export const Layout = ({ children }) =>{
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-2">{children}</main>
      <Footer name="名前 太郎" copyRight="©︎2021 KIKAGAKU" />
    </>
  );
}
