import React, { useEffect, useState } from "react";
import { getRestuarant } from "./constants";

const useRestrauntMenu = (resId) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    let url =
      getRestuarant +
      `&lat=17.4485835&lng=78.39080349999999&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
    let data = await fetch(url);
    const json = await data.json();
    setData(json.data);
  };

  return data;
};

export default useRestrauntMenu;
