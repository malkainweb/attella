"use client";
import Image from "next/image";
import Home_inside from "./home_inside";
import { useEffect, useState } from "react";
import Preloader from "./preloader";

export default function Home() {
  const [scale, setscale] = useState(1.2);
  const [preloader_img_opacity, setpreloader_img_opacity] = useState(0);
  const [loader, setloader] = useState(true);
  const [beginlines, setbeginlines] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setloader(false);
  //     document.body.classList.remove("hide_now");
  //     // console.log("i am waing ");
  //   }, 4500);
  //   return () => clearTimeout(timer);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      {loader ? (
        <Preloader
          setscale={setscale}
          scale={scale}
          preloader_img_opacity={preloader_img_opacity}
          setpreloader_img_opacity={setpreloader_img_opacity}
          beginlines={beginlines}
          setbeginlines={setbeginlines}
        />
      ) : null}
      <Home_inside />
    </>
  );
}
