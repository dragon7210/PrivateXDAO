module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
   corePlugins: {
    container: true 
  },
    plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '610px',
          },
          '@screen md': {
            maxWidth: '750px',
          },
          '@screen lg': {
            maxWidth: '1000px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1316px', 
          },
        }
      })
    } 
  ],
  theme: {
    extend: {
      container: { 
        center: true,
        padding: '1rem',
       }, 
      colors: {   
        "coolGray-800":"#0A0006",   
        "coolGray-400":"#8B8B8B",   
        "coolGray-300":"#D8D8D8",     
        "coolGray-200":"#EAEAEA",      
        "coolGray-100":"#ffffff40",     
        "coolGray-50":"#F5F6FA",     
        "red-900":"#A6185E",     
        "blue-200":"#070097",     
      },
      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-400":"#EAEAEA",
      }, 
      Shadow: {
        "base":"0px 12px 50px rgba(0, 0, 0, 0.04)",
      },
      fontFamily: {
        sans: [
          '"Red Hat Display",sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }, 
      boxShadow: {
        'DEFAULT': '0px 10px 8px rgba(255, 255, 255, 0.5)',  
      },
      borderRadius: {
        'xl': '2rem', 
      }
    },
  },
  // Other stuff
};
