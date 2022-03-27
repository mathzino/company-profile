import Head from "next/head";
import Image from "next/image";

import Navbar from "../../components/organism/navbar";

import Footer from "../../components/organism/footer";
import Education from "../../components/organism/education";

export default function Pendidikan() {
  return (
    <>
      <Navbar />
      <Education />
      <div className="faculty">
        <h2>Fakultas dan Sekolah</h2>
        <div className="faculties">
          <div className="faculty-c">
            <img src="/img/fakultas/fak-biologi2.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Biologi</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/feb-1.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Ekonomika dan Bisnis</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-farmasi2.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Farmasi</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-filsafat2.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Filsafat</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-geo1.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Geografi</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-hukum2.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Hukum</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-ib5.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Ilmu Budaya</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-fisipol6.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Ilmu Sosial dan Politik</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-gigi3.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Kedokteran Gigi</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-dokter-hewan3.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Kedokteran Hewan</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-kedokteran2.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Kedokteran</div>
            </div>
          </div>
          <div className="faculty-c">
            <img src="/img/fakultas/fak-kehutanan1.jpg" alt="Avatar" className="img" />
            <div className="overlay">
              <div className="text">Fakultas Kehutanan</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
