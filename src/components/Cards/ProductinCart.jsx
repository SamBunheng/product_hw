import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/features/cart/CartSlice";

const ProductinCart = ({ image, title, price, desc, id, qty }) => {

  const dispatch = useDispatch()
  //handle increase
  const handleIncreaseQuantity = () =>{
    dispatch(increaseQuantity({id}))
  }
  // handle decrease
  const handledecreaseQuantity = () =>{
    dispatch(decreaseQuantity({id}))
  }
  //calculate total price
  const totalPrice = price * qty

  return (
    <>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Neil image"
                  height="70"
                  src={image}
                  width="70"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xl font-medium text-gray-900 dark:text-white">
                  {title}
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {desc}
                </p>
                <div className="flex mt-2 "> 
                <button onClick={()=>handledecreaseQuantity()} className="px-2 py-1 bg-slate-200 rounded-md">-</button>
                <p className="mx-2 px-2 py-1 bg-slate-200 rounded-md">{qty}</p>
                <button onClick={()=>handleIncreaseQuantity()} className="px-2 py-1 bg-slate-200 rounded-md">+</button>
              </div>
              </div>
             

              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {totalPrice}$
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductinCart;
