import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import DetailProduct from "./pages/DetailProduct";
import Wishlist2 from "./pages/Wishlist";
import Wishlist from "./components/wishlist/Wishlist";
import CheckOut from "./components/checkOut/checkOut";
export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      
      },
      {
        path:'wishlist',
        element:<Wishlist2/>
      },
     { path:'wishlist2',
      element:<Wishlist/>,
      children:[
        { path:'checkOut',
        element:<CheckOut/>}]
    },
     
    ],
  },
]);
