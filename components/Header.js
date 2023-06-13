import React from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import pb from "@/lib/pocketbase";
import dynamic from "next/dynamic";
import Search from "./Search";

function Header() {
  return (
    <>
      <div className="navbar bg-logo ">
        <div className="flex-1 ">
          <a href="/" className=" w-24 m-1 hover:bg-lb">
            <Image src={logo} alt="logo" width={0} height={0}></Image>
          </a>
        </div>
        <Search />
        {/* <FontAwesomeIcon icon="fa-regular fa-house" /> */}
        <div className="flex-none text-white mr-12 ml-5">
          <ul className="menu menu-horizontal px-1 gap-2 font-bold">
            <li>
              <Link href="/">
                <AiFillHome className="text-xl" />
              </Link>
            </li>
            {!pb.authStore.isValid && (
              <>
                <li className="dropdown">
                  <label tabIndex={0}>
                    FR for Owner
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-logo rounded-box w-52"
                  >
                    <li>
                      <Link href="/login_owner">Login</Link>
                    </li>
                    <li>
                      <Link href="/register_owner">Sign Up </Link>
                    </li>
                  </ul>
                </li>
                <li className=" border-2 rounded">
                  <Link href="/login">Login</Link>
                </li>
                <li className="bg-white text-logo rounded">
                  <Link href="/register">Sign Up</Link>
                </li>
              </>
            )}
            {/* <li>
              <button className="btn btn-outline">
                <a href="">
                  <div className="text-2xl">
                    <CgProfile />
                  </div>
                </a>
              </button>
            </li> */}
            {pb.authStore.isValid ? (
              <>
                <li>
                  <button className="btn btn-outline">
                    <a
                      href={
                        pb.authStore.model.collectionName == "users_owner"
                          ? "/profile"
                          : "/profileU"
                      }
                    >
                      <div className="text-2xl">
                        <CgProfile />
                      </div>
                    </a>
                  </button>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(Header), { ssr: false });
