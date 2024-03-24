import React from "react";
import { footerList } from "../utils/constants";
import logo from "../assets/icons/forky.png";
import FooterCard from "../components/FooterCard";
const Footer = () => {
  const column1 = footerList.slice(0, 1);
  const column2 = footerList.slice(1, 3);
  const column3 = footerList.slice(3, footerList.length);

  return (
    <footer className="bg-gray-950  pt-16 py-10">
      <div className="flex justify-center gap-20">
        <div>
          <div className="flex items-end pb-4">
            <img src={logo} alt="logo" className="w-16" />
            <span className="text-6xl font-bold pl-2 text-white"> Forky</span>
          </div>
          <div className="text-xl text-slate-400">
            {" "}
            &#169; 2024 Bundl Technologies
            <br />
            Pvt. Ltd
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-10 text-white">
          <div>
            {column1.map((item, index) => (
              <FooterCard key={index} footer={item} />
            ))}
          </div>
          <div>
            {column2.map((item, index) => (
              <div
                key={index}
                className={index !== column2.length - 1 ? "mb-10" : ""}
              >
                <FooterCard footer={item} />
              </div>
            ))}
          </div>
          <div>
            {column3.map((item, index) => (
              <FooterCard key={index} footer={item} />
            ))}
          </div>
        </div>
      </div>
      <div className=" text-2xl text-slate-200 flex justify-center mt-10">
        {" "}
        Made with{" "}
        <span role="img" aria-label="heart" className="text-red-500 mx-2">
          {" "}
          ❤️
        </span>{" "}
        by Aravind Maddala
      </div>
    </footer>
  );
};

export default Footer;
