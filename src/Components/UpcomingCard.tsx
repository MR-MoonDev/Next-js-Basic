"use client";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingCard() {
    const features = [
        {
          title: "Feature 1",
          description: "This is the description for feature 1.",
          link: "https://example.com/feature1" 
        },
        {
            title: "Feature ",
            description: "This is the description for feature .",
            link: "https://example.com/feature2" 
          }, {
            title: "Feature ",
            description: "This is the description for feature .",
            link: "https://example.com/feature2" 
          }, {
            title: "Feature ",
            description: "This is the description for feature .",
            link: "https://example.com/feature2" 
          }, {
            title: "Feature ",
            description: "This is the description for feature .",
            link: "https://example.com/feature2" 
          }, {
            title: "Feature ",
            description: "This is the description for feature .",
            link: "https://example.com/feature2" 
          },
        {
          title: "Feature ",
          description: "This is the description for feature .",
          link: "https://example.com/feature3" 
        }
      ];
      
  return (
    
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
            UpComing webinars
          </h2>
          <p className="text-4xl md:text-4xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-b  from-neutral-50 to-neutral-400">
            Enhanced Your Musical journey
          </p>
          <div className="mt-20">
          <HoverEffect items={features} />
          </div>
        <div></div>
        </div>
        
      </div>
      <div className="mt-10"></div>
      <div className="mt-20 text-center">
      <div className="mt-20 text-center">
        <div className="relative group">
          <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  <Link href={"/courses "}>Virew all webinars</Link>
                </span>
                <svg
                  className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default UpcomingCard;
