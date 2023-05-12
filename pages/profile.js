// import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/logo.png";
import pb from "@/lib/pocketbase";

export default function profile() {
  const [userModel, setUserModel] = useState();

  useEffect(() => {
    if (!userModel) {
      setUserModel(pb.authStore.model);
    }
  }, [pb.authStore.model]);

  return (
    <>
      <div className="w-3/4 p-6 mx-auto border border-black text-black">
        <div className="flex gap-5 items-center">
          <div className="avatar">
            <div className="w-20 rounded-full border">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
            </div>
          </div>
          <div>
            <div>
              <strong>{userModel?.email}</strong>
            </div>
            <div>
              <h2>
                {userModel && new Date(userModel?.created).toDateString()}
              </h2>
            </div>
          </div>
        </div>
        <div>
          <button className="border border-black rounded p-3 mt-20">
            Create Your Own Restaurant
          </button>
        </div>
      </div>
    </>
  );
}
