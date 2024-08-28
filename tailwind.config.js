/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'girl-bg':"url('https://thumbs.dreamstime.com/b/pretty-baby-girl-pink-dress-cute-infant-42413014.jpg')",
        'boy-bg':"url('https://wallpapers.com/images/featured/baby-boy-pictures-dveywwbu7icdf94g.jpg')",
        'toys-bg':"url( 'https://www.parents.com/thmb/3WKij6Ke6RBX0lJBbUSc19JiLYg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_276810557-99852672e0c04074afbb33694781be15.jpg')",
        'cloths-bg':"url('https://5.imimg.com/data5/JG/OE/WT/SELLER-55213374/baby-clothes-500x500.jpg')",
        'nutrition-bg':"url('https://media.licdn.com/dms/image/C4E12AQHrthYfRv5SeQ/article-cover_image-shrink_600_2000/0/1613998744521?e=2147483647&v=beta&t=_ZnSAkG97V7HX2qEZxw6bEjnNAW9KC8trDndL6vf7tQ')",
        'surpricegender-bg':"url('https://spearmintlove.com/cdn/shop/files/mini-me-banner-1.jpg?v=1720735847&width=1600')"
      }
    },
  },
  plugins: [
  
  ],
}