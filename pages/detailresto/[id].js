import React from "react";
import { FiMapPin } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import Image from "next/image";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const resultList = await fetch(
    `https://jealous-garage.pockethost.io/api/collections/restaurant/records/${id}`
  );
  const res = await resultList.json();
  return { props: { res } };
};

export default function detailresto({ res }) {
  return (
    <>
      <div className="flex gap-8 mx-auto justify-center p-3">
        <div className="mt-5">
          <img
            className="w-80 h-72 rounded divide-x"
            src={`https://jealous-garage.pockethost.io/api/files/${res["collectionId"]}/${res["id"]}/${res["image"][0]}`}
          />
        </div>
        <div className="deskripsi-resto text-black py-3">
          <div className="nama-resto flex text-3xl text-black border-b-2 border-black justify-between">
            <h1 className="font-bold">{res["name"]}</h1>
            <div>3.4</div>
          </div>
          <div className="container"></div>
          <div className="flex p-2 items-center gap-1">
            <FiMapPin />
            <h1>alamat: {res["address"]}</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            {/* <MdOutlineAttachMoney /> */}
            <h1>Rp. {res["price"]}</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            <BiTime />
            <h1>Jam Buka:{res["opening_hours"]}</h1>
          </div>
          <div className="flex p-2 items-center gap-1">
            <BsTelephone />
            <h1>Tel: 088008184028930 </h1>
          </div>

          <button className="btn btn-wide text-white mt-12">
            Tulis Review
          </button>
        </div>
      </div>
    </>
  );
}
