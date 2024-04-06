import React, { useEffect, useState } from "react";
import Header from "./Header";
import Restuarants from "./Restuarants";

const Home = () => {
  const [location, setlocation] = useState({
    lat: 17.4485835,
    lng: 78.3908034999999,
  });
  const [searchItem, setSearchItem] = useState("");
  const [restaurantsData, setRestaurantsData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setlocation({ lat: latitude, lng: longitude });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  };
  useEffect(() => {
    if (restaurantsData && searchItem) {
      const filteredRestaurants = restaurantsData.filter((restaurant) => {
        const nameMatch =
          restaurant &&
          restaurant.info.name &&
          restaurant.info.name.toLowerCase().includes(searchItem.toLowerCase());

        const cuisinesMatch =
          restaurant &&
          restaurant.info.cuisines &&
          restaurant.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(searchItem.toLowerCase())
          );
        return nameMatch || cuisinesMatch;
      });
      setFilteredData(filteredRestaurants);
    } else {
      setFilteredData(restaurantsData);
    }
  }, [searchItem, restaurantsData]);
  return (
    <>
      <Header
        fetchUserLocation={fetchUserLocation}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <Restuarants
        location={location}
        fetchUserLocation={fetchUserLocation}
        isLoading={isLoading}
        error={error}
        setIsLoading={setIsLoading}
        setError={setError}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        restaurantsData={restaurantsData}
        setRestaurantsData={setRestaurantsData}
      />
    </>
  );
};

export default Home;
