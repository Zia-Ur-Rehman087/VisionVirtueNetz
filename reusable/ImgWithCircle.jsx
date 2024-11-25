import React from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // Corrected import
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
    },
    secondary:{
      main:'#1B1B1B'
    }
  },
});

function ImageWithCircle({ imgSrc, altText , val , heading,description}) {
  return (
    <ThemeProvider theme={theme}>
  <div className="parent py-10">

        <div style={{ position: 'relative', textAlign: 'center',zIndex:5}} className='bg-[#1B1B1B]dark:bg-transparent'>
        <img 
          src={imgSrc} 
          alt={altText} 
          style={{
            position: 'static',
            backgroundColor: 'black !important',
            borderRadius: '50%',
            padding: '20px',
            margin: 'auto',
          }} 
          className='!z-20'
        />
        <CircularProgress 
          color="primary" 
          size={110} 
          variant="determinate" 
          value={val}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            backgroundColor:'#1B1B1B',
            borderRadius:'50%'
          }}
        />
      </div>
<div className="descriptio flex flex-col items-center justify-center" style={{marginTop:25}}>
<h1 className='font-bold text-xl' style={{color:'#ff4709'}}>{heading}</h1>
<p className="description text-center" style={{color:'#959595'}}>{description}</p>
</div>
      </div>
    </ThemeProvider>
  );
}

export default ImageWithCircle;

