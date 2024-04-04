"use client";
import { getNewsSearch } from "@/app/api-service/search.service";
import { IHome } from "@/app/types/home.types";
import HomeCard from "@/app/ui/dashboard/cards/HomeCard";
import Navbar from "@/app/ui/navbar/navbar";
import React, { useEffect, useState } from "react";
const Home = () => {
    const [news, setNews] = useState<IHome[]>([]);
  useEffect(() => {
    let id = sessionStorage.getItem("lang_id")
    getNewsValue(id);
  }, []);
  const getNewsValue = async (id: string | null) => {
    const response = await getNewsSearch(id, "");
    console.log(response);
    setNews(response?.data?.articles);
  };

  return (
    <div>
      <div className="h-[64px]">
        <Navbar />
      </div>
      <div className="flex flex-wrap w-[100%] justify-between p-[10px] gap-[20px]">
        {news?.map((item, index) => {
          return (
            <div key={index} className="xl:w-[32%] md:w-[48%]">
              <HomeCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
