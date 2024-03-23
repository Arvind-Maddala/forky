import React from "react";
import RestaurantCard from "../components/RestuarantCard";
import { restaurants } from "../data";

const Restuarants = () => {
  return (
    <div className="flex justify-center mt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 ">
        {restaurants.map((restuarant, index) => {
          return (
            <div key={index}>
              <RestaurantCard restuarant={restuarant} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restuarants;
