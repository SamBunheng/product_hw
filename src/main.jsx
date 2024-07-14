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
import ProductDetail2 from "./pages/ProductDetail2.jsx";
import Cart from "./pages/cart/Cart.jsx";
import VerifyEmail from "./pages/verifyemail.jsx";
import Product2 from "./pages/Product2.jsx";
import { CartService } from "./pages/CardService.jsx";
import UserProfile from "./pages/pf.jsx";
import LoginForm from "./pages/LoginForm.jsx";
import './i18n'; // Import the i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the configured i18n instance

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
        path: "/cartservice",
        element: <CartService/>,
      },
      {
        path: ":id",
        element: <ProductDetail2 />,
      },
      {
        path: "/pf",
        element: <UserProfile />,
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
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <I18nextProvider i18n={i18n}> */}
        <RouterProvider router={router} />
      {/* </I18nextProvider> */}
    </Provider>
  </React.StrictMode>
);
