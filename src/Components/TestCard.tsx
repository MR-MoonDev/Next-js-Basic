'use client'
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const quotes= [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      name: "Franklin D. Roosevelt",
      title: "32nd U.S. President"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      name: "Winston Churchill",
      title: "Former Prime Minister of the UK"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      name: "John Lennon",
      title: "Musician and Singer"
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      name: "Albert Einstein",
      title: "Theoretical Physicist"
    }
  ];
  
function TestCard() {
  return (
    <div className=' justify-center  h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col  overflow-hidden'>
      <h2 className="text-4xl md:text-4xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-b my-10 from-neutral-50 to-neutral-400">Here our harmoney: voices of Success</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
        <InfiniteMovingCards
        items={quotes}
        direction="right"
        speed="slow"
      />      
        </div>
      </div>
    </div>
  )
}

export default TestCard
