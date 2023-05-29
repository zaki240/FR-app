import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import pb from "@/lib/pocketbase";
import { useRouter } from "next/router";

export default function register() {
  const router = useRouter();
  async function signUp(event) {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      passwordConfirm: event.target.passwordConfirm.value,
    };
    let error;
    try {
      const record = await pb.collection("users").create(data);
    } catch (err) {
      console.log(err);
      error = "Email sudah digunakan";
    }

    // onSuccess: () => {
    //   router.push("/profile");
    // };
    alert(error);
  }
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/login_owner");
  };
  return (
    <>
      <form
        onSubmit={signUp}
        className="card mx-auto my-10 w-96 bg-logo shadow-xl"
      >
        <div className="mx-auto p-4">
          <Image src={logo} alt="logo" width={150} height={150}></Image>
        </div>
        <div className="mb-6  mx-auto">
          <h1 className="text-center text-3xl font-bold text-white">Sign Up</h1>
          <hr />
        </div>
        <div className="card-body">
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passwordConfirm"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-white hover:bg-gray-200 text-logo font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleClick}
              // disabled={isLoading}
            >
              {/* {isLoading ? "Loading" : "Login"} */}
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
