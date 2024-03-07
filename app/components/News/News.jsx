import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className="w-full h-[316px] bg-white p-7 rounded-3xl flex flex-col gap-4">
        <div className="flex gap-4 items-center">
            <div className="w-5 h-9 rounded-md bg-[#FF9159]"></div>
            <p className="text-[#06080F] text-2xl font-semibold">Sắp diễn ra</p>
        </div>
        <div className="w-full h-4/5 pt-8">
            <div className="carousel carousel-end rounded-box w-full h-full gap-8">
              <div className="carousel-item w-[30%]">
                  <NewsCard/>
              </div>
              <div className="carousel-item w-[30%]">
                <NewsCard/>
              </div>
              <div className="carousel-item w-[30%]">
                <NewsCard/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default News
