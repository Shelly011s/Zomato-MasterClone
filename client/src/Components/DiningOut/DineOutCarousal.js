import React from "react";

//component
import DineOutTrending from "./DineOutTrending";

const DineOutCarousal = () => {
  return (
    <>
    <h1 className="text-xl font-semibold my-3">Collections</h1>
    <div className="flex flex-wrap justify-between gap-3">
      <DineOutTrending />
      <DineOutTrending />
      <DineOutTrending />
      <DineOutTrending />
      <DineOutTrending />
      <DineOutTrending />
    </div>
    </>
  );
};

export default DineOutCarousal;
