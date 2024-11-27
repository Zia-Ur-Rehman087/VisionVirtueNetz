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
  >
    <TabContext value={value}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          className="flex flex-wrap"
          textColor="#ffffff"
          sx={{
            '& .MuiTabs-flexContainer' : {
              display:'flex',
              flexWrap:'wrap',
              justifyContent:'center'
            },
            '& .MuiTabs-indicator': { display: 'none' }, 
            '& .MuiTab-root': {
              textTransform: 'none',
              transition: 'background-color 0.3s',
              bgcolor: '#1B1B1B',
              margin: 1, 
              borderRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '& .Mui-selected': {
              bgcolor: '#ff6500', 
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
        <h1>Second Slide</h1>
      </TabPanel>
      <TabPanel value="3">
        <PortImageList />
        <h1>Third Slide</h1>
      </TabPanel>
    </TabContext>
  </Box>

  );
}

