 ```
 jsx
   <ThemeProvider theme={theme}>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img 
          src={imgSrc} 
          alt={altText} 
          style={{
            backgroundColor: 'black',
            borderRadius: '50%',
            padding: '20px',
            margin: 'auto',
          }} 
        />
        <CircularProgress 
          color="primary" 
          size={110} 
          variant="determinate" 
          value={50}
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
    </ThemeProvider>