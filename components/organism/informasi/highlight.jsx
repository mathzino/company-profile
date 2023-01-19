import Image from "next/image";
export default function Highlight() {
  return (
    <>
      <div className="highlight">
        <div className="imgContainer">
          <Image src="/img/informasi.png" layout="fill" alt="" className="imginformasi" />
        </div>
        <div className="desc">
          <h3>Mapagama Research Expesition Seminar “Preserve and Promote: Conservation and Ecotourism”</h3>
          <p>
            Setelah melalukan expedisi hampir sebulan lamanya, tim URE V kembali dalam acara Mapagama Research Expesition Seminar yang diselenggarakan pada 12 Maret 2022. Bersama Yayasan Kehati, Biodiversity Warrior Kehati UGM, dan ...{" "}
          </p>
          <a href="#">
            <div className="linkread">lanjutkan membaca</div>
          </a>
        </div>
      </div>
    </>
  );
}
