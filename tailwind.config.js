/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
       boxShadow: {
       
        'dual-cyan': '4px 4px 10px 0 #ffa998, -4px -4px 10px 0 #5E6282',
      },
       fontFamily: {
        'font-1': 'var(--font-1)',
        'font-2':'var(--font-2)',
        'font-3':'var(--font-3)',
        'font-4':'var(--font-4)',
        'font-5':'var(--font-5)',
        'font-6': 'var(--font-6)'
         
      },
    },
  },
  plugins: [
    
  ],
}

