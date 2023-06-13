import React, { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";
import Image from "next/image";
import Comment from "@/components/Comment";
import pb from "@/lib/pocketbase";
import CommentDetail from "@/components/CommentDetail";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const resultList = await fetch(
    `https://jealous-garage.pockethost.io/api/collections/restaurant/records/${id}`
  );
  const res = await resultList.json();
  return { props: { res } };
};

export default function detailresto({ res }) {
  const [comment, setComment] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const resultList = await pb.collection("rating").getFullList({
      expand: "restaurant,user",
      filter: `restaurant = "${res["id"]}"`,
    });
    console.log(resultList);
    setComments(resultList);
  };

  useEffect(() => {
    getComments();
  }, []);

  useEffect(() => {
    if (pb.authStore.isValid) {
      setIsOwner(pb.authStore.model.collectionName == "users_owner");
    }
  }, [pb.authStore.isValid]);

  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="flex gap-8  justify-center p-3">
          <div className="mt-5">
            <img
              className="w-72 h-56 rounded divide-x"
              src={`https://jealous-garage.pockethost.io/api/files/${res["collectionId"]}/${res["id"]}/${res["image"][0]}`}
            />
          </div>
          <div className="deskripsi-resto text-black py-3">
            <div className="nama-resto flex text-3xl text-black border-b-2 border-black justify-between">
              <h1 className="font-bold">{res["name"]}</h1>
              {/* <div>3.4</div> */}
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
              <h1>Jam Buka: {res["opening_hours"]}</h1>
            </div>
            <div className="flex p-2 items-center gap-1">
              <BiMap />
              <h1>City: {res["city"]}</h1>
            </div>
            <div className="flex p-2 items-center gap-1">
              <BsTelephone />
              <h1>Tel: {res["tel"]}</h1>
            </div>

            {!isOwner && (
              <button
                className="btn btn-wide text-white mt-12"
                onClick={() => {
                  setComment(true);
                }}
              >
                Tulis Review
              </button>
            )}
          </div>
        </div>
        <div className=" py-5">
          {comment && !isOwner ? <Comment restoId={res["id"]} /> : null}
          {comments.length
            ? comments.map((comment) => <CommentDetail comment={comment} />)
            : null}
        </div>
      </div>
    </>
  );
}
