import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import Benefit from "../components/organism/benefit";
import HomeVideo from "../components/organism/home";
import Navbar from "../components/organism/navbar";
import Reason from "../components/organism/reason";
import About from "../components/organism/about";
import Footer from "../components/organism/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeVideo />
      <Benefit />
      <Reason />
      <About />
      <Footer />
    </>
  );
}
