import { Card } from "flowbite-react";
import ProductinCart from "../../components/Cards/ProductinCart";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAll,
  selectCartItems,
} from "../../redux/features/cart/CartSlice";

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const handleRemoveAll = () => {
    dispatch(removeAll());
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };
  const totalPrice = calculateTotalPrice();

  return (
    <section className="flex justify-center mt-2 overflow-scroll h-[80vh]">
      <section className="max-w-sm w-1/2 bg-slate-50 p-5 rounded-lg">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Customers
          </h5>
          <button
            onClick={handleRemoveAll}
            className="text-sm font-medium text-red hover:underline dark:text-cyan-500"
          >
            Delete all
          </button>
        </div>
        {cartItems.map((cartItem, index) => {
          return (
            <ProductinCart
              key={index}
              image={cartItem.image}
              title={cartItem.title}
              desc={cartItem.desc}
              id={cartItem.id}
              price={cartItem.price}
              qty={cartItem.qty}
            />
          );
        })}

        <div className="flex justify-between">
          
          <div className=" text-xl font-bold text-gray-900 dark:text-white">
            Total Price:
          </div>
          <div className=" text-xl font-bold text-gray-900 dark:text-white">
            {totalPrice}$
          </div>
        </div>
        <button className= "mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Cash out
        </button>
      </section>
    </section>
  );
}
