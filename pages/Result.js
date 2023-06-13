import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export function getServerSideProps(ctx) {
  const { search } = ctx.query;
  return { props: { search } };
}

export default function Result({ search }) {
  const [res, setRes] = useState();
  const router = useRouter();
  const query = router.query;
  const getResult = async () => {
    const res = await fetch(
      `https://jealous-garage.pockethost.io/api/collections/restaurant/records?filter=(city ~ "${
        query.search ?? search
      }" || name ~ "${query.search ?? search}")`
    );
    const result = await res.json();
    setRes(result);
  };

  useEffect(() => {
    getResult();
  }, [query]);

  return (
    <>
      <div className="grid grid-cols-4 gap-15 m-10">
        {res?.items.map((value) => {
          return (
            <a
              key={value.id}
              href={`/detailresto/${value["id"]}`}
              className="p-3 rounded-sm  m-2 hover:scale-105 border"
            >
              <div className="">
                <img
                  className="p-1 rounded w-72 h-56 "
                  src={`https://jealous-garage.pockethost.io/api/files/${value["collectionId"]}/${value["id"]}/${value["image"][0]}`}
                />
              </div>
              <h1 className="isiGambar text-bold text-base mt-2 ml-1 text-black">
                {value["name"].toUpperCase()}
              </h1>
              <p className="text-gray-500 text-sm  ml-1 ">{value["city"]}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
