import { Inter } from "next/font/google";
import Layout from "../components/layout/layout";
import FirstView from "../components/firstView/firstView";
import About from "../components/about/about";
import Skills from "../components/skills/skills";
import Values from "../components/values/values";
import Future from "../components/future/future";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <FirstView title="メインタイトル" subTitle="サブタイトル" />
      <About title="私について" subTitle="ABOUT" />
      <Skills title="スキル" subTitle="SKILLS" />
      <Values title="価値観" subTitle="VALUES"/>
      <Future title="3年後にやりたいこと" subTitle="FUTURE"/>
    </Layout>
  );
}
