'use client'
import Figma from '../../../../public/figma.svg'
import Grid from '@mui/material/Grid'
import ImageWithCircle from '../../(client)/components/ImgWithCircle'
export default function Counter() {


  return (
    <Grid container spacing={2} className="relative z-20">
    <Grid item xs={12} sm={6} md={2}>
      <ImageWithCircle imgSrc={Figma.src} altText="figma" />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <ImageWithCircle imgSrc={Figma.src} altText="figma" />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <ImageWithCircle imgSrc={Figma.src} altText="figma" />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <ImageWithCircle imgSrc={Figma.src} altText="figma" />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <ImageWithCircle imgSrc={Figma.src} altText="figma" />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <ImageWithCircle imgSrc={Figma.src} altText="figma" />
    </Grid>
  </Grid>
  );
}