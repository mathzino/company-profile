import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeVideo() {
  return (
    <>
      <div className="home">
        <img src="/img/2022.png" alt="" className="bg" />
        {/* <img src="/img/2022.png" alt="" className="bg2" /> */}

        <div className="home-video">
          <img width="250px" height="250px" src="/img/hero_logo.png" alt="UGM" />
          <video loop autoPlay muted>
            <source src="/video/2021Wisuda.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
