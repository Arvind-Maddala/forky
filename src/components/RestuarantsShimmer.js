import React from "react";
import RestuarantShimmer from "./RestuarantShimmer";

const RestuarantsShimmer = () => {
  let shimmerCount = new Array(4).fill(null);
  console.log(shimmerCount);
  return (
    <div className="flex justify-start gap-5 items-start mt-10 mx-auto max-w-screen-2xl">
      {shimmerCount?.map(() => (
        <div className="">
          <RestuarantShimmer />
        </div>
      ))}
    </div>
  );
};

export default RestuarantsShimmer;
