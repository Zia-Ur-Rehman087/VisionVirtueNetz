'use client'

import Grid from '@mui/material/Grid'
import ImageWithCircle from '../../../reusable/social/ImgWithCircle'
import { Figma,Adobe,Illustrator,Pro,Photoshop } from '../../../reusable/counter'
import { useSelector } from 'react-redux'

 

 
export default function Counter() {
const theme = useSelector(state => state.theme.theme);
console.log('theme:',theme);

  return (
    <Grid container spacing={4} className="relative z-20 place-content-between pt-[70px] md:pt-[100px] w-full justify-start sm:justify-center md:justify-between">
    <Grid item xs={6} sm={6} md={3} sx={{maxWidth:300}}>
      <ImageWithCircle val='100' heading='100%' description='Figma' className='flex items-center justify-center bg-transparent'>
        <Figma  fillColor={theme === "light" ? "#fd6f00" :"#959595"}/>
      </ImageWithCircle>
    </Grid>
    <Grid item xs={6} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle  val='100' heading='100%' description='Adobe XD'>
      <Adobe fillColor={theme === "light" ? "#fd6f00" :"#959595"} />
    
      </ImageWithCircle>
    </Grid>
    <Grid item xs={6} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle  val='85' heading='85%' description='Adobe Photoshop'>
      <Illustrator fillColor={theme === "light" ? "#fd6f00" :"#959595"} />
      </ImageWithCircle>
    </Grid>
    <Grid item xs={6} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle  val='60' heading='60%' description='Adobe illustrator'>
      <Pro fillColor={theme === "light" ? "#fd6f00" :"#959595"} />
      </ImageWithCircle>
    </Grid>
    <Grid item xs={6} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle   val='70' heading='70%' description='Adobe Premiere'>
      <Photoshop fillColor={theme === "light" ? "#fd6f00" :"#959595"} />
      </ImageWithCircle>
    </Grid>
  </Grid>
  );
}