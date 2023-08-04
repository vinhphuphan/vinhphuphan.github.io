/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens : {
      sm : "480px",
      md : "768px",
      lg : "976px",
      xl : "1440px",
    },
    extend: {
      gridTemplateColumns: {
        '1-2' : '1fr 2fr',
      },
      fontFamily: {
        poppins : "'Poppins', serif",
      },
      colors: {
        "primary" : 'hsl(21, 99%, 50%)',
        "darkGrey" : 'hsl(336, 7.5%, 13.1%)',
        'black' : 'hsl(0, 0%, 1%)',
        'grey' : 'hsl(0, 0%, 88%)',
        'lightOrange' : 'hsl(25, 100%, 62%)',
        'normalOrange' : 'hsl(25, 100%, 49%)',
        'white' : 'hsl(0, 0%, 100%)',
      }
    },
  }, 
  plugins: [],
}

