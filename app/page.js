"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../Components/Slider";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faFilter,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  // const [FormData, setFormData] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!FormData) {
  //     toast("Email is Required!");
  //   } else {
  //     localStorage.setItem("user", FormData);
  //     let getdata = localStorage.getItem("user");
  //   }

  //   document.getElementById("myform").reset();
  // }

  return (
    <div
      id="screen"
      className=" w-full h-full sm:w-[1040px]  md:w-[1046px] lg:w-[1520px]   "
    >
      <div
        id="home"
        className="w-full bg-gray-200 p-1 text-center sm:w-[1040px]  md:[1046px] lg:w-[1520px]  "
      >
        <div className=" flex w-full">
          {" "}
          <div className="h-5 w-5 mt-8  ml-12">
            <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
          </div>{" "}
          <div className=" text-2xl  mt-6 mx-auto items-center justify-center">
            <img src="logo.png" alt="" srcset="" />
          </div>{" "}
          <div className=" mt-8 mr-4 flex">
            <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faUser} />
            <Link href="/Register">
              <h2 className="mr-4">Login</h2>
            </Link>
            <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faBagShopping} />
            <h2>Shoping</h2>
          </div>{" "}
        </div>{" "}
        <div class="line"></div>
        <div
          id="nav"
          className="sm:text-[14px] flex flex-row md:text-sm pt-8 ml-10 mr-10 justify-between"
        >
          <h2>Jwellery & Accessories</h2>
          <h2>Clothing & Shoes</h2>
          <h2>Home & Living</h2>
          <h2>Wedding & Party</h2>
          <h2>Toys & Entertainment</h2>
          <h2>Art & Collections</h2>
          <h2>Craft Supplies & Tools</h2>
        </div>
        <div id="container" className=" flex flex-row">
          <div className=" " id="left">
            <h1 className="text-5xl ">Collections </h1>
            <p>You Can Explore As Shop Many Different Collection</p>
            <p>From Various Brands Here.</p>
            <button className="btn1  bg-gray-800  flex flex-row text-white rounded justify-center">
              <FontAwesomeIcon className="h-5 w-5 mr-2" icon={faBagShopping} />
              Shop Now
            </button>
          </div>
          <div id="right" className=" ">
            {" "}
            <div class="back sm:w-[170px] sm:h-[320px] md:w-[170px] md:h-[320px]"></div>
            <img
              src="home.jpg"
              class="img sm:w-[170px]  sm:h-[320px] md:w-[170px] md:h-[320px] lg:w[170px] lg:h-[320px]"
            />
          </div>
        </div>
      </div>
      <div className="mid">
        <div
          id="mid1"
          className="   mt-8 ml-24 mr-24 flex flex-row  justify-between "
        >
          <img src="01.png" className=" h-14 w-38" alt="" srcset="" />
          <img src="02.png" className=" h-14 w-38" alt="" srcset="" />
          <img src="03.png" className=" h-14 w-38" alt="" srcset="" />
          <img src="04.png" className=" h-14 w-38" alt="" srcset="" />
          <img src="05.png" className=" h-14 w-38" alt="" srcset="" />
        </div>
        <div className="section ">
          <div class=" box">
            <div className="tag">
              <h2>EXPLORE NEW AND POPULAR STYLES</h2>
            </div>
            <div className="leftbox">
              <img src="first.jpeg" alt="" srcset="" />
            </div>
            <div className="rightbox">
              <div class="upper">
                <img class=" h-38 w-32" src="second.jpeg" alt="" srcset="" />
                <img class=" h-38 w-32" src="third.jpg" alt="" srcset="" />
              </div>
              <div class="lower">
                <img class=" h-38 w-32" src="fourth.jpg" alt="" srcset="" />
                <img class=" h-38 w-32" src="fifth.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <h2
          id="subscribe"
          className="   mt-24 text-3xl font-bold justify-center flex"
        >
          Or Subscribe To The Newsletter
        </h2>
        <div
          id="Products"
          class="sm:w-[810px] md:w-[810px] lg:w-2/3 m-auto mt-8  justify-between flex flex-row"
        >
          <div class="w-1/3 flex flex-row justify-between">
            <h1 className="font-bold ">All Products</h1>
            <h1>T-Shirt</h1>
            <h1>Hoodies</h1>
            <h1>Jacket</h1>
          </div>
          <button class="h-8 w-70 bg-gray-800 flex flex-row text-white rounded-sm justify-center ">
            <FontAwesomeIcon className="h-5 w-5 m-2" icon={faFilter} />
            <p class="mr-3 mt-1  ">Filter</p>
          </button>
        </div>
        <div id="dress" className=" flex flex-col mt-8">
          <div
            id="top"
            className="sm:w-[810px] lg:w-2/3 md:w-[810px]  w-2/3 m-auto flex flex-row "
          >
            <div className="w-1/4 h-[340px] flex flex-col m-2 ">
              <div className="w-full h-[300px] ">
                <img className="w-full h-[280px]" src="product1.png" />
              </div>
              <h2 className="font-bold mt-2 md:text-[13px]">
                Adicolor Classics joggers
              </h2>
              <div className="w-full justify-between flex flex-row mt-3">
                <p class="md:text-[13px]">Dress</p>
                <p className="font-bold md:text-[13px]">$63.85</p>
              </div>
            </div>
            <div className="w-1/4 h-[340px] flex flex-col m-2 ">
              <div className="w-full h-[300px] ">
                <img className="w-full h-[280px]" src="product2.png" />
              </div>
              <h2 className="font-bold md:text-[13px] mt-2">
                Nike Sportswear Futura Luxe
              </h2>
              <div className="w-full justify-between flex flex-row mt-3">
                <p class="md:text-[13px]">Bag</p>
                <p className="font-bold md:text-[13px]">$130.00</p>
              </div>
            </div>
            <div className="w-1/4 h-[340px] flex flex-col m-2 ">
              <div className="w-full h-[300px] ">
                <img className="w-full h-[280px]" src="product3.png" />
              </div>
              <h2 className="font-bold mt-2 md:text-[13px]">
                Geometric Print Scarf
              </h2>
              <div className="w-full justify-between flex flex-row mt-3">
                <p class="md:text-[13px]">Scarf</p>
                <p className="font-bold md:text-[13px]">$53.00</p>
              </div>
            </div>
            <div className="w-1/4 h-[340px] flex flex-col m-2 ">
              <div className="w-full h-[300px] ">
                <img className="w-full h-[280px]" src="product4.png" />
              </div>
              <h2 className="font-bold mt-2 md:text-[13px]">
                Yellow Reserved Hoodie
              </h2>
              <div className="w-full justify-between  flex flex-row mt-3">
                <p class="md:text-[13px]">Dress</p>
                <div className="flex flex-row">
                  <p class="md:text-[13px]">$63.85</p>
                  <p class="ml-2 text-red-500 md:text-[13px]">$155.00</p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="bottom"
            className="sm:w-[810px] lg:w-2/3 md:w-[810px] w-2/3 m-auto  flex flex-row"
          >
            <div className="w-1/4 h-[340px] flex flex-col m-2 ">
              <div className="w-full h-[300px]">
                <img className="w-full h-[280px]" src="product5.png" />
              </div>
              <h2 className="font-bold mt-2 md:text-sm md:text-[13px]">
                Basic Dress Green
              </h2>
              <div className="w-full justify-between flex flex-row mt-3">
                <p class="md:text-[13px]">Dress</p>
                <p className="font-bold md:text-[13px]">$236.00</p>
              </div>
            </div>
            <div className="w-1/4 h-[340px] flex flex-col m-2 ">
              <div className="w-full h-[300px] ">
                <img className="w-full h-[280px]" src="product6.png" />
              </div>
              <h2 className="font-bold md:text-[13px] mt-2">
                Nike Air Zoom Pegasus
              </h2>
              <div className="w-full justify-between flex flex-row mt-3">
                <p class="md:text-[13px]">Shoe</p>
                <div className="flex flex-row">
                  <p class="md:text-[13px]">$220.00</p>
                  <p class="md:text-[13px] ml-2 text-red-500">$198.00</p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-[340px] flex flex-col m-2">
              <div className="w-full h-[300px] ">
                <img className="w-full h-[280px]" src="product7.png" />
              </div>
              <h2 className="font-bold mt-2 md:text-[13px]">
                Nike Repel Miller
              </h2>
              <div className="w-full md:text-[13px] justify-between flex flex-row mt-3">
                <p class="md:text-[13px]">Dress</p>
                <p className="md:text-[13px] font-bold">$120.50</p>
              </div>
            </div>
            <div className="w-1/4 h-[340px] flex flex-col m-2 ">
              <div className="w-full h-[300px] ">
                <img className="w-full h-[280px]" src="product8.png" />
              </div>
              <h2 className="font-bold mt-2 md:text-[13px]">
                Adicolor Classics joggers
              </h2>
              <div className="w-full justify-between flex flex-row mt-3">
                <p class="md:text-[13px]">Glasses</p>
                <p className="font-bold md:text-[13px]">$160.00</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="zara"
          className="sm:w-[1046px] sm:h-[400px] md:w-[1046px] lg:w-[1520px] md:h-[400px] mt-14  lg:h-[500px] relative"
        >
          <img class="dancer" src="background.png" alt="" srcset="" />
          <img
            class="zara sm:w-[340px] sm:h-[200px] md:w-[340px] md:h-[200px] "
            src="zara.png"
            alt=""
            srcset=""
          />
          <div class="lorem md:w-[340px] md:w-[250px] ">
            <img class=" mb-8 h-[58px]" src="zara.png" alt="" srcset="" />
            <p>
              Lustrous Yet Understated. The New Evening Wear Collection
              Exclusively Offered At The Reapened Giogio Armani Boutique In Los
              Angeles
            </p>
            <button className="lorembtn">See Collection</button>
          </div>
        </div>
        <h2
          id="seller"
          className="mt-40 text-3xl font-bold justify-center flex"
        >
          Best Seller
        </h2>
        <div
          id="Product2"
          class="sm:w-[810px] md:w-[810px] lg:w-2/3 m-auto mt-8  justify-between flex flex-row"
        >
          <div class="w-1/3 flex flex-row justify-between">
            <h1 className="font-bold ">All Products</h1>
            <h1>T-Shirt</h1>
            <h1>Hoodies</h1>
            <h1>Jacket</h1>
          </div>
          <button class="h-[28px] w-[90px] bg-gray-800 flex flex-row text-white rounded-sm justify-center ">
            <p class="m-auto ">Show All</p>
          </button>
        </div>
        <div
          id="slider"
          class="sm:w-[810px] md:w-[810px]  lg:w-2/3 m-auto mt-12"
        >
          <Slider />
        </div>
        <div
          id="ig"
          className="sm:w-[1046px] sm:h-[500px] md:w-[1046px] lg:w-[1520px] md:h-[500px] mt-14 pt-2 lg:h-[600px] bg-gray-200"
        >
          <h2 className="mt-24 text-3xl font-bold justify-center flex">
            Follow Product And Discounts On Instagram
          </h2>
          <div
            id="siximg"
            className="justify-center m-auto mt-12 sm:w-[1040px] w-full lg:w-[1520px]  md:w-[1046px] flex flex-row"
          >
            <img
              className="m-2 lg:h-[200px] lg:w-[200px] sm:h-[100px] md:h-[100px] sm:w-[100px] md:w-[100px]"
              src="foot1.png"
              alt=""
              srcset=""
            />
            <img
              className="m-2 lg:h-[200px] lg:w-[200px] sm:h-[100px] md:h-[100px] sm:w-[100px] md:w-[100px]"
              src="foot2.png"
              alt=""
              srcset=""
            />
            <img
              className="m-2 lg:h-[200px] lg:w-[200px] sm:h-[100px] md:h-[100px] sm:w-[100px] md:w-[100px]"
              src="foot3.png"
              alt=""
              srcset=""
            />
            <img
              className="m-2 lg:h-[200px] lg:w-[200px] sm:h-[100px] md:h-[100px] sm:w-[100px] md:w-[100px]"
              src="foot4.png"
              alt=""
              srcset=""
            />
            <img
              className="m-2 lg:h-[200px] lg:w-[200px] sm:h-[100px] md:h-[100px] sm:w-[100px] md:w-[100px]"
              src="foot5.png"
              alt=""
              srcset=""
            />
            <img
              className="m-2 lg:h-[200px] lg:w-[200px] sm:h-[100px] md:h-[100px] sm:w-[100px] md:w-[100px]"
              src="foot6.png"
              alt=""
              srcset=""
            />
          </div>
          <h2 className="pt-12 text-3xl font-bold justify-center flex">
            Or Subscribe To The Newsletter
          </h2>
          <div
            id="email"
            className="sm:w-[810px] md:w-[810px] lg:w-2/3 sm:mr-20 lg:m-auto m-auto pt-8  justify-between flex flex-row"
          >
            <div id="form" className=" m-auto justify-between ">
              <form id="myform">
                <input
                  // onChange={(e) => {
                  //   setFormData(e.target.value);
                  // }}
                  id="formemail"
                  type="text"
                  placeholder="Email Address..."
                />

                <button onClick={handleSubmit} id="submit">
                  Submit
                </button>
                {/* <ToastContainer /> */}
              </form>
            </div>
          </div>
        </div>
        <div
          id="footer"
          className="sm:w-[1000px] sm:h-[300px] md:w-[1000px] lg:w-[1300px] md:h-[300px] mt-14  lg:h-[400px] flex flex-row m-auto justify-between "
        >
          <div id="first" className="w-2/6 pt-6  h-full">
            <img src="logo.png" alt="" srcset="" />
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ipsam accusamus debitis odio accusantium incidunt ad, excepturi
              libero voluptatem laborum sequi maxime, tenetur asperiores ducimus
              blanditiis sint autem perferendis laudantium.
            </p>
            <div className="logo w-full mt-6 sm:mt-2">
              <img src="Social.png" alt="" srcset="" />
            </div>
          </div>
          <div className="w-1/5   h-full p-6">
            <h2 className=" font-bold ">CATALOG</h2>
            <p className="mt-4">Necklaces</p>
            <p className="mt-4">Hoodies</p>
            <p className="mt-4">Jewellery Box</p>
            <p className="mt-4">T-Shirts</p>
            <p className="mt-4">Jackets</p>
            <div></div>
          </div>
          <div id="third" className="w-1/5 p-6  h-full">
            <h2 className=" font-bold ">ABOUT US</h2>
            <p className="mt-4">Our Producers</p>
            <p className="mt-4">Sitemap</p>
            <p className="mt-4">FAQ</p>
            <p className="mt-4">About Us</p>
            <p className="mt-4">Terms & Conditions</p>
          </div>
          <div id="fourth" className="w-1/5 p-6 sm:w-1/4 h-full">
            <h2 className=" font-bold ">CUSTOMER SERVICES</h2>
            <p className="mt-4">Contact Us</p>
            <p className="mt-4">Track Your Order</p>
            <p className="mt-4">Product Care & Repair</p>
            <p className="mt-4">Book An Appointment</p>
            <p className="mt-4">Shipping & Returns</p>
          </div>
        </div>
        <div className="foot w-full h-[40px] flex pt-[10px] pl-7 pr-7 flex-row justify-between bg-gray-800">
          <h2 class="mb-1 text-white">© 2022 Coral , Inc.</h2>
          <img class="h-5" src="icon.png" alt="" srcset="" />

          <h2 class="flex mb-1 flex-row text-white">
            Scroll To Top
            <FontAwesomeIcon
              class="ml-1 mt-1 mb-1 h-4 w-4 text-white"
              icon={faArrowUp}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
