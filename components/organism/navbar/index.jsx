import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  let handleNavbar = () => {
    navbar ? setNavbar(false) : setNavbar(true);
    console.log(navbar);
  };
  let [navbar, setNavbar] = useState(true);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image src="/img/ugm.png" width="40px" height="40px"></Image>
        </div>
        <div className="menu">
          <Link href="/">
            <a>Tentang UGM</a>
          </Link>
          <Link href="/pendidikan">
            <a>Pendidikan</a>
          </Link>
          <Link href="/informasi">
            <a>Informasi</a>
          </Link>
          <Link href="/">
            <a>Riset</a>
          </Link>
          <Link href="/">
            <a>Bantuan</a>
          </Link>
        </div>
        <button onClick={handleNavbar} className="icon-h">
          <Image src="/img/hamburger.png" width="20px" height="20px" alt="" />
        </button>
      </div>
      <div className={navbar ? "hidden" : "header-navbar"}>
        <ul>
          <li>
            <Link href="/">
              <a>Tentang UGM</a>
            </Link>
          </li>
          <li>
            <Link href="/pendidikan">
              <a>Pendidikan</a>
            </Link>
          </li>
          <li>
            <Link href="/informasi">
              <a>Informasi</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Riset</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Bantuan</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
