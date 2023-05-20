// import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/logo.png";
import pb from "@/lib/pocketbase";

export default function profile() {
  const [userModel, setUserModel] = useState();
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  );

  useEffect(() => {
    if (!userModel) {
      setUserModel(pb.authStore.model);
      setImageUrl(
        pb.files.getUrl(pb.authStore.model, pb.authStore.model.avatar)
      );
    }
    console.log();
  }, [pb.authStore.model]);

  async function handleChange(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    const update = await pb.collection("users").update(userModel.id, formData);
    setImageUrl(pb.files.getUrl(pb.authStore.model, update.avatar));
  }

  return (
    <>
      <div className="w-3/4 p-6 mx-auto border border-black text-black shadow-sm">
        <div className="flex gap-5 items-center">
          <div className="avatar">
            <div className="w-20 rounded-full border">
              <label htmlFor="img">
                <img src={imageUrl} />
              </label>
            </div>
            <input
              type="file"
              onChange={handleChange}
              id="img"
              className="hidden"
              name="img"
            />
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
            <a href="/CreateR">Create Your Own Restaurant</a>
          </button>
        </div>
      </div>
    </>
  );
}
