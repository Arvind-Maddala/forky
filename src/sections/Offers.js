import React from "react";

const Offers = () => {
  return (
    <div className="bg-slate-200 flex justify-between px-60 py-10 mt-10">
      <div>
        <h3 className="text-4xl font-bold text-slate-700">
          {" "}
          For better experience,
          <br />
          download Forky app now
        </h3>
      </div>
      <div className="flex">
        <img
          className="w-76 h-24"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
          alt="Google play download"
        />
        <img
          className="w-76 h-24 ml-5"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
          alt="App store download"
        />
      </div>
    </div>
  );
};

export default Offers;
