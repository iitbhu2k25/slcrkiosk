"use client";

import React from "react";
import Image from "next/image";
import { FaEye, FaComment, FaHeart, FaCalendarAlt } from "react-icons/fa";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  views: number;
  comments: number;
  likes: number;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Ritwij Singh",
    date: "March 29, 2025",
    description:
      "Smart Laboratory on Clean Rivers developed at IIT-BHU to rejuvenate small rivers",
    image: "/slcr18.jpg",
    views: 1200,
    comments: 45,
    likes: 250,
    link: "https://www.hindustantimes.com/science/smart-laboratory-on-clean-rivers-developed-at-iit-bhu-to-rejuvenate-small-rivers-101724321658577.html",
  },
  {
    id: 2,
    title: "Ritwij Singh",
    date: "April 10, 2025",
    description: "Indo-Danish collaborative effort for river rejuvenation",
    image: "/slcr18.jpg",
    views: 950,
    comments: 30,
    likes: 180,
    link: "https://timesofindia.indiatimes.com/city/varanasi/indo-danish-collaborative-effort-for-river-rejuvenation/articleshow/112724039.cms",
  },
  {
    id: 3,
    title: "Anurag",
    date: "April 15, 2025",
    description:
      "Smart Laboratory on Clean Rivers developed at IIT-BHU to rejuvenate small rivers",
    image: "/slcr18.jpg",
    views: 1500,
    comments: 60,
    likes: 320,
    link: "https://theprint.in/india/smart-laboratory-on-clean-rivers-developed-at-iit-bhu-to-rejuvenate-small-rivers/2233572/",
  },
];

const NewsComponent: React.FC = () => {
  return (
    <section className="bg-white px-4 md:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#081f5c] text-center mb-6">
          News
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="relative bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg border border-gray-300 group"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full p-5">
                {/* Name & Date */}
                <div>
                  <p className="text-sm font-bold">{news.title}</p>
                  <p className="text-sm flex items-center gap-1 opacity-80">
                    <FaCalendarAlt /> {news.date}
                  </p>
                </div>

                {/* Clickable Headline */}
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-center my-6 hover:text-blue-300 transition"
                >
                  {news.description}
                </a>

                <div className="w-full h-[2px] bg-white mb-3"></div>

                {/* Footer */}
                <div className="flex justify-between text-sm opacity-80 mt-4">
                  <span className="flex items-center gap-1">
                    <FaEye /> {news.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComment /> {news.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart className="text-red-500" /> {news.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsComponent;
