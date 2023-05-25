import React from "react";
import { FiMapPin } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import Image from "next/image";

export const getServerSideProps = async (ctx) => {
    const {id} = ctx.query
    const resultList = await fetch(
        `https://jealous-garage.pockethost.io/api/collections/restaurant/records/${id}`
      );
      const res = await resultList.json();
      return { props: { res } };
}

export default function detailresto({res}) {
  return (
    <>
      <div className="konten-detail-resto ml-96 flex gap-10">
        <div className="detail-resto-gambar text-3xl text-black font-bold">
        <Image
                        className="p-1"
                        src={`https://jealous-garage.pockethost.io/api/files/${res["collectionId"]}/${res["id"]}/${res["image"][0]}`}
                        height={200}
                        width={200}
                      />
        </div>
        <div className="deskripsi-resto text-black py-3">
          <div className="nama-resto flex text-3xl text-black border-b-2 border-black justify-between">
            <h1>{res["nama"]}</h1>
            <div>3.4</div>
          </div>
          <div className="container"></div>
          <div className="flex p-2 items-center gap-1">
            <FiMapPin />
            <h1>alamat: {res["alamat"]}</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            <MdOutlineAttachMoney />
            <h1>Rp. {res["harga"]}</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            <BiTime />
            <h1>Jam Buka:{res["jam_buka"]}</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            <BsTelephone />
            <h1>No Telp: 088008184028930 </h1>
          </div>

          <button className="btn btn-wide text-white mt-12">
            Tulis Review
          </button>
        </div>
      </div>
    </>
  );
}
