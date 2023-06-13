import React, { useState } from "react";
import pb from "@/lib/pocketbase";
import { Create } from "@/lib/pocketbase";
import { useRouter } from "next/router";
export default function CreateR() {
  const router = useRouter();

  async function Create(event) {
    event.preventDefault();

    const data = new FormData();

    // const data = {
    //   name: event.target.name.value,
    //   address: event.target.address.value,
    //   price: event.target.price.value,
    //   hours: event.target.hours.value,
    //   tel: event.target.tel.value,
    //   imgage: event.target.img.files[0],
    // };

    data.append("name", event.target.name.value);
    data.append("address", event.target.address.value);
    data.append("price", event.target.price.value);
    data.append("opening_hours", event.target.opening_hours.value);
    data.append("tel", event.target.tel.value);
    data.append("city", event.target.city.value);
    data.append("image", event.target.img.files[0]);
    data.append("owner", pb.authStore.model.id);
    console.log(event.target.img.files[0]);
    try {
      const record = await pb.collection("restaurant").create(data);
      router.push(`/detailresto/${record.id}`);
    } catch (err) {
      console.log(err);
      alert(err);
    }

    // router.push("/restaurant");
  }
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div>
      <div className="w-3/5 my-10 mx-auto  text-black shadow-sm">
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
                id="opening_hours"
                name="opening_hours"
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

            <div className="form-control w-full max-w-xs text-black">
              <label className="label ">
                <span className="text-black font-semibold">City</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                className="input input-bordered border-black w-full max-w-xs"
                // onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="form-control w-full max-w-xs text-black">
              <label className="label ">
                <span className="text-black font-semibold">Image</span>
              </label>
              <input
                id="img"
                name="img"
                type="file"
                className="file-input file-input-bordered border-black file-input-md w-full max-w-xs"
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
