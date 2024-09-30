"use client";
import React from "react";
import courseData from "../Data/music_courses.json";
import Link from "next/link";
import { div, p } from "framer-motion/client";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  instruction: string;
  isFeature: boolean;
}
const Feature = () => {
  const featuredcourses = courseData.Courses.filter(
    (Courses: Course) => Courses.isFeature
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="text-4xl md:text-4xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-b  from-neutral-50 to-neutral-400">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredcourses.map((Courses: Course) => (
            <div key={Courses.id} className="flex gap-2 justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-zinc-900 dark-bg-white overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {Courses.title}
                  </p>
                  <p className="text-sm text-black mt-4 mb-2 dark:text-neutral-400 flex-grow">
                    {Courses.description}
                  </p>
                  <p className="relative hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                    <Link href={`/Course/${Courses.slug}`}>Learn more</Link>
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <div className="relative group">
          <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
              <div className="relative z-10 flex items-center space-x-2">
                <span className="transition-all duration-500 group-hover:translate-x-1">
                  <Link href={"/courses "}>Virew all courses</Link>
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
  );
};

export default Feature;
