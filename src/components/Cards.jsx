import React from 'react'

const products = [
    {
      id: 1,
      imageUrl: "https://cribandkids.com/cdn/shop/products/VISTA23_THO_Set-1200x1262-290dd1a_0ac128ee-8cc1-4990-b770-1c2e16ded63a.jpg?v=1709761533&width=1200",
      name: "UPPAbaby Vista V2 Stroller",
      brand: "Brand",
      price: "$39999",
      originalPrice: "$45000"
    },
    {
      id: 2,
      imageUrl: "https://www.funcorp.in/cdn/shop/files/81Sr7NroqqL._SL1500_1370x.jpg?v=1690026233",
      name: "Barbie Birthday Wishes Blonde Doll Pink",
      brand: "Brand",
      price: "$1999",
      originalPrice: "$2500"
    },
    {
      id: 3,
      imageUrl: "https://spearmintlove.com/cdn/shop/products/tanbowhat.png?crop=region&crop_height=1386&crop_left=175&crop_top=0&crop_width=1034&v=1681931352&width=480",
      name: "Baby's First Hat,Tan Bow",
      brand: "Brand",
      price: "$900",
      originalPrice: "$1500"
    },
    {
      id: 4,
      imageUrl: "https://spearmintlove.com/cdn/shop/files/IMG-2555.jpg?crop=region&crop_height=1600&crop_left=4&crop_top=0&crop_width=1190&v=1710884356&width=480",
      name: "Organic Waffle Knot Bow,Little Red Heart(On Pink)",
      brand: "Brand",
      price: "$1200",
      originalPrice: "$1600"
    },
    {
      id: 5,
      imageUrl: "https://babies-nutrition.com/cdn/shop/files/497924E3-BE41-4B9A-892C-6340CF7BC51D_1024x.jpg?v=1713728879",
      name: "Kendamil First Baby Infant Milk",
      brand: "Brand",
      price: "$3895",
      originalPrice: "$4000"
    },
    {
      id: 6,
      imageUrl: "https://babies-nutrition.com/cdn/shop/files/FullSizeRender_c0634e39-8595-4cb4-9c3f-34de2f34678c_1024x.jpg?v=1711851788",
      name: "Aussie Bubs Goat Milk  Infant Formula",
      brand: "Brand",
      price: "$3500",
      originalPrice: "$4000"
    }
  ];
  
const ProductCard = ({ product }) => (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
      <a href="#">
        <img src={product.imageUrl} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">{product.price}</p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">{product.originalPrice}</p>
            </del>
            <div className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
  const ProductGrid = () => (
    <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );

function Cards() {
  return (
    <div>
        <div>
    <div className="text-center p-10 bg-red-300 m-3">
      <h1 className="font-mono text-4xl mb-4 text-white p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-gray-200 duration-200 cursor-pointer ">BEST SALES FOR YOUR BABY</h1>
      {/* <h1 className="text-2xl font-mono">collections</h1> */}
    </div>
    
    <ProductGrid />
    
    {/* <div className="text-center py-10 px-10">
      <h2 className="font-bold text-2xl md:text-4xl mb-4">
        Thanks to <a href="https://unsplash.com/@nixcreative" className="underline font-black"></a> for those AMAZING product images!
      </h2>
    </div> */}
    
    <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
    <script>
      {`
        kofiWidgetOverlay.draw('mohamedghulam', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Support me',
          'floating-chat.donateButton.background-color': '#323842',
          'floating-chat.donateButton.text-color': '#fff'
        });
      `}
    </script>
  </div>
 </div>
  )
}

export default Cards
