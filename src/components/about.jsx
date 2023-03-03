import React from 'react'
import Box from "@mui/material/Box";
import video1 from "../assets/videos/vid1.mp4"
import ImageSlider from "./imageSlider"
import images from "./images"

const About = () => {
  return (
    <Box style={{ margin: "5px" }}>
      <video src={video1} width="600" height="300" controls="controls" autoplay="true" loop="true"/>
      <ImageSlider images={images} />
    </Box>
  )
}

export default About
