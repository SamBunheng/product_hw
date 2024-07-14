// import { Card } from "flowbite-react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { addToCart } from "../../redux/features/cart/CartSlice";

// export function Product2Card({ image, title, price, id ,desc,qty}) {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart({image,title,price,id,desc,qty}));
//   };

//   return (
//     <Card className="max-w-sm">
//       <Link to={`/${id}`}>
//         <img
//           src={
//             image ||
//             "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAAPFBMVEX///+rq6unp6fMzMykpKTp6enx8fHU1NS0tLS6urr6+vqwsLDHx8fPz8/w8PD19fXa2trh4eHl5eXAwMAzrysnAAADpklEQVR4nO2c2ZKDIBAAE6KJmsPr//91c69yKKREHav7dctl6YVhGJTdDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZqE5LMU1XbrvVupELUe9dO9t5PsFyZfuvY1FjWRL994GRnQeRs5NOj+rNpIVCzSMER2M6GBEByM6GNHBiI4cI+mhbdtLE12SFCO3XKnH36ryJnLDQoxU/xm2usZtWIaRWu1nUyLCSNnfh6moE0eEkYvqK4lavpBgpNA368ktYsMSjKSJbqSK2LAEI7VuRB0iNizBSGUYuURsWIIRc4zEXH8lGDkacSTm6YEEI7tMX2zKiA2LMFL185HAMJJWdcj2UIQRfZCEDJEyT5JkH7BcyzBSnrujJORY9r0BSPzXaxlGHv/pz5TJQoQUn4Mw5T1KhBi5x5LseUadnYJKRlcVPLLEGNkVt7qq0rASWtOZa7nno3KM/EB5/mGF2rSRvLdqe+Z1WzZy0Moq6ujz1IaNNJoQz1CyXSO9IPIeJD5ZyXaN6KXIJx6hZLNGKpuQ/Xl8A7BVI6nNx+MAbPTJjRopjAKCdyjZqJHWOmeeSsay+W0asQcRv1CySSM3t4/7IGmHH96ikW8JwKHkNPj0Fo3o2bvBYCiRayRt84u1a/WYkOHfK9bISam92lvW0qOZvRvzZqgwINXI+5zP0rd8dIgMHxwLNdI4+zYaRF643y6QaaT4nxlaxtXo538O3LJlGmk7fetlXKW9/ybuUCLSSC8l7WZchTt7N5S4QolEI1pK2sm4Tt5C7mPLEUoEGjH3tZ++OUoAjkHiKAwINGIWx86vHxTjmUhPib0wIM+IZV/7DpOhn/bZjyvEGbHOjGffQoLIG1thQJoRV3HsFhZEXqjWolyaEUdKqvLyl89hbYUBYUbcKWlYVP1i7p5lGfFOSb05G9JlGfHZ14ZhZiWijFwnF2IJJZKM1NP7eKCFEkFGLEfbk5D1sxJBRvz3tWFohQE5Rk6etaAflPQKA2KMpJFGyJNuYUCKkdJ1tD0JXfVSjFjfj5mMbigRYmToaHsSJf+FARlGftjXhvJ9j1GEEef7MdOhvu8xijASN4i8lXy+dJNgxPhOLw7vL80FGDnO4uN7FCbAyGx3xb0KA+s3cpntysnkGUpWb6Q8zcjjP7B6I7ODEZ1VGznfjrNzW7WRfbIA6zayFBjRWeWtxhU3X+vUi92Ofoh9CR0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA2+AN7/TZH3Ls1kQAAAABJRU5ErkJggg=="
//           }
//           alt={title || "product image"}
//           className="h-[350px] object-contain"
//         />
//       </Link>
//       <a href="#">
//         <h5 className="text-3xl text-left font-semibold tracking-tight text-gray-900 dark:text-white">
//           {title || "unknown"}
//         </h5>
//       </a>
//       <div className="mb-5 mt-2.5 flex items-center">
//         <svg
//           className="h-5 w-5 text-yellow-300"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>
//         <svg
//           className="h-5 w-5 text-yellow-300"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>
//         <svg
//           className="h-5 w-5 text-yellow-300"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>
//         <svg
//           className="h-5 w-5 text-yellow-300"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>
//         <svg
//           className="h-5 w-5 text-yellow-300"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//         </svg>
//       </div>
//       <div className="flex justify-between items-center">
//         <span className="text-2xl font-bold text-gray-900 dark:text-white">
//           ${price || "0"}
//         </span>
//         <button
//           onClick={handleAddToCart}
//           className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Add to cart
//         </button>
//       </div>
//     </Card>
//   );
// }
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar, FaRegStar, FaRegHeart } from 'react-icons/fa';
import { fetchProducts, selectAllProduct } from '../../redux/features/product/ProductSlide';
import { addToCart } from '../../redux/features/cart/CartSlice';

const Product2Com = ({ image, created_by, created_at, description, name }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProduct);
  const productStatus = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === 'loading') {
    return <p>Loading...</p>;
  }

  if (productStatus === 'failed') {
    return <p>Error: {error}</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-20 mt-5">
      {products.map((product, index) => (
        <div key={index} className="w-full h-full flex justify-center items-center mb-5">
          <div className="w-[300px] h-[380px] rounded-lg border-[1px] mt-5 box-content">
            <div className="w-[300px] h-[170px] bg-orange-500 rounded-t-lg">
              <img src={product.image} alt="" className="w-[300px] h-[170px] rounded-t-lg object-cover" />
            </div>

            <div className="flex w-[300px] h-[210px] py-4 px-6 rounded-b-lg">
              <div className="w-[300px] h-[175px]">
                <div className="w-full h-12">
                  <div className="w-12 h-12 float-left">
                    <img src=".//src/assets/image/profile.png" alt="" className="rounded-full" />
                  </div>

                  <div className="w-[180px] h-12 float-right">
                    <p>{product.created_by}</p>
                    <p className="text-sm">{product.created_at}</p>
                  </div>
                </div>

                <div className="w-full pt-1 pb-1 overflow-x-hidden">
                  <p>{product.description}</p>
                </div>

                <div className="w-28 h-5 flex justify-between text-[#FFB600] float-left mt-[6px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>

                <div className="w-12 h-5 bg-[#FFB600] mt-[6px] float-left ml-6 flex items-center justify-center rounded-md">
                  <p className="text-sm text-white">4/5</p>
                </div>

                <div className="w-full h-6 my-8">
                  <div className="w-32 h-6 text-sm text-white bg-[#022278] flex justify-center rounded-md mt-11">
                    <p>{product.name}</p>
                  </div>

                  <div className="float-right -translate-y-[23px] -translate-x-3">
                    <FaRegHeart className="text-xl text-[#022278]" />
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product2Com;



