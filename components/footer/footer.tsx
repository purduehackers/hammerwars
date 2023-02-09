import { useEffect, useState } from 'react'
import { madeWith } from '../../utils/data'
import FooterLinks from './footer-links'

const Footer = () => {
  const [randomMadeWith, setRandomMadeWith] = useState('')
  useEffect(() => {
    setRandomMadeWith(madeWith[Math.floor(Math.random() * madeWith.length)])
  }, [])
  return (
    <div className="px-4 py-12 border-t-4 border-black bg-amber-100">
      <div className="flex flex-col max-w-xl gap-6 mx-auto text-center">
        <p className="text-lg">
          Made with {randomMadeWith} •{' '}
          <span className="underline underline-offset-4 decoration-2">
            <a
              href="https://github.com/purduehackers/hammerwars"
              target="_blank"
              className="decoration-amber-400 dark:decoration-amber-500 hover:decoration-[3px]"
              rel="noreferrer"
            >
              Open source
            </a>
          </span>{' '}
          •{' '}
          <span className="underline underline-offset-4 decoration-2">
            <a
              href="https://vercel.com?utm_source=purdue-hackers&utm_campaign=oss"
              target="_blank"
              className="decoration-amber-400 dark:decoration-amber-500 hover:decoration-[3px]"
              rel="noreferrer"
            >
              Powered by ▲Vercel
            </a>
          </span>
        </p>
        <FooterLinks />
      </div>
    </div>
  )
}

export default Footer