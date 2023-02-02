import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'

import HeaderV2 from 'components/header-v2'
import About from 'components/about'
import Sponsors from 'components/sponsors'
import { DraggableContext, DraggableInterface } from 'context/draggable-context'

export default function Home() {

  // Disable draggable feature on small screen
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })
  const [draggable, setDraggable] = useState<boolean>(false)

  const value = useMemo<DraggableInterface>(
    () => ({ draggable, setDraggable }),
    [draggable]
  )

  const resizeHandler = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    if (windowSize.width > 640) {
      setDraggable(true)
    } else {
      setDraggable(false)
    }
  }

  useEffect((): any => {
    if (window.innerWidth > 640) {
      setDraggable(true)
    } else {
      setDraggable(false)
    }
  }, [])

  useEffect((): any => {
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  })

  return (
    <DraggableContext.Provider value={value}>
      <HeaderV2 />
      {/* <About></About> */}
      {/* <Sponsors></Sponsors> */}
    </DraggableContext.Provider>
  )
}
