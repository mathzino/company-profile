import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">{/* <Image src="/img/ugm.png" width={60} height={60}></Image> */}</div>
        <div className="menu">
          <Link href="/">
            <a>Tentang UGM</a>
          </Link>
          <Link href="/">
            <a>Pendidikan</a>
          </Link>
          <Link href="/">
            <a>Informasi</a>
          </Link>
          <Link href="/">
            <a>Riset</a>
          </Link>
          <Link href="/">
            <a>Bantuan</a>
          </Link>
        </div>
      </div>
    </>
  );
}
