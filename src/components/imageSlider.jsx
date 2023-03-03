import React from 'react'
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = ({ images }) => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        mobileFirst:true

    };
    return (
        <>
                <Box className="tag" style={{ textAlign: "center" }}>
                    <h1>Image Gallery</h1>
                </Box>
                <Box>
                    <Slider {...settings}>
                        {images.map((item) => (
                            <Box key={item.id}>
                                <img src={item.src} alt={item.alt} width="700" height="500" />
                            </Box>
                        ))}
                    </Slider>
                </Box>
        </>
    )
}
export default ImageSlider;







// Infinite: The infinite property indicates an infinite scroll.
// The lazyLoad: Load components on demand.
// autoplay: autoplay our slideshow without any user interaction
// slidesToScroll: number of slides to scroll at once
// slideshow: number of slides to display in frame.
// dots: used for navigation.