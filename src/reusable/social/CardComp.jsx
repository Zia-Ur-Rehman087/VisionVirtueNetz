import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardComp({svgUrl,title,description}) {
    return ( 
        (<>

<Card sx={{ width:300 , backgroundColor: '#FFFFFF0A', borderRadius:'20px', width:'100%'} }className='text-center background p-5 '>
    <img src={svgUrl} alt="icon" className='mx-auto'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#FD6F00'}}>
        {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#575757' }}>
       {description}
        </Typography>
      </CardContent>
    </Card>
        </>)
     );
}

export default CardComp;