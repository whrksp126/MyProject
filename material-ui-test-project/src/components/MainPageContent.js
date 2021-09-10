import React from "react";
import Box from '@material-ui/core/Box';
import Slider from "react-slick";

export default function MainPageContent() {
    const settings = {
      // className: "slider variable-width",
      // dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };

  return (
    <>
      <Box>

        <Box >    
          <Box>
            <Slider display="flex" justifyContent="center" alignItems="center" {...settings}>
              <Box border={1} style={{ width: 100 }}>
                <Box>100</Box>
              </Box>
              <Box border={1} style={{ width: 200 }}>
                <Box>200</Box>
              </Box>
              <Box border={1} style={{ width: 75 }}>
                <Box>75</Box>
              </Box>
              <Box border={1} style={{ width: 300 }}>
                <Box>300</Box>
              </Box>
              <Box border={1} style={{ width: 225 }}>
                <Box>225</Box>
              </Box>
              <Box border={1} style={{ width: 175 }}>
                <Box>175</Box>
              </Box>
            </Slider>
          </Box>
        </Box>







        <Box>
          <Box>RecommendItem</Box>
          <Box>ItemTag</Box>
          <Box>Items</Box>    
        </Box>
      </Box>
    </>
  )
}
