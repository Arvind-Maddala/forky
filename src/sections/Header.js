import forky from "../assets/icons/forky.png";
const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-48 py-5 shadow-md">
        <div>
          {" "}
          <img src={forky} alt="logo" className="w-16" />
        </div>
        <div>
          <ul className="flex justify-between align-bottom gap-32">
            <li className="text-slate-700 text-xl font-medium hover:text-customOrange hover:cursor-pointer">
              Search
            </li>
            <li className="text-slate-700 text-xl font-medium hover:text-customOrange">
              Offers
            </li>
            <li className="text-slate-700 text-xl font-medium hover:text-customOrange">
              Help
            </li>
            <li className="text-slate-700 text-xl font-medium hover:text-customOrange">
              Sign in
            </li>
            <li className="text-slate-700 text-xl font-medium hover:text-customOrange">
              Cart
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
