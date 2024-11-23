import React from "react";
import Grid from "@mui/material/Grid";
export const Test = () => {
return (
<>
<Grid container spacing={3} xs={{mxWidth:300}}>
  <Grid item xs={12} sm={6} md={4} sx={{width:1, height:1}} className="shadow shadow-lg shadow-orange-50">
item1
  </Grid>
  <Grid item xs={12} sm={6} md={4} sx={{width:1, height:1}}  className="shadow shadow-lg shadow-orange-50">
item1
  </Grid>
  <Grid item xs={12} sm={6} md={4} sx={{width:1, height:1}}  className="shadow shadow-lg shadow-orange-50">
item1
  </Grid>
  <Grid item xs={12} sm={6} md={4} sx={{width:1, height:1}}  className="shadow shadow-lg shadow-orange-50">
item1
  </Grid>
  <Grid item xs={12} sm={6} md={4} sx={{width:1, height:1}}  className="shadow shadow-lg shadow-orange-50">
item1
  </Grid>
  <Grid item xs={12} sm={6} md={4} sx={{width:1, height:1}}  className="shadow shadow-lg shadow-orange-50">
item1
  </Grid>
</Grid>
</>
      )
    }