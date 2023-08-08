import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import Filter from "./Filter";

export default function Properties() {
  const properties = [
    {
      id: "001",
      price: "3000",
      location: "Mumbai",
      address: "6, Reddy Compound, Valani Colony, Orlem, Malad",
      beds: "3",
      bathrooms: "2",
      meters: "5x7",
      type: "House",
      movein: "2023-08-10",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "002",
      price: "10000",
      location: "Delhi",
      address: "  58, New Sabzi Mandi, Trasport Centre, Azadpur",
      beds: "5",
      bathrooms: "4",
      meters: "10x15",
      type: "Bungalow",
      movein: "2023-08-11",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: "003",
      price: "3100",
      location: "Banglore",
      address: "6, Ruddrappa Compound, ,ruddrappacmpd",
      beds: "3",
      bathrooms: "2",
      meters: "5x7",
      type: "House",
      movein: "2023-08-14",
      img: "https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_1280.jpg",
    },
    {
      id: "004",
      price: "2400",
      location: "Mumbai",
      address: " 3, Shah & Nahar Indl Estate, Moses Road, Worli",
      beds: "3",
      bathrooms: "2",
      meters: "5x7",
      type: "House",
      movein: "2023-09-15",
      img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg",
    },
    {
      id: "005",
      price: "2000",
      location: "Delhi",
      address: " G 23, Palika Place, Panchkuian Road,",
      beds: "2",
      bathrooms: "1",
      meters: "3x3",
      type: "House",
      movein: "2023-08-12",
      img: "https://cdn.pixabay.com/photo/2016/04/18/08/58/new-england-1336173_1280.jpg",
    },
    {
      id: "006",
      price: "5100",
      location: "Chennai",
      address: "5, 3rd Main Road",
      beds: "3",
      bathrooms: "2",
      meters: "5x7",
      type: "Apartment",
      movein: "2023-08-10",
      img: "https://cdn.pixabay.com/photo/2020/10/05/18/43/building-5630441_1280.jpg",
    },
    {
      id: "007",
      price: "12000",
      location: "Lucknow",
      address: " 1, Peace Building, Aarey Rd",
      beds: "5",
      bathrooms: "10",
      meters: "5x7",
      type: "Bungalow",
      movein: "2023-08-14",
      img: "https://cdn.pixabay.com/photo/2016/11/29/04/57/architecture-1867426_1280.jpg",
    },
    {
      id: "008",
      price: "1500",
      location: "Mumbai",
      address: "211 street 22, sector 21000",
      beds: "2",
      bathrooms: "1",
      meters: "3x3",
      type: "House",
      movein: "2023-08-19",
      img: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "009",
      price: "3900",
      location: "Delhi",
      address: "C-446, C/446, B G Tower",
      beds: "3",
      bathrooms: "2",
      meters: "5x7",
      type: "Apartment",
      movein: "2023-08-25",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "010",
      price: "6100",
      location: "Ahmedabad",
      address: "110, 1/19, Gulalwadi, Kika Street",
      beds: "5",
      bathrooms: "5",
      meters: "6x9",
      type: "House",
      movein: "2023-09-01",
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "011",
      price: "2750",
      location: "Bareilly",
      address: "267 , Camphor, CB Ganj",
      beds: "4",
      bathrooms: "4",
      meters: "5x7",
      type: "Apartment",
      movein: "2023-09-07",
      img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "012",
      price: "20000",
      location: "Delhi",
      address: "Road no. 7, Izzatnagar",
      beds: "7",
      bathrooms: "8",
      meters: "10x15",
      type: "Bungalow",
      movein: "2023-08-20",
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "013",
      price: "21000",
      location: "Delhi",
      address: "Road no. 9, Railwy Station",
      beds: "7",
      bathrooms: "8",
      meters: "10x15",
      type: "Bungalow",
      movein: "2023-09-01",
      img: "https://i.pinimg.com/564x/95/7f/f6/957ff6f55fcbef4721df5a1af6539783.jpg",
    },
    {
      id: "014",
      price: "18000",
      location: "Delhi",
      address: "Road no. 1, Rajndranagar, Tower road",
      beds: "7",
      bathrooms: "8",
      meters: "10x15",
      type: "Bungalow",
      movein: "2023-08-21",
      img: "https://images4.alphacoders.com/829/829688.jpg",
    },
    {
      id: "015",
      price: "31000",
      location: "Delhi",
      address: "227 Almala, Izzatnagar , Shiklapur",
      beds: "7",
      bathrooms: "8",
      meters: "10x15",
      type: "Bungalow",
      movein: "2023-09-05",
      img: "https://kiiky.com/wealth/wp-content/uploads/sites/4/2021/06/xBwEvf6aL0SzEXwny7ZELdS4jjMEwEsYpbUbWJe7-800x450.jpeg",
    },
    {
      id: "016",
      price: "2999",
      location: "Mumbai",
      address: "Road no. 12, Shiklapur, Lal Bagh",
      beds: "3",
      bathrooms: "4",
      meters: "5x7",
      type: "Apartment",
      movein: "2023-08-13",
      img: "https://c4.wallpaperflare.com/wallpaper/724/723/644/interior-design-room-house-home-apartment-condo-209-desktop-background-images-wallpaper-preview.jpg",
    },
    {
      id: "017",
      price: "4200",
      location: "Delhi",
      address: " 16 Izzatnagar, Raja ki mandi ",
      beds: "4",
      bathrooms: "5",
      meters: "5x7",
      type: "Apartment",
      movein: "2023-08-14",
      img: "https://c4.wallpaperflare.com/wallpaper/874/439/754/apartment-condo-design-home-wallpaper-preview.jpg",
    },
    {
      id: "018",
      price: "3760",
      location: "Mumbai",
      address: "Sector 10, road no. 7, Swarn tower",
      beds: "5",
      bathrooms: "4",
      meters: "5x7",
      type: "Apartment",
      movein: "2023-08-18",
      img: "https://c4.wallpaperflare.com/wallpaper/864/0/42/balcony-sofas-interior-design-apartment-wallpaper-preview.jpg",
    },
  ];

  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [lessthan, setlessthan] = useState("");
  const [greaterthan, setgreaterthan] = useState("");
  const [date, setDate] = useState("");


  const [property, setProperty] = useState(properties);

  //Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    const newFilteredProperties = properties.filter((property) => {
      const locationMatch = property.location
        .toLowerCase()
        .includes(city.toLowerCase());
      const typeMatch = property.type
        .toLowerCase()
        .includes(type.toLowerCase());
      const priceMatch =
        (lessthan === "" || parseInt(property.price) <= parseInt(lessthan)) &&
        (greaterthan === "" || parseInt(property.price) >= parseInt(greaterthan));
      const propertyMoveInDate = new Date(property.movein);
      const dateMatch = !date || propertyMoveInDate >= new Date(date);
      return locationMatch && typeMatch && priceMatch && dateMatch;
    });
    setProperty(newFilteredProperties);
  };

  //handle Reset
  const handleReset = (e) => {
    e.preventDefault();
    setProperty(properties);
  };

  return (
    <>
      <div className="px-10">
        <Filter
          city={city}
          date={date}
          greaterthan={greaterthan}
          lessthan={lessthan}
          type={type}
          setCity={setCity}
          setDate={setDate}
          setgreaterthan={setgreaterthan}
          setlessthan={setlessthan}
          setType={setType}
          handleReset={handleReset}
          handleSearch={handleSearch}
        />

        <div className="flex flex-wrap justify-evenly ">
          {property.length > 0 ? (
            property.map((element) => {
              return (
                <div key={element.id}>
                  <PropertyCard
                    id={element.id}
                    price={element.price}
                    location={element.location}
                    address={element.address}
                    beds={element.beds}
                    bathrooms={element.bathrooms}
                    meters={element.meters}
                    type={element.type}
                    movein={element.movein}
                    img={element.img}
                  />
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center h-[58.5vh] text-6xl font-bold">
              <div className="text-purple-700">
                No result found ! <br /> Search again.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
