import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AccData from './AccCardsData'
// import Image from '@mui/material/Image';
export default function PortImageList() {
  return (
    <ImageList sx={{ width: 'full', height: 'full' }} cols={3} gap={20}>
      {AccData.map((item) => (
        <ImageListItem key={item.id}>
         <img
         src={item.img}
         alt={item.title}
         />
        </ImageListItem>
      ))}
    </ImageList>
  );
}