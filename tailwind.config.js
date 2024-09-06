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
        'toys-bg':"url( 'https://lioree.com/cdn/shop/files/Lioree1-3366-0309.jpg?v=1691395265&width=800')",
        'cloths-bg':"url('https://lioree.com/cdn/shop/files/Lioree1-2103-0083_405ad750-44d3-4944-a3b4-b10ac4b1db36.jpg?v=1690809228&width=800')",
        'nutrition-bg':"url('https://lioree.com/cdn/shop/files/Lioree1-2057-0078.jpg?v=1691488486&width=800')",
        // 'surpricegender-bg':"url('https://spearmintlove.com/cdn/shop/files/mini-me-banner-1.jpg?v=1720735847&width=1600')"
      }
    },
  },
  plugins: [
  
  ],
}