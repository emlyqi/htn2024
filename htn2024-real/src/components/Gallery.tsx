import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Item } from "@radix-ui/react-toggle-group";

const Gallery = () => {
  return (
    <ImageList sx={{ width: "100%", maxWidth:"75rem", marginTop: "2rem"}} cols={7} rowHeight={220} gap={56}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=300rem&h=300&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{
              borderRadius: "8px",
              border: "8px solid white",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Gallery;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  }
];