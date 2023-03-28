import { useState, useEffect, useMemo } from "react";

import Header from "components/header/header";
import About from "components/about/about";
import Footer from "components/footer/footer";
import Sponsors from "components/sponsors/sponsors";

import {
  DraggableContext,
  DraggableInterface,
} from "context/draggable-context";

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

  return (
    <DraggableContext.Provider value={value}>
      <Header />
      <About />
      <Sponsors />
      <Footer />
    </DraggableContext.Provider>
  );
}
