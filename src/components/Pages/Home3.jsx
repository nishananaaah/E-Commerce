import React from 'react'

const Home3 = () => {
  return (
    <div>
      <div className='bg-red-300 w-full h-32 m-3'><h1 className='text-white font-mono text-4xl text-center pt-8'>"A BABY IS BORN WITH A NEED TO BE LOVED AND NEVER OUTGROWS IT"</h1></div>
        <div className='flex flex-wrap gap-4 '>
            <div className='bg-toys-bg  w-[65vh] ml-2 h-[60vh] bg-no-repeat]'><h1 className='text-red-300  text-7xl text-center pt-80 font-serif p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active'>TOYS</h1></div>
           <div className='bg-cloths-bg  w-[65vh] bg-no-repeat h-[60vh]'> <h1 className='text-red-300 text-7xl text-center pt-80 font-serif p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active'>CLOTHS</h1></div>
            <div className='bg-nutrition-bg w-[66vh] bg-no-repeat h-[60vh]'><h1 className='text-red-300 text-7xl text-center pt-80 font-serif p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active'>NUTRITION</h1></div>
   </div>
      
    </div>
  )
}

export default Home3;