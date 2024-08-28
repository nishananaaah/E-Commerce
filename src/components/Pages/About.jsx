import React from 'react';

function About() {
  return (
    <div className='flex flex-wrap items-start'>
      <div className='w-full md:w-1/2'>
        <img
          src="https://spearmintlove.com/cdn/shop/files/SIS-Sweater-Amour.jpg?crop=region&crop_height=1600&crop_left=4&crop_top=0&crop_width=1190&v=1718392349&width=480"
          className="w-[75vh]"
          alt="Baby product"
        />
      </div>
      <div className="text-center p-4 w-full md:w-1/2 md:flex md:justify-center md:items-center pr-56">
        <div>
          <br />
          <h1 className='text-4xl text-red-300 font-serif italic '>ABOUT US</h1>
          <br />
          <br />
          <p className='italic'>
            "Welcome to our baby e-commerce store, your one-stop destination for all things baby! We understand that every moment with your little one is precious,
            so we’ve carefully curated a selection of high-quality, safe, and adorable products to make parenting easier and more joyful.
            From essentials to unique gifts, we’re here to support you on this beautiful journey."
          </p>
          <br />
          <h1>. . . . . . . . </h1>
          <br />
          <br />
          <p className='italic'>
          "We offer a thoughtfully curated selection of products designed to meet the needs of both parents and their little ones. 
          From essentials like clothing and feeding supplies to unique gifts and toys, we prioritize quality, safety, and style. 
          Our mission is to make parenting a little easier by providing everything you need in one convenient place."
        </p>
        <br />
        <h1>. . . . . . . . .</h1>
        <br />
        <br />
        <br />
        <h1 className='text-red-300 italic text-2xl font-serif'>A New Baby Is Like The Beginning Of All Things-Wonder Hope,A Dream Of Possibilities</h1>
        <br />
        <h1>. . . . . . . . .</h1>
        </div>
      </div>
    </div>
  );
}

export default About;

