'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PortImageList from './AccCards'

export function Portfolio() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
    sx={{ width: '100%', typography: 'body1' }}
    className="py-[100px] md:py-[150px]"
    id='portfolio'
  >
    <TabContext value={value}>
    <div className="text-center flex flex-col gap-4 md:gap-8 pb-20px md:pb-[30px] lg:[80px]">
        <h1 className={`font-bold text-2xl dark:text-[#959595] text-[#000000] dark:text-white  text-[24px] md:text-[40px]`}>Portfolio</h1>
        </div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      
      <TabList
  onChange={handleChange}
  aria-label="lab API tabs example"
  className="flex flex-wrap"
  textColor="#ffffff"
  sx={{
    backgroundColor: {
      // xs: '#959595', // default for light mode
      // darkMode: '#919191', // for dark mode
    },
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    '& .MuiTabs-indicator': {
     display:'none' // indicator color
    },
    '& .MuiTab-root': {
      textTransform: 'none',
      transition: 'background-color 0.3s',
      bgcolor: {
        xs: '#000000',
        darkMode: '#000000',
      },
      margin: 1,
      borderRadius: '10px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .Mui-selected': {
      bgcolor: '#ff6500', // selected tab background color
      color: 'white',
      borderRadius: '10px',
    },
  }}
>
  <Tab label="All" value="1" />
  <Tab label="Mobile App" value="2" />
  <Tab label="Marketing" value="3" />
  <Tab label="Landing Page Design" value="4" />
  <Tab label="Desktop App Design" value="5" />
  <Tab label="Branding" value="6" />
</TabList>

      </Box>
      <TabPanel value="1">
        <PortImageList />
      </TabPanel>
      <TabPanel value="2">
        <PortImageList />
        {/* <h1>Second Slide</h1> */}
      </TabPanel>
      <TabPanel value="3">
        <PortImageList />
        {/* <h1>Third Slide</h1> */}
      </TabPanel>
      <TabPanel value="4">
        <PortImageList />
        {/* <h1>Third Slide</h1> */}
      </TabPanel>
      <TabPanel value="5">
        <PortImageList />
        {/* <h1>Third Slide</h1> */}
      </TabPanel>
      <TabPanel value="6">
        <PortImageList />
        {/* <h1>Third Slide</h1> */}
      </TabPanel>
    </TabContext>
  </Box>

  );
}

