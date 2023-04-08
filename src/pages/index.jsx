import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '../components/layout/layout'
import firstView from '../components/firstView/firstView'
import Image from 'next/image'
import FirstView from '../components/firstView/firstView'
import About from '../components/about/about'
import Skills from '../components/skills/skills'
import Values from '../components/values/values'
import Future from '../components/future/future'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ children }) {
  return (
    <Layout>
      <FirstView />
      <About />
      <Skills />
      <Values />
      <Future />
    </Layout>
  )
}
