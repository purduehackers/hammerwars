import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

import HeaderV4 from "components/header/header-v4";
import AboutV3 from "components/about/about-v3";
import Footer from "components/footer/footer";

import {
  DraggableContext,
  DraggableInterface,
} from "context/draggable-context";
import SponsorsV2 from "components/sponsors/sponsors-v2";
import Schedule from "components/schedule/schedule";
import NewHammerWars from "components/header/new-hammerwars";

export default function Home() {
  // Disable draggable feature on small screen
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [draggable, setDraggable] = useState<boolean>(false);

  const value = useMemo<DraggableInterface>(
    () => ({ draggable, setDraggable }),
    [draggable]
  );

  const resizeHandler = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    if (windowSize.width > 640) {
      setDraggable(true);
    } else {
      setDraggable(false);
    }
  };

  useEffect((): any => {
    if (window.innerWidth > 640) {
      setDraggable(true);
    } else {
      setDraggable(false);
    }
  }, []);

  useEffect((): any => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  const modalClosed = useState(false);

  return (
    <DraggableContext.Provider value={value}>
      <NewHammerWars/>
      <HeaderV4 />
      <Schedule />
      <AboutV3 />
      <SponsorsV2 />
      <Footer />
    </DraggableContext.Provider>
  );
}
