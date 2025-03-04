import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ( { setExercises, bodyPart, setBodyPart} ) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect( () => {
    const fetchExerciseData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExerciseData()
  }, [])

  const handleSearch = async () => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=400', exerciseOptions)
      console.log(exerciseData);
      const searchedExercises = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search) ||  item.target.toLowerCase().includes(search) ||  item.equipment.toLowerCase().includes(search) ||  item.bodyPart.toLowerCase().includes(search)
      )
      // console.log(searchedExercises);
      //  window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='35px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} 
      sx={ {
     fontSize: {  lg: '44px', xs: '30px' }
      }}
      mb='50px'
      textAlign='center'
      >
        Awesome Exercises you <br />
        should know
      </Typography>
      <Box position='relative' mb='70px'>
        <TextField
        sx={{
          input: {fontWeight: '700', border:'none', borderRadius:'4px'},
          width : { lg: '800px', xs: '350px' },
          backgroundColor : "#fff",
          borderRadius: '40px'
        }}
         height='76px'
         value={search}
         onChange={ (e) => setSearch(e.target.value.toLowerCase())}
         placeholder='search Exercises'
         type='text'
         />
         <Button className='search-btn'
         sx={{
          bgcolor: "#ff2625",
          color: "#fff",
          textTransform:'none',
          width: {lg: '175px', xs:'80px'},
          fontSize: {lg:'20px', xs:'14px'},
          height:'56px',
          position: 'absolute',
          right:'0'
         }}
         onClick={handleSearch}
         >Search</Button>
      </Box>
      <Box 
      sx={{
        position: 'relative', width: '100%', p: '20px'
      }}>
        <HorizontalScrollBar 
        data={bodyParts} 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises