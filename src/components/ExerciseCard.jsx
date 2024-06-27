import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Button, Typography } from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}> 
    <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
    <Stack direction='row'>
        <Button
        sx={{ml : '21px', color:'white', background: "#ffa9a9", fontSize: '14px', borderRadius:'20px', textTransform: 'capitalize'}}
        >
            {exercise.bodyPart}
        </Button>
        <Button
        sx={{ml : '21px', color:'white', background: "#fcc757", fontSize: '14px', borderRadius:'20px', textTransform: 'capitalize'}}
        >
            {exercise.target}
        </Button>
    </Stack>
    <Typography ml='21px' color='black' fontWeight='bold' mt='11px' textTransform='capitalize' fontSize='20px'>
        {exercise.name}
    </Typography>
    </Link>
  )
}

export default ExerciseCard