import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import MainLayout from "./components/MainLayout.jsx";
import Service from "./pages/Service.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Register from "./pages/Register.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { Table } from "flowbite-react";
import Product2 from "./pages/Product2.jsx";
import ProductDetail2 from "./pages/ProductDetail2.jsx";
import Cart from "./pages/cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/product2",
        element: <Product2/>,
      },
      {
        path: ":id",
        element: <ProductDetail2 />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/Register",
    element: <Register />,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

