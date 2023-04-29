import React from "react";
import { Inter } from "next/font/google";
import { About } from "../components/About/about";
import { FirstView } from "../components/FirstView/firstView";
import { Future } from "../components/Future/future";
import { Skills } from "../components/Skills/skills";
import { Values } from "../components/Values/values";
import { Layout } from "../components/Layout/layout";

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
