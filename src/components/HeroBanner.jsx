import React from 'react'
import {Box , Stack , Typography , Button} from "@mui/material"

import HeroBannerImg from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{mt : '70px',
    ml:{sm:'50px'}}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight={700} 
      sx={{ fontSize : {lg : '44px' , xs:'40px'} }} mb="23px" mt="30px">Sweat , Smile <br /> and Repeat
      </Typography>

      <Typography fontSize='22px' lineHeight="35px" mb={4}>Check out the most effectie exercises
      </Typography>

      <Button variant="contained" color="error" href
      ="#exercises" sx={{backgroundColor : "#ff2625" , padding:"10px"}} >Explore Exercises</Button>

      <Typography
      fontWeight={600}
      color="#ff2625"
      sx={{opacity : '0.1', display : {md : 'block' , xs : 'none'}}}
      fontSize="200px">Exercise</Typography>

      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner