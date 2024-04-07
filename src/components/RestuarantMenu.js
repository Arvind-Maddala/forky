import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const RestuarantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  const name = resInfo?.cards[0]?.card?.card?.text;
  const menu = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const handleClick = (index) => {
    setShowIndex(index);
    if (index === showIndex) {
      setShowIndex(null);
    }
  };
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mt-10"> {name}</h2>
      <h2 className="text-2xl font-bold">
        {categories?.map((category, index) => (
          <RestuarantCategory
            category={category}
            showItems={index === showIndex ? true : false}
            handleClick={handleClick}
            index={index}
          />
        ))}
      </h2>
    </div>
  );
};

export default RestuarantMenu;
