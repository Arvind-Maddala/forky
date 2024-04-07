import React, { useState } from "react";
import { restaurantImage } from "../utils/constants";

const RestuarantItemsList = ({ items }) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (itemId) => {
    setExpandedDescriptions({
      ...expandedDescriptions,
      [itemId]: !expandedDescriptions[itemId],
    });
  };

  return (
    <div className="text-left mt-5">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="px-2 m-2 border-b-2 flex justify-between py-4"
        >
          <div>
            <div className="flex flex-col justify-start">
              <span className="text-xl font-semibold ">
                {item.card.info.name}
              </span>
              <span className="text-lg font-semibold mb-2">
                &#8377; {item.card.info.price / 100}
              </span>
              <span className=" font-normal">
                {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                  <div className="flex">
                    <span className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#116649"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-lg mr-1 font-medium">
                      {item?.card?.info?.ratings?.aggregatedRating?.rating}
                    </span>
                    <span className="text-lg text-gray-500">
                      {" "}
                      (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </span>
                  </div>
                )}
              </span>
            </div>
            <p className=" text-xl font-light my-6 w-11/12">
              {expandedDescriptions[item.card.info.id] ? (
                item?.card?.info.description
              ) : (
                <span>
                  {item?.card?.info?.description &&
                    item?.card?.info?.description.slice(0, 150)}
                  {item?.card?.info?.description &&
                    item?.card?.info?.description.length > 150 &&
                    "... "}
                </span>
              )}
              {item?.card?.info?.description?.length > 150 && (
                <button
                  className="text-gray-600 font-medium"
                  onClick={() => toggleDescription(item.card.info.id)}
                >
                  {expandedDescriptions[item.card.info.id]
                    ? "show less"
                    : "show more"}
                </button>
              )}
            </p>
          </div>
          <div>
            {item.card.info.imageId ? (
              <div className="w-60 relative">
                <img
                  src={restaurantImage + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="object-cover rounded-xl"
                />
                <span className="button text-[#1BA672] bg-white shadow-lg px-10 py-2 rounded-lg absolute top-32 left-14 cursor-pointer">
                  {" "}
                  ADD{" "}
                </span>
              </div>
            ) : (
              <span className="button text-[#1BA672] bg-white shadow-lg px-10 py-2 rounded-lg my-12 block border-2 cursor-pointer">
                {" "}
                ADD{" "}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestuarantItemsList;
