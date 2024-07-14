import React from "react";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";

const CartServiceComponent = ({
  image,
  created_by,
  created_at,
  description,
  category,
}) => {
  return (
    <div className="w-[300px] h-[380px] rounded-lg border-[1px] mt-5 box-content">
      <div className="w-[300px] h-[170px] bg-orange-500 rounded-t-lg">
        <img
          src={
            image ||
            "https://endlessicons.com/wp-content/uploads/2012/11/image-holder-icon-614x460.png"
          }
          alt=""
          className="w-[300px] h-[170px] rounded-t-lg object-cover"
        />
      </div>
      <div className="flex w-[300px] h-[210px] py-4 px-6 rounded-b-lg">
        <div className="w-[300px] h-[175px]">
          <div className="w-full h-12">
            <div className="w-12 h-12 float-left">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="w-[180px] h-12 float-right">
              <p>{created_by}</p>
              <p className="text-sm">
                {new Date(created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="w-full pt-1 pb-1 overflow-x-hidden">
            <p>{description}</p>
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
              <p>{category}</p>
            </div>
            <div className="float-right -translate-y-[23px] -translate-x-3">
              <FaRegHeart className="text-xl text-[#022278]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartServiceComponent;
