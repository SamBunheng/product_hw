import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../redux/features/cart/CartSlice";

export default function NavbarComponent() {
  const totalItems = useSelector(selectTotalItems);

  const menuList = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About Us" },
    { path: "/product", title: "Product" },
    { path: "/service", title: "Service" },
    { path: "/product2", title: "Product2" },
    { path: "/register", title: "Register" },
    { path: "/table", title: "Table" },
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
