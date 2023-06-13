import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Search() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const search = async () => {
    router.push({ pathname: "/Result", query: { search: input } });
  };
  return (
    <>
      <div className="form-control mr-20">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search "
            className="input input-bordered text-black"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            // value={val}
          />
          <button
            className="btn bg-lb hover:bg-bth border-none"
            onClick={search}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2                      "
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
