import React, { useEffect, useState } from "react";
import HeroProduct from "../components/HeroProduct";
import CategoriesCard from "../components/CategoriesCard";
import Featured from "../components/Featured";
import axios from "axios";

const Home = () => {
  const [cardData, setcardData] = useState([{}]);
  const [featuredCards, setfeaturedCards] = useState([{}]);

  useEffect(() => {
    async function fetchHero() {
      const response = await axios.get("http://localhost:5000/HeroProducts");
      setcardData(response.data);
    }

    async function fetchFeatured() {
      const response = await axios.get("http://localhost:5000/Products");
      setfeaturedCards(response.data)
    }
    fetchHero();
    fetchFeatured();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-[#23232f]">
        <HeroProduct cards={cardData} />
      </div>
      <div className="bg-[#23232f] w-full min-h-screen">
        <h1 className="text-white text-5xl font-[Poppins] text-center py-10 ">
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
      <div className="Page3 bg-[#23232f] py-10 w-full min-h-screen overflow-hidden">
        <div className="heading text-white text-5xl font-bold px-14 font-[Poppins]">
          <h1 className="-mb-14">Featured</h1>
        </div>
        <Featured featuredCards={featuredCards} />
      </div>
    </>
  );
};

export default Home;
