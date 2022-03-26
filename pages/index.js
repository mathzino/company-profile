import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import Benefit from "../components/organism/benefit";
import HomeVideo from "../components/organism/home";
import Navbar from "../components/organism/navbar";
import Reason from "../components/organism/reason";
import About from "../components/organism/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeVideo />
      <Benefit />
      <Reason />
      <About />
      <div className="footer">
        <div className="footer-top">
          <div className="footer-s1">
            <img src="/img/hero_logo.png" alt="UGM" />
            <h3>Universitas Gadjah Mada</h3>
            <p>Bulaksumur yogyakarta</p>
            <p>info@ugm.ac.id</p>
            <p>+62 (274) 6492599</p>
            <p>+62 (274) 565223</p>
            <p>+62 811 2869 988</p>
          </div>
          <div className="footer-s2">
            <h4>KERJA SAMA</h4>
            <p>Kerja Sama Dalam Negeri</p>
            <p>Alumni</p>
            <p>Urusan Internasional</p>
          </div>
          <div className="footer-s3">
            <h4>Tentang UGM</h4>
            <p>Sambutan Rektor</p>
            <p>Sejarah</p>
            <p>Visi Dan Misi</p>
            <p>Pimpinan Universitas</p>
            <p>Manajemen</p>
          </div>
          <div className="footer-s4">
            <h4>MENGUNJUNGI </h4>
            <p>Peta Kampus</p>
            <p>Agenda</p>
          </div>
          <div className="footer-s5">
            <h4>PENDAFTARAN</h4>
            <p>Sarjana</p>
            <p>Pascasarjana</p>
            <p>Profesi</p>
            <p>Diploma</p>
            <p>Internasional</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-b1">
            <h4>© 2022 UNIVERSITAS GADJAH MADA</h4>
          </div>
          <div className="footer-b2">
            <p>aturan penggunaan </p>
            <p>| kontak |</p>
            <p>panduan identitas visual</p>
          </div>
        </div>
      </div>
    </>
  );
}
