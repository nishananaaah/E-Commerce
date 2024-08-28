import React from 'react'

const products = [
    {
      id: 1,
      imageUrl: "https://spearmintlove.com/cdn/shop/files/Angel-Dear-Tutu-Skirt-Footballs-pink-1.png?v=1721680023&width=480",
      name: "Football Tutu Skirt,Pink",
      brand: "Brand",
      price: "$2800",
      originalPrice: "$3500"
    },
    {
      id: 2,
      imageUrl: "https://spearmintlove.com/cdn/shop/files/3-ice-skating-tulle-dress.jpg?v=1724265210&width=480",
      name: "Long Sleeve Layered Tulle Dress,Ice Skating",
      brand: "Brand",
      price: "$3200",
      originalPrice: "$4000"
    },
    {
      id: 3,
      imageUrl: "https://spearmintlove.com/cdn/shop/files/IMG-2234.jpg?crop=region&crop_height=1600&crop_left=3&crop_top=0&crop_width=1192&v=1710819225&width=480",
      name: "Mashroom Organic/T-shirt Bubble",
      brand: "Brand",
      price: "$1800",
      originalPrice: "$2500"
    },
    {
      id: 4,
      imageUrl:"https://spearmintlove.com/cdn/shop/files/IMG-7928.jpg?v=1722378498&width=480",
      name: "2-Way Zip Ruffle Footie,Footballs Pink",
      brand: "Brand",
      price: "$2800",
      originalPrice: "$3500"
    },
    {
      id: 5,
      imageUrl: "https://spearmintlove.com/cdn/shop/files/Angel-Dear-Ruffled-Peter-Pan-Collar-Bubble-With-Skirt-Ediths-Floral-2.png?v=1724111959&width=480",
      name: "Ruffled Peter Pan Collar Bubble w/Skirt,Edith's Floral",
      brand: "Brand",
      price: "$3000",
      originalPrice: "$4000"
    },
    {
      id: 6,
      imageUrl: "https://spearmintlove.com/cdn/shop/files/Photo_May_07_2024_3_26_33_PM_1.jpg?v=1721362517&width=480",
      name: "Bliss Checkboard Miniblankets",
      brand: "Brand",
      price: "$3200",
      originalPrice: "$3900"
    }
  ];
  const ProductCard = ({ product }) => (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
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
const Home5 = () => {
  return (
    <div>
         <div>
    <div className="text-center p-10">
      <h1 className="font-mono text-4xl mb-4 text-red-300">NEW ARRIVALS</h1>
      {/* <h1 className="text-3xl">Tailwind CSS</h1> */}
    </div>
    
    <ProductGrid />
    
    {/* <div className="text-center py-10 px-10">
      <h2 className="font-bold text-2xl md:text-4xl mb-4">
        Thanks to <a href="https://unsplash.com/@nixcreative" className="underline font-black">Tyler Nix</a> for those AMAZING product images!
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

export default Home5
