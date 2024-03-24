import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/RestuarantCard";
import Button from "../components/Button";
import { filters, getRestuarants } from "../utils/constants";

const Restuarants = ({
  location,
  fetchUserLocation,
  isLoading,
  error,
  setIsLoading,
  setFilteredData,
  filteredData,
  restaurantsData,
  setRestaurantsData,
}) => {
  const fetchData = async () => {
    try {
      let fetchURL = getRestuarants + `lat=${location.lat}&lng=${location.lng}`;
      const data = await fetch(fetchURL);
      const json = await data.json();
      const restaurantsData =
        json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
          .restaurants;

      setRestaurantsData(restaurantsData);
      setFilteredData(restaurantsData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  useEffect(() => {
    if (location.lat !== undefined && location.lng !== undefined) {
      fetchData();
    }
  }, [location]);

  const handleFilterClick = async (filterName) => {
    try {
      let filteredRestaurants = restaurantsData;

      switch (filterName) {
        case "Fast Delivery":
          filteredRestaurants = filteredRestaurants.filter((restaurant) => {
            return restaurant.info.sla.deliveryTime <= 22;
          });
          break;
        case "Ratings 4.0+":
          filteredRestaurants = filteredRestaurants.filter((restaurant) => {
            return restaurant.info.avgRating >= 4;
          });
          break;
        case "Pure Veg":
          filteredRestaurants = filteredRestaurants.filter(
            (restaurant) => restaurant.info.veg
          );
          break;
        case "Rs.300-Rs.600":
          filteredRestaurants = filteredRestaurants.filter((restaurant) => {
            let cost = parseInt(restaurant.info.costForTwo.match(/\d+/)[0]);
            return cost >= 300 && cost <= 600;
          });
          break;
        case "Less than Rs.300":
          filteredRestaurants = filteredRestaurants.filter((restaurant) => {
            let cost = parseInt(restaurant.info.costForTwo.match(/\d+/)[0]);
            return cost < 300;
          });
          break;
        default:
          break;
      }

      setFilteredData(filteredRestaurants);
    } catch (error) {
      console.error("Error filtering restaurants:", error);
    }
  };

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : restaurantsData ? (
          <>
            <div className="flex justify-start flex-col items-start mt-10 mx-auto max-w-screen-2xl">
              <div className="flex gap-x-2">
                {filters.map((filter) => {
                  return (
                    <div key={filter.name}>
                      {" "}
                      <Button
                        filter={filter}
                        onClick={() => handleFilterClick(filter.name)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center flex-col items-center mt-10 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 max-w-screen-2xl">
                {filteredData?.map((restuarant, index) => {
                  return (
                    <div key={index}>
                      <RestaurantCard restuarant={restuarant} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <p>No restaurants available.</p>
        )}
      </div>
    </>
  );
};

export default Restuarants;
