export default function News() {
  return (
    <>
      <div className="news">
        <h1>Berita Terbaru</h1>
        <div className="news-wrap">
          <div className="news-card">
            <img src="/img/berita1.jpeg" alt="" />
            <a href="#">Beasiswa Sobat Bumi 2022</a>
            <p className="date">22 Maret 2002</p>
            <p>
              Dengan hormat kami sampaikan pembukaan penawaran program beasiswa Sobat Bumi 2022 bagi mahasiswa S1 Fasilitas yang akan didapatkan oleh penerima beasiswa antara lain: Biaya perkuliahan Bantuan biaya hidup Fasilitas
              pengembangan ...
            </p>
          </div>
          <div className="news-card">
            <img src="/img/berita2.png" alt="" />
            <a href="#">Beasiswa Karya Salemba Empat TA 2022/2023</a>
            <p className="date">18 MARET 2022</p>
            <p>
              Dengan hormat kami sampaikan pembukaan penawaran program beasiswa Karya Salemba Empat TA 2022/2023. Program beasiswa yang ditawarkan antara lain: Reguler scholarship (bantuan biaya hidup, buku, internet) Achievement
              scholarship (reguler scholarship, ...
            </p>
          </div>
          <div className="news-card">
            <img src="/img/berita3.jpeg" alt="" />
            <a href="#">Pembekalan Peer Counselor Mahasiswa Bidikmisi 2022</a>
            <p className="date">14 MARET 2022</p>
            <p>
              Yogyakarta, 14 Maret 2022- Direktorat Kemahasiswaan UGM telah menyukseskan acara pembekalan bagi Peer Counselor mahasiswa bidikmisi dan afirmasi tahun 2022 pada Sabtu, 5 Maret 2022 pukul 08.00-17.00 secara daring. Acara ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
