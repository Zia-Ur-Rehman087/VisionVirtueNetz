import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import AccData from './AccCardsData'
import Image from 'next/image'
// import Image from '@mui/material/Image';
export default function PortImageList() {
  return (
    <ImageList sx={{ width: 'full', height: 'full' }} cols={3} gap={20}>
      {AccData.map((item) => (
        <ImageListItem key={item.id} sx={{
          '.MuiImageListItem-root' :{
            borderRadius:'10rem',
          }
        }}>
         <Image
         width={400}
         height={400}
         src={item.img}
         alt={item.title}
         />
         <div className="content flex justify-between bg-[#1B1B1B] text-[#959595] p-2 rounded-b-lg">
          <h4>{item.name}</h4>
          <p>{item.category}</p>
         </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}