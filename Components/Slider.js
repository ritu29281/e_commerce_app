"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../app/globals.css";

function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <div className="mr-4">
          <img src="product1.png" alt="" srcset="" />
          <h2 className="font-bold mt-2 md:text-[13px] sm:text-[13px]">
            Adicolor Classics joggers
          </h2>
          <div className="w-full justify-between flex flex-row mt-3">
            <p class="md:text-[13px] sm:text-[14px]">Dress</p>
            <p className="font-bold md:text-[13px] sm:text-[14px]">$63.85</p>
          </div>
        </div>
        <div className="mr-4">
          <img src="product2.png" alt="" srcset="" />
          <h2 className="font-bold md:text-[13px] mt-2 sm:text-[13px]">
            Nike Sportswear Futura Luxe
          </h2>
          <div className="w-full justify-between flex flex-row mt-3">
            <p class="md:text-[13px] sm:text-[14px]">Bag</p>
            <p className="font-bold md:text-[13px] sm:text-[14px]">$130.00</p>
          </div>
        </div>
        <div className="mr-4">
          <img src="product3.png" alt="" srcset="" />
          <h2 className="font-bold mt-2 md:text-[13px] sm:text-[13px]">
            Geometric Print Scarf
          </h2>
          <div className="w-full justify-between flex flex-row mt-3">
            <p class="md:text-[13px] sm:text-[14px]">Scarf</p>
            <p className="font-bold md:text-[13px] sm:text-[14px]">$53.00</p>
          </div>
        </div>
        <div className="mr-4">
          <img src="product4.png" alt="" srcset="" />
          <h2 className="font-bold mt-2 md:text-[13px] sm:text-[13px]">
            Yellow Reserved Hoodie
          </h2>
          <div className="w-full justify-between  flex flex-row mt-3">
            <p class="md:text-[13px] sm:text-[14px]">Dress</p>
            <div className="flex flex-row">
              <p class="md:text-[13px] sm:text-[14px]">$63.85</p>
              <p class="ml-2 text-red-500 md:text-[13px] sm:text-[14px]">
                $155.00
              </p>
            </div>
          </div>
        </div>
        <div id="" className="mr-4">
          <img src="product5.png" alt="" srcset="" />
          <h2 className="font-bold mt-2 md:text-sm md:text-[13px] sm:text-[13px]">
            Basic Dress Green
          </h2>
          <div className="w-full justify-between flex flex-row mt-3">
            <p class="md:text-[13px] sm:text-[14px]">Dress</p>
            <p className="font-bold md:text-[13px] sm:text-[14px]">$236.00</p>
          </div>
        </div>
        <div className="mr-4">
          <img src="product6.png" alt="" srcset="" />
          <h2 className="font-bold md:text-[13px] mt-2 sm:text-[13px]">
            Nike Air Zoom Pegasus
          </h2>
          <div className="w-full justify-between flex flex-row mt-3">
            <p class="md:text-[13px] sm:text-[14px]">Shoe</p>
            <div className="flex flex-row">
              <p class="md:text-[13px] sm:text-[14px]">$220.00</p>
              <p class="md:text-[13px] ml-2 text-red-500 sm:text-[14px]">
                $198.00
              </p>
            </div>
          </div>
        </div>
        <div className="mr-4">
          <img src="product7.png" alt="" srcset="" />
          <h2 className="font-bold mt-2 md:text-[13px] sm:text-[13px]">
            Nike Repel Miller
          </h2>
          <div className="w-full md:text-[13px] justify-between flex flex-row mt-3">
            <p class="md:text-[13px] sm:text-[14px]">Dress</p>
            <p className="md:text-[13px] font-bold sm:text-[14px]">$120.50</p>
          </div>
        </div>
        <div className="mr-4">
          <img src="product8.png" alt="" srcset="" />
          <h2 className="font-bold mt-2 md:text-[13px] sm:text-[13px]">
            Adicolor Classics joggers
          </h2>
          <div className="w-full justify-between flex flex-row mt-3">
            <p class="md:text-[13px] sm:text-[14px]">Glasses</p>
            <p className="font-bold md:text-[13px] sm:text-[14px]">$160.00</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
