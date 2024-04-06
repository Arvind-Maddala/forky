export const restaurantImage =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const getRestuarants =
  "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?";

export const getRestuarant =
  "https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true";

// "https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4485835&lng=78.39080349999999&restaurantId=618626&isMenuUx4=true&submitAction=ENTER"
export const filters = [
  { name: "Filter", iconType: "filter" },
  { name: "Sort By", iconType: "down" },
  { name: "Fast Delivery" },
  { name: "Ratings 4.0+" },
  { name: "Pure Veg" },
  { name: "Rs.300-Rs.600" },
  { name: "Less than Rs.300" },
];

export const footerList = [
  {
    title: "Company",
    children: [
      "About",
      "Careers",
      "Team",
      "Swiggy One",
      "Swiggy Instamart",
      "Swiggy Genie",
    ],
  },
  {
    title: "Contact us",
    children: ["Help & Support", "Partner with us", "Ride with us"],
  },
  {
    title: "Legal",
    children: ["Terms & Conditions", "Cookie Policy", "Privacy Policy"],
  },
  {
    title: "We deliver to",
    children: ["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"],
  },
];
