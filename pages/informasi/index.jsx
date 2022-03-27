import Head from "next/head";
import Image from "next/image";

import Navbar from "../../components/organism/navbar";

import Footer from "../../components/organism/footer";
import Highlight from "../../components/organism/informasi/highlight";
import News from "../../components/organism/informasi/news";
import Information from "../../components/organism/informasi/information";

export default function Informasi() {
  return (
    <>
      <Navbar />
      <Highlight />
      <Information />
      <News />
      <Footer />
    </>
  );
}
