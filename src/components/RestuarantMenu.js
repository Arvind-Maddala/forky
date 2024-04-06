import React, { useEffect, useState } from "react";
import { getRestuarant } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const name = resInfo?.cards[0]?.card?.card?.text;
  const menu = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log(menu);

  const { resId } = useParams();
  console.log(resInfo);
  const fetchRestuarant = async () => {
    let url =
      getRestuarant +
      `&lat=17.4485835&lng=78.39080349999999&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
    let data = await fetch(url);
    const json = await data.json();
    setResInfo(json.data);
  };
  useEffect(() => {
    fetchRestuarant();
  }, []);

  return (
    <div className="flex justify-start flex-col items-start mt-10 mx-auto max-w-screen-2xl">
      <h2 className="text-3xl font-bold"> {name}</h2>
      <h2 className="text-2xl font-bold"> Deals for you</h2>
      <h2 className="text-2xl font-bold"> Top picks</h2>
      <h2 className="text-2xl font-bold"> Menu</h2>
    </div>
  );
};

export default RestuarantMenu;
