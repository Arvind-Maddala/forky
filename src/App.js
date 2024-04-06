import Footer from "./sections/Footer";
import Offers from "./sections/Offers";
import Home from "./sections/Home";
import { createBrowserRouter } from "react-router-dom";
import RestuarantMenu from "./components/RestuarantMenu";


const App = () => {
  return (
    <>
      <Home />
      <Offers />
      <Footer />
    </>
  );
};
export default App;
export const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/help", element: <Footer /> },
  { path: "/restaurant/:resId", element: <RestuarantMenu /> },
]);