import { Box, Button, Stack, Typography, } from '@mui/material'
import React from 'react'
 //href='#exercises' - when we click that button its scroll down to Excercises
// typography is just like p tage with some extra css property
import HeroBannerImage from '../assets/images/banner.png'
import { Padding } from '@mui/icons-material'

const HeroBanner = () => {
  return (
    <Box 
    sx={{
        mt: { lg:'212px', xs:'70px'},
        ml: { sm:'50px'}
    }}
    position='relative' 
    p='20px'
    > 
        <Typography
         color='#ff2625'
         fontWeight='600'
         fontSize='26px'
        >
            fitness club
        </Typography>
        <Typography
        fontWeight={700}
        sx={{
            fontSize : { lg: '44px', xs: '40px'}
        }}
        mb='23px' 
        mt='30px'
        >
            Sweat, Smile <br /> and repeat
        </Typography>
        <Typography fontSize='22px'
        lineHeight='35px' mb={4}>
            check out the most effective exercises
        </Typography>
        <Button variant="contained" sx={{padding:'13px'}} color='error' href='#exercises'>Explore Excercises</Button>
        <Typography 
         fontWeight={600}
         color='#ff2625'
         sx={{
            opacity:0.2,
            display: {
                lg:'block',
                xs: 'none'
            }
         }}
         fontSize='200px'
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner