import React from 'react';
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { selectTotalItems } from "../redux/features/cart/CartSlice";
import { getAccessToken } from "../lib/secureLocalStorage";
import { logout } from "../redux/features/user/userSlice";

export default function NavbarComponent() {
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const menuList = [
    { path: "/", title: t('home') },
    { path: "/about", title: t('about_us') },
    { path: "/product", title: t('product') },
    { path: "/service", title: t('service') },
    { path: "/product2", title: t('product2') },
    { path: "/cartservice", title: t('cart_service') },
    { path: "/register", title: t('register') },
    { path: "/login", title: t('login') },
    { path: "/verify-email", title: t('otp') },
    { path: "/table", title: t('table') },
    { path: "/pf", title: t('profile') },
  ];

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/src/assets/react.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {menuList.map((menu, index) => (
          <NavLink
            to={menu.path}
            className={({ isActive }) => isActive ? "text-blue-700" : "text-black"}
            key={index}
          >
            {menu.title}
          </NavLink>
        ))}
        <NavLink
          to="/profile"
          className={({ isActive }) => isActive ? "text-blue-700" : "text-black"}
        >
          {t('profile')}
        </NavLink>
        <button
          onClick={handleLogout}
          className="text-black hover:text-blue-700 ml-4"
        >
          {getAccessToken() ? t('logout') : t('login')}
        </button>
        <div className="ml-4">
          <button onClick={() => changeLanguage('en')} className="mr-2">EN</button>
          <button onClick={() => changeLanguage('fr')} className="mr-2">FR</button>
          <button onClick={() => changeLanguage('kh')}>KH</button>
        </div>
      </Navbar.Collapse>
      <Link to='/cart' className="relative">
        <IoCartOutline className="flex justify-center mr-3" />
        <p className="absolute -top-3 left-4 font-bold text-red-500">
          {totalItems}
        </p>
      </Link>
    </Navbar>
  );
}
