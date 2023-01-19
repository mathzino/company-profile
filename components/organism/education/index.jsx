import Image from "next/image";
import pdd from "../../../public/img/pendidikan.png";
export default function Education() {
  return (
    <>
      <div className="desc-ed">
        <div className="desc-img">
          <Image src={pdd} alt="" layout="fill" />
        </div>
        <div className="desc-text">
          <p>
            <span className="title">Pendidikan</span>
          </p>
          <p className="">
            Universitas Gadjah Mada menyelenggarakan berbagai program pendidikan meliputi program sarjana, pascasarjana, profesi, spesialis, dan diploma. Beberapa fakultas juga menyelenggarakan program internasional baik pada program
            sarjana maupun pascasarjana.
          </p>
        </div>
      </div>
    </>
  );
}
