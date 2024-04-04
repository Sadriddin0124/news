"use client"
import React, { useEffect, useState } from 'react'
import { getNews } from '../api-service/home.service'
import { IHome } from '../types/home.types'
import HomeCard from '../ui/dashboard/cards/HomeCard'

const Home = () => {
    useEffect(()=> {
        getNewsValue()
    },[])
    const [news, setNews] = useState<IHome[]>([])
    const getNewsValue = async() => {
        const response = await getNews()
        console.log(response);
        setNews(response?.data?.articles)
    }
    console.log(news);
    
  return (
    <div className='flex flex-wrap w-[100%] justify-between p-[10px] gap-[20px]'>
      {
        news?.map((item,index)=> {
            return <div key={index} className='xl:w-[32%] md:w-[48%]'>
                <HomeCard item={item}/>
            </div>
        })
      }
    </div>
  )
}

export default Home
