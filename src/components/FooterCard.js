import React from "react";

const FooterCard = ({ footer }) => {
  const { title, children } = footer;
  return (
    <div className="px-4">
      <h3 className="text-2xl font-medium">{title}</h3>
      <ul>
        {children.map((item) => {
          return (
            <div key={item}>
              <li className="text-lg my-3 text-slate-400 hover:cursor-pointer">
                {item}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterCard;
