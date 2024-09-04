import React from 'react';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-12 px-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://spearmintlove.com/cdn/shop/files/SIS-Sweater-Amour.jpg?crop=region&crop_height=1600&crop_left=4&crop_top=0&crop_width=1190&v=1718392349&width=480"
          className="w-full max-w-sm rounded-lg shadow-lg"
          alt="Baby product"
        />
      </div>
      <div className="text-center p-4 w-full md:w-1/2 md:flex md:flex-col md:justify-center md:items-start md:pl-12">
        <h1 className="text-4xl text-red-500 font-serif italic mb-6">ABOUT US</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic font-serif">
          "Welcome to our baby e-commerce store, your one-stop destination for all things baby! We understand that every moment with your little one is precious, so we’ve carefully curated a selection of high-quality, safe, and adorable products to make parenting easier and more joyful. From essentials to unique gifts, we’re here to support you on this beautiful journey."
        </p>
        <hr className="border-t border-red-300 w-24 mx-auto md:mx-0 mb-6" />
        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic font-serif">
          "We offer a thoughtfully curated selection of products designed to meet the needs of both parents and their little ones. From essentials like clothing and feeding supplies to unique gifts and toys, we prioritize quality, safety, and style. Our mission is to make parenting a little easier by providing everything you need in one convenient place."
        </p>
        <hr className="border-t border-red-300 w-24 mx-auto md:mx-0 mb-6" />
        <p className="text-xl text-red-500 italic font-serif mb-6 ">
          "A New Baby Is Like The Beginning Of All Things - Wonder, Hope, A Dream Of Possibilities."
        </p>
      </div>
    </div>
  );
}

export default About;

