/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      smm:"0",
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize:{
      smmm:"8px",
      smm:"13px",
      lgg:"16px",
      navfont:"18px",
      smHero:"88.421441774px",
      lghero:"120px",
      pHero:"28.086148694px",
      logo:"150px",
      mdlg:"45px",
      mdsm:"32px",
      mdp:"16px",
      color:"35px",
      mdfont :"100px",
      notxl:"64px",
      textsm:"24px",
      ptextsm:"10px",
      sometxt:"21px",
      
    },
    colors: {
      'priymary': '#283618',
      'secondary-white': '#FEFAE0',
      'light-green': '#606C38',
      'light-brown': '#DDA15E',
      'dark-brown': '#BC6C25',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      playPlayfair :"Playfair Display",
      sourcePro :"Source Code Pro",
      amahricfont:"Noto Serif Ethiopic",
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'lgPadd':"86px",
        'smPadd':"24px",
        'midPadd':"32px",
        'xlPadd':"187px",
        'lgsclWD':"520px",
        'lgsclHT':"710px",
        'mdsclWD':"300px",
        'mdsclHT':"400px",
        'rotate23':"23deg",
        'iconWD':"450px",
        'iconHT':"600px",
        'iconWDsmall':"300px",
        'iconHTsmall':"400px",
        'tablet':"1000px",
        'someWD':"800px",
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

