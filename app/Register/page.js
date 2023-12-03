"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
  const [email, setemail] = useState("");

  const handler = async (e) => {
    e.preventDefault();

    if (!email) {
      toast("Email is Required!");
      return;
    } else {
      let getdata = localStorage.getItem("user");
      if (email === getdata) {
        window.location.href = "/Login";
      } else {
        toast("Invalid Email!");
      }
    }
  };
  return (
    <div className="">
      <div className="grid place-items-center h-screen w-screen">
        <div className="shadow-lg p-5 rounded-lg  w-[400px] border-t-4 border-green-400">
          <h2 className="text-xl font-bold my-4"> Register </h2>{" "}
          <form onSubmit={handler} className="flex flex-col gap-3">
            <input
              onChange={(e) => setemail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <button
              onClick={handler}
              className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
            >
              Login{" "}
            </button>{" "}
            <ToastContainer />
          </form>{" "}
          <Link className="text-sm mt-3 text-right" href="/">
            You don 't have an account?{" "}
            <span className="underline mx-1"> Register </span>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default page;
