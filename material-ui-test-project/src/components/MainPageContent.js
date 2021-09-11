import React from "react";
import Box from '@material-ui/core/Box';
import ImageSlider from './ImageSlider'

export default function MainPageContent() {

  return (
    <>
      <Box>
        {/* 이미지 슬라이더 나와야 하는 곳 */}
        <Box>    
          <ImageSlider/>
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
