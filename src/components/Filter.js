import React from "react";

export default function Filter(props) {
  const {
    city,
    date,
    greaterthan,
    lessthan,
    type,
    setCity,
    setDate,
    setgreaterthan,
    setlessthan,
    setType,
    handleSearch,
    handleReset,
  } = props;
  return (
    <>
      {/* Filter  */}
      <div className=" sticky flex flex-col  my-2 justify-start px-[4.8rem] ">
        <div
          style={{ color: "rgb(118 18 194)", fontFamily: "sans-serif" }}
          className="float-left text-5xl my-7  font-bold"
        >
          Search properties to rent
        </div>
        <div className=" flex items-end py-4 justify-between bg-white  shadow-md px-4 rounded-lg ">
          {/* Location  */}
          <div className="flex flex-col items-start border-r-[1.5px]  border-r-gray-400 border-opacity-50 pr-8 ">
            <div className="text-gray-400 font-bold text-lg mb-2">
              <i class="fa-solid fa-location-dot"></i> Location
            </div>
            <div>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter a city"
                className="px-3 py-[0.6rem] w-32 text-gray-500 rounded-md border-[3px] border-gray-400  "
              />
            </div>
          </div>

          {/* Move in date  */}
          <div className="flex flex-col items-start border-r-[1px] border-r-gray-400 border-opacity-50 pr-8">
            <div className="text-gray-400 font-bold text-lg mb-2">
              <i class="fa-solid fa-calendar-days"></i> Select move in date
            </div>
            <div>
              <input
                type="date"
                className="px-3 py-[0.6rem] text-gray-500 rounded-md border-[3px] border-gray-400 w-[115%]"
                placeholder="Select move in date "
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
          </div>
          {/* Price range  */}
          <div className="flex flex-col items-start border-r-[1px] border-r-gray-400 border-opacity-50 pr-8">
            <div className="text-gray-400 font-bold text-lg mb-2">
              <i class="fa-solid fa-dollar-sign"></i> Price
            </div>
            <div className="flex space-x-2 ">
              <div>
                <input
                  type="text"
                  onChange={(e) => setgreaterthan(e.target.value)}
                  className="px-3 py-[0.6rem] text-gray-500 rounded-md border-[3px] border-gray-400 w-32 "
                  placeholder="Greater than"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setlessthan(e.target.value)}
                  className="px-3 text-gray-500 py-[0.6rem] rounded-md border-[3px] border-gray-400 w-32 "
                  name=""
                  placeholder="Less than"
                  id=""
                />
              </div>
            </div>
          </div>
          {/* Property type  */}
          <div className="flex flex-col items-start border-r-[1px] border-r-gray-400 border-opacity-50 pr-8">
            <div>
              <div className="text-gray-400 font-bold text-lg mb-2">
                <i class="fa-solid fa-house"></i> Property Type
              </div>

              <div>
                <select
                  name="type"
                  id="type"
                  onClick={(e) => setType(e.target.value)}
                  className=" font-semibold  pl-2 py-[0.6rem]  border-[3px] border-gray-400 text-gray-500  w-40 rounded-md"
                >
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="">none</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div>
              <button
                disabled={
                  city === "" &&
                  date === "" &&
                  greaterthan === "" &&
                  lessthan === "" &&
                  type === ""
                }
                onClick={handleSearch}
                className=" m-auto  w-[5.7rem] font-semibold hover:transition-all hover:duration-500 ml-4 border border-white px-4 py-[0.4rem] bg-purple-600 text-white  rounded-md  hover:bg-white hover:border-gray-500 hover:text-purple-700 text-lg"
              >
                Search
              </button>
            </div>
            <div>
              <button
                onClick={handleReset}
                className=" w-[5.7rem] mr-3 font-semibold hover:transition-all hover:duration-500 ml-4 border border-white px-4 py-[0.4rem] bg-purple-600 text-white  rounded-md  hover:bg-white hover:border-gray-500 hover:text-purple-700 text-lg"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
