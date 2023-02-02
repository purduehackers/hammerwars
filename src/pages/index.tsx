import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from 'components/header'
import HeaderV2 from 'components/header-v2'
import About from 'components/about'
import Sponsors from 'components/sponsors'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeaderV2 />
      {/* <About></About> */}
      {/* <Sponsors></Sponsors> */}
    </>
  )
}
