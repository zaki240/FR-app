import React from "react";
import logo from "../public/logo.jpg";
import Image from "next/image";
import pb from "@/lib/pocketbase";
import { useForm } from "react-hook-form";
import useLoginR from "@/hooks/useLoginR";
import useLogout from "@/hooks/useLogout";
import { useRouter } from "next/router";

export default function login() {
  const logout = useLogout();
  const { mutate: login, isLoading, isError } = useLoginR();
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  // const isLoggedIn = pb.authStore.isValid;

  async function onSubmit(data) {
    login(
      { email: data.email, password: data.password },
      {
        onSuccess: () => {
          router.push("/profile");
        },
      }
    );
    reset();
  }
  // if (isLoggedIn) {
  //   return (
  //     <>
  //       <h1>Logged In: {pb.authStore.model.email}</h1>
  //       <button onClick={logout}>Log Out</button>
  //     </>
  //   );
  // }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: "red" }}>invalid email or password</p>}

      <form
        className="card mx-auto my-10 w-96 bg-logo shadow-xl   "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mx-auto p-4">
          <Image src={logo} alt="logo" width={150} height={150}></Image>
        </div>
        <div className="mb-6  mx-auto">
          <h1 className="text-center text-3xl font-bold text-white">Login</h1>
          <hr />
        </div>
        <div className="card-body">
          <div class="mb-4">
            <label className="block text-white font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              {...register("email")}
            />
          </div>
          <div class="mb-4">
            <label className="block text-white font-bold mb-2">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-white hover:bg-gray-200 text-logo font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading" : "Login"}
            </button>
            {/* <a
              class="inline-block align-baseline font-bold text-sm text-white hover:text-gray-200 "
              href="#"
            >
              Forgot Password?
            </a> */}
          </div>
        </div>
      </form>
    </>
  );
}
