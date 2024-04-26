/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

export default function UseWindowSize() {
  const [size, setSize] = useState({ height: 0, width: 0 });


  useEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
    const handleResize = () => {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
  }, []);


  return size;
}