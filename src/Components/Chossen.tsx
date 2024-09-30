"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
    {
      title: "JavaScript for Beginners",
      description: "An introductory course to JavaScript, covering the basics of programming in the browser.",
    },
    {
      title: "Advanced React Development",
      description: "Take your React skills to the next level with this deep dive into hooks, state management, and advanced patterns.",
    },
    {
      title: "Python for Data Science",
      description: "Learn Python and its libraries to analyze and visualize data. Perfect for aspiring data scientists.",
    },
    {
      title: "Web Development Bootcamp",
      description: "A comprehensive bootcamp covering HTML, CSS, JavaScript, and more to get you started as a web developer.",
    },
    {
      title: "Introduction to Machine Learning",
      description: "A beginner-friendly course that teaches the fundamentals of machine learning using Python.",
    },
  ];
  
  
const Chossen = () => {
  return (
    <div className='text-white'>
     <StickyScroll content={content}/>
    </div>

  )
}

export default Chossen