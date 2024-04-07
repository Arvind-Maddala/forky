import React from "react";
import RestuarantShimmer from "./RestuarantShimmer";

const RestuarantsShimmer = () => {
  let shimmerCount = new Array(4).fill(null);
  console.log(shimmerCount);
  return (
    <div className="flex justify-start gap-5 items-start mt-10 mx-auto max-w-screen-2xl">
      <div>
        {shimmerCount?.map(() => (
          <div className="m-10">
            <RestuarantShimmer />
          </div>
        ))}
      </div>
      <div>
        {shimmerCount?.map(() => (
          <div className="m-10">
            <RestuarantShimmer />
          </div>
        ))}
      </div>
      <div>
        {shimmerCount?.map(() => (
          <div className="m-10">
            <RestuarantShimmer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestuarantsShimmer;
