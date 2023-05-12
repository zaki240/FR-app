import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
// import { BiHome } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="navbar bg-logo">
        <div className="flex-1 ">
          <a href="/" className=" w-24 hover:bg-lb">
            <Image src={logo} alt="logo" width={0} height={0}></Image>
          </a>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn bg-lb hover:bg-bth border-none">
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
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* <FontAwesomeIcon icon="fa-regular fa-house" /> */}
        {/* <BiHome /> */}
        <div className="flex-none text-white mr-12 ml-5">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <a>
                Sign In
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-logo">
                <li>
                  <Link href="/login">Sign In</Link>
                </li>
                <li>
                  <Link href="/login_owner">Sign In for owner</Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a>
                Sign Up
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-logo">
                <li>
                  <a>Sign Up</a>
                </li>
                <li>
                  <a>Sign Up for owner</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
