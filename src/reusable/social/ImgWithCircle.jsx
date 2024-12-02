import React from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // 
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FD6F00',
    },
    secondary:{
      main:'#1B1B1B'
    }
  },
});

function ImageWithCircle({ children, val , heading,description}) {
  return (
    <ThemeProvider theme={theme}>
    <div className="parent flex flex-col gap-10 py-10">
    
      <div
        className="relative dark:bg-transparent rounded-full flex items-center justify-center"
      >
        <div className="relative  z-[999] flex items-center justify-center">
          {children}
        </div>
        <CircularProgress
          color="primary"
          size={110}
          variant="determinate"
          value={val}
          // className='absolute top-[50%] left-[50%] translate-x-1/2	translate-y-1/2	'
          sx={{
            '& .MuiCircularProgress-svg' : {
              backgroundColor:'#D9D9D933',
              borderRadius:'50%'
            }
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
            // borderRadius: '50%',
            
            
          }}
        />
      </div>
      <div
        className="description flex flex-col items-center justify-center mt-[5rem]"
      >
        <h1
          className="font-bold text-xl text-[#FD6F00]"
        >
          {heading}
        </h1>
        <p
          className="text-center text-[#959595]"
        >
          {description}
        </p>
      </div>
    </div>
  </ThemeProvider>
  
  );
}

export default ImageWithCircle;

