import React from "react";
import Box from "@mui/material/Box";
import images from "../assets/images/weatherImage.gif";

export default function Home() {
  return (
    <>
      <Box
        component="img"
        sx={{
          height: "calc(100vh - 73px)",
          width: "100vw",
        }}
        alt="Loading..."
        src={images}
      />
    </>
  );
}
