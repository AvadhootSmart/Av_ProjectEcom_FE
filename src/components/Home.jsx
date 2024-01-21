import React from "react";
import Navbar from "./navbar";
import HeroProduct from "./HeroProduct";
import CategoriesCard from "./CategoriesCard";
import Featured from "./Featured";
import Footer from "./Footer";

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

  const featuredCardData = [
    {
      image: "/Mouse.png",
      name: "Superlight Pro",
      company: "Logitech",
      price: 29,
    },
    {
      image: "/Headset.png",
      name: "Superlight Pro",
      company: "Logitech",
      price: 29,
    },
    {
      image: "/Keyboard.png",
      name: "Superlight Pro",
      company: "Logitech",
      price: 29,
    },
    {
      image: "/Mouse.png",
      name: "Superlight Pro",
      company: "Logitech",
      price: 29,
    },
  ];

  return (
    <>
      <div id="LandingPage" className="bg-[#23232f] w-full h-screen">
        <Navbar />
        <HeroProduct cards={cardData} />
      </div>
      <div id="Categories" className="bg-[#23232f] w-full min-h-screen">
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
      <div
        id="Featured"
        className="Page3 bg-[#23232f] py-10 w-full min-h-screen overflow-hidden"
      >
        <div className="heading text-white text-5xl font-bold px-14 font-[Poppins]">
          <h1 className="-mb-14">Featured</h1>
        </div>
        <Featured featuredCards={featuredCardData} />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
