import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from 'components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Header></Header>
    // <div className='font-main bg-neutral-100'>Hammerwars</div>
  )
}
