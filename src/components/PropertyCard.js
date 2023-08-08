import React from "react";
import bed from "../assets/img/bed.png";
import room from "../assets/img/room.png";
import bathroom from "../assets/img/bathroom.png";

export default function PropertyCard(props) {
  const {
    price,
    location,
    address,
    beds,
    bathrooms,
    meters,
    type,
    movein,
    img,
    id,
  } = props;

  // Address
  const theaddress = address.slice(0, 40);

  // Price
  const formattedPrice = parseInt(price).toLocaleString();

  return (
    <div
      className="my-10 shadow-md propertyCard flex flex-col items-start w-[25vw] bg-transparent rounded-lg bg-white "
      key={id}
    >
      {/* Image */}
      <div className="img">
        <img src={`${img}`} className="rounded-t-lg h-[29vh] w-[25vw]" alt="" />
      </div>
      {/* Property type */}
      <div className="float-right ml-[18.3vw] mt-[-15px] z-20 flex justify-center px-2 py-1 min-w-[4.5rem] bg-purple-600 font-semibold text-white rounded-md ">
        {type}
      </div>
      {/* Property Info */}
      <div className="propertyInfo mx-5 my-4 flex w-[100%] space-y-1 flex-col items-start">
        <div className="flex">
          {/* Price */}
          <div className="">
            <div>
              <span className="text-purple-500 font-bold text-xl">
                ${formattedPrice}
              </span>
              <span className="text-gray-400 ml-[2px]  font-semibold text-sm">
                /month
              </span>
            </div>
          </div>
          <div className="ml-[11vw]">
            <button className="border border-gray-400  text-purple-500 rounded-[55%] px-[0.6rem] py-1 hover:text-white  hover:bg-purple-500">
              <i className="text-sm fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
        {/* City */}
        <div className="">
          <div className="text-xl font-bold">{location}</div>
        </div>
        {/* Address */}
        <div className="text-gray-400 text-sm font-semibold">
          <div>{theaddress}</div>
        </div>
        {/* Move in date */}
        <div className="text-gray-400 text-xs font-semibold">
          <div>
            {movein}{" "}
            <i className="fa-solid text-[0.78rem] fa-calendar-days ml-1 "></i>
          </div>
        </div>
        <div>
          <hr className="border-gray-300 my-2 w-[22vw]" />
        </div>
        {/* Property features */}
        <div className="propertyFeatures flex w-[90%] justify-between items-center ">
          {/* Beds */}
          <div>
            <div className="flex items-center">
              <div>
                {" "}
                <img
                  src={bed}
                  className="h-10 w-10 mr-1"
                  alt=""
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(41%) sepia(98%) saturate(5865%) hue-rotate(264deg) brightness(101%) contrast(99%)",
                  }}
                />
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {beds} Beds
              </div>
            </div>
          </div>
          {/* Bathroom */}
          <div>
            <div className="flex items-center">
              <div>
                {" "}
                <img
                  src={bathroom}
                  className="h-6 w-7 mr-1"
                  alt=""
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(41%) sepia(98%) saturate(5865%) hue-rotate(264deg) brightness(101%) contrast(99%)",
                  }}
                />
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {bathrooms} Bathrooms
              </div>
            </div>
          </div>
          {/* Room Area */}
          <div>
            <div className="flex items-center">
              <div>
                {" "}
                <img
                  src={room}
                  className="h-[1.4rem] w-[1.4rem] mr-1"
                  alt=""
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(41%) sepia(98%) saturate(5865%) hue-rotate(264deg) brightness(101%) contrast(99%)",
                  }}
                />
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {meters} m2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
