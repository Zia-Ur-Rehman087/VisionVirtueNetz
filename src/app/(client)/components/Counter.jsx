'use client'
import Figma from '../../../../public/figma.svg'
import Grid from '@mui/material/Grid'
import ImageWithCircle from '../../../../reusable/ImgWithCircle'
import Adobe from  '../../../../public/adobe.svg'
import Ps from  '../../../../public/ps.svg'
import Pr from  '../../../../public/pr.svg'
import ai from '../../../../public/ai.svg'
export default function Counter() {


  return (
    <Grid container spacing={2} className="relative z-20 place-content-between">
    <Grid item xs={12} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle imgSrc={Figma.src} altText="figma"  val='100' heading='100%' description='Figma'/>
    </Grid>
    <Grid item xs={12} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle imgSrc={Adobe.src} altText="Adobe" val='100' heading='100%' description='Adobe XD'/>
    </Grid>
    <Grid item xs={12} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle imgSrc={Ps.src} altText="photoShop" val='85' heading='85%' description='Adobe Photoshop'/>
    </Grid>
    <Grid item xs={12} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle imgSrc={ai.src} altText="ai" val='60' heading='60%' description='Adobe illustrator'/>
    </Grid>
    <Grid item xs={12} sm={6} md={2} sx={{maxWidth:300}}>
      <ImageWithCircle imgSrc={Pr.src} altText="pr" val='70' heading='70%' description='Adobe Premiere'/>
    </Grid>
  </Grid>
  );
}