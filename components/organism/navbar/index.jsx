import React from "react";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/img/ugm.png" width="50px" height="50px"></img>
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
      </div>
    </>
  );
}
