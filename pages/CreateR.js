import React, { useState } from "react";
import pb from "@/lib/pocketbase";
import { Create } from "@/lib/pocketbase";
import { useRouter } from "next/router";
export default function CreateR() {
  const router = useRouter();

  async function Create(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      address: event.target.address.value,
      price: event.target.price.value,
      hours: event.target.hours.value,
      tel: event.target.tel.value,
    };
    let error;
    let record;
    try {
      record = await pb.collection("restaurant").create(data);
    } catch (err) {
      console.log(err);
      error = "..";
    }
    console.log(record);

    alert(error);
    // router.push("/restaurant");
  }
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div>
      <div className="w-3/4 p-6 mx-auto border border-black text-black shadow-sm">
        <div>
          <h1 className="text-2xl font-bold font-sans">Add Your Restaurant</h1>
          <p>Add Information about your Restaurant below</p>
        </div>
        <form className="grid-cols-2" onSubmit={Create}>
          <div className="flex gap-10">
            <div className="form-control w-full max-w-xs text-black ">
              <label className="label ">
                <span className="text-black font-semibold">Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered border-black w-full max-w-xs"
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs text-black">
              <label className="label ">
                <span className="text-black font-semibold">Address</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                className="input input-bordered border-black w-full max-w-xs"
                // onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="form-control w-full max-w-xs text-black">
              <label className="label ">
                <span className="text-black font-semibold">Hours</span>
              </label>
              <input
                id="hours"
                name="hours"
                type="text"
                placeholder="Opening Hours"
                className="input input-bordered border-black w-full max-w-xs"
                // onChange={(e) => setHours(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs text-black">
              <label className="label ">
                <span className="text-black font-semibold">Phone</span>
              </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                placeholder="Tel"
                className="input input-bordered border-black w-full max-w-xs"
                // onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="form-control w-full max-w-xs text-black">
              <label className="label ">
                <span className="text-black font-semibold">Price</span>
              </label>
              <input
                id="price"
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered border-black w-full max-w-xs"
                // onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button
              className="btn mt-9 bg-white text-black hover:text-white"
              type="submit"
            >
              Add Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
