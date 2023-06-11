// import Image from "next/image";
import React, { useEffect, useState } from "react";
import pb from "@/lib/pocketbase";
import { useRouter } from "next/router";
import { MdDateRange } from "react-icons/md";

export default function profile() {
  const router = useRouter();
  const [userModel, setUserModel] = useState();
  const [imageUrl, setImageUrl] = useState("/img/avatar.png");

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
    const update = await pb
      .collection("users_owner")
      .update(userModel.id, formData);
    setImageUrl(pb.files.getUrl(pb.authStore.model, update.avatar));
  }

  return (
    <div className=" m-3">
      <div className="flex justify-center bg-white text-black m-2">
        <div className="card w-3/4 bg-base-white shadow-xl">
          <div className="h-40 bg-gray-500  relative">
            <div className="avatar absolute left-7 -bottom-10">
              <div className="w-24 rounded-full border-2 border-white">
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
          </div>
          <div className="card-body pt-2">
            <div className="flex justify-end gap-2">
              <button
                className="border border-black rounded p-3 "
                onClick={() => {
                  pb.authStore.clear();
                  router.push("/");
                }}
              >
                Log out
              </button>
            </div>
            <div className="leading-3 pb-4">
              <h2 className="card-title">{userModel?.username}</h2>
              <p className="text-gray-500">{userModel?.email}</p>
            </div>
            <div className="flex gap-1 items-center mb-5 text-gray-500">
              <MdDateRange />
              <h3>
                Joined{" "}
                {userModel && new Date(userModel?.created).toDateString()}
              </h3>
            </div>
            <div
              className=" my-3 "
              onClick={() => {
                router.push("/CreateR");
              }}
            >
              <button className="border border-black rounded p-2">
                Create Your Restaurant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
