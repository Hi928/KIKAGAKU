import Head from "next/head";
import Footer from "../footer/footer";
import Header from "../header/header";

export const siteTitle = "fwywd";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-2">{children}</main>
      <Footer />
    </>
  );
}
