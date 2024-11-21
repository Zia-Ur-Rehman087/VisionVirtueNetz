'use client'
import CardComp from '../../../../reusable/CardComp'
import icon from '../../../../public/user.svg'
import Grid from '@mui/material/Grid';
function ServiceCards() {
    return ( 
        <>
   <div className="container items-center justify-center py-5 md:py-10">
   <div className="text-center ">
        <h1 className="font-bold text-2xl">Services</h1>
        <p className="text-[#707070]">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
        </div>
   </div>
<Grid container spacing={2}>
<Grid item xs={12} sm={6} md={4}>
<CardComp svgUrl={icon.src} title='App Design' description='Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur'/>
</Grid>
<Grid item xs={12} sm={6} md={4}>
<CardComp svgUrl={icon.src} title='App Design' description='Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur'/>
</Grid>
<Grid item sm={12} xs={6} md={4}>
<CardComp svgUrl={icon.src} title='App Design' description='Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur'/>
</Grid>
<Grid item xs={12} sm={6} md={4}>
<CardComp svgUrl={icon.src} title='App Design' description='Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur'/>
</Grid>
<Grid item xs={12} sm={6} md={4}>
<CardComp svgUrl={icon.src} title='App Design' description='Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur'/>
</Grid>
<Grid item  xs={12} sm={6} md={4}>
<CardComp svgUrl={icon.src} title='App Design' description='Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur'/>
</Grid>
</Grid>

        </>
     );
}

export default ServiceCards;