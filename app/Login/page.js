import React from "react";
import Slider from "../../Components/Slider";

function page() {
  return (
    <div className="justify-center">
      {" "}
      <h2 className="text-[80px] text-red-600 text-center "> Welcome </h2>{" "}
      <div className="w-[900px] h-[600px] mt-[45px] m-auto">
        <Slider />
      </div>{" "}
    </div>
  );
}

export default page;
