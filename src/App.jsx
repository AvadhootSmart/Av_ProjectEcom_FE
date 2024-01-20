import React from "react";
import Navbar from "./components/navbar";
import HeroProduct from "./components/HeroProduct";
import CategoriesCard from "./components/CategoriesCard";

const Home = () => {
  const cardData = [
    {
      image: "/Mouse.png",
      category: "Mouse",
      price: 100,
      disPrice: 80,
      prodName: "Logitech Superlight Pro",
    },
    {
      image: "/Headset.png",
      category: "Headset",
      price: 150,
      disPrice: 100,
      prodName: "Logitech G Pro",
    },
    {
      image: "/Keyboard.png",
      category: "Keyboard",
      price: 225,
      disPrice: 180,
      prodName: "Logitech G Mechanical",
    },
  ];

  return (
    <>
      <div id="LandingPage" className="Page1 bg-[#23232f] w-full h-screen">
        <Navbar />
        <HeroProduct cards={cardData}/>
      </div>
      <div id="Categories" className="Page2 bg-[#23232f] w-full min-h-screen">
        <h1 className="text-white text-5xl font-[Poppins] text-center py-20 ">
          Categories
        </h1>
        <div className="cards flex flex-wrap justify-center gap-10 px-32 pb-20">
          <CategoriesCard
            image="/Keyboard.png"
            category="Keyboard"
            price="49"
          />
          <CategoriesCard image="/Mouse.png" category="Mice" price="29" />
          <CategoriesCard image="/Headset.png" category="Headset" price="22" />
          <CategoriesCard image="/Headset.png" category="Headset" price="22" />
        </div>
      </div>
    </>
  );
};

export default Home;
