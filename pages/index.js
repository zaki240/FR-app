import React from "react";
import Image from "next/image";
import pb from "@/lib/pocketbase";
import Link from "next/link";

import CommentI from "@/components/CommentI";

export const getStaticProps = async () => {
  try {
    const resultList = await fetch(
      "https://jealous-garage.pockethost.io/api/collections/all_restaurant/records?page=1&perPage=12"
    );
    const commentList = await fetch(
      `https://jealous-garage.pockethost.io/api/collections/restaurant_rating/records?expand=user,restaurant&filter=(rating>="4")`
    );
    const res = await resultList.json();
    const comments = await commentList.json();
    return { props: { res, comments: comments.items } };
  } catch (error) {
    throw new Error(error);
  }
};

export default function home({ res, comments }) {
  res.items.map((value) => {
    console.log(value);
  });

  return (
    <div className="font-mono">
      <div className="carousel w-full h-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/img/4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/img/5.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/img/7.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* Home title */}

      {/* Kolom */}
      <div className="kolom-title p-3  font-bold text-black text-xl">
        <div className="kolom-gambar p-4">
          <div className="konten-gambar flex justify-center p-4 gap-6">
            <div className="gambar   font-bold text-black ">
              <h1 className="ml-3 text-xl">Recommendation For You</h1>
              {/* <h1>{res.page}</h1> */}
              <div className="grid grid-cols-4 gap-15">
                {res.items.map((value) => {
                  return (
                    <a
                      href={`/detailresto/${value["id"]}`}
                      className="p-3 rounded-sm  m-2 hover:scale-105"
                    >
                      <div className="">
                        <img
                          className="p-1 rounded w-72 h-56 "
                          src={`https://jealous-garage.pockethost.io/api/files/${value["collectionId"]}/${value["id"]}/${value["image"][0]}`}
                        />
                      </div>
                      <h1 className="isiGambar text-bold text-base mt-2 ml-1">
                        {value["name"].toUpperCase()}
                      </h1>
                      <p className="text-gray-500 text-sm  ml-1 ">
                        {value["city"]}
                      </p>
                      {/* <div className="rating text-xs  ">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div> */}
                      {/* <h1 className='isiGambar text-4xl'>{value['alamat']}</h1> */}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
      {comments.map((comment) => (
        <CommentI comment={comment} />
      ))}
      </div> */}
      {/*  */}
    </div>
  );
}
