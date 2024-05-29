import React from 'react'

import {Box , Stack,Typography} from '@mui/material'

import HorizontalScrollbar from "./HorizontalScrollbar"

import Loader from "./Loader"


const SimilarExercises = ({targetMuscleExercises , equipmentExercises}) => {
  return (
    <Box sx={{mt : {lg:'30px' , xs:'0'}}}>
      <Typography variant="h5" mb={5} ml={2} fontWeight="bold" color="#ff2625">Exercise that target the same muscle group</Typography>

      <Stack direction='row' sx={{ p:'2' , position:'relative'}}>

        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader/>}

      </Stack>

      <Typography variant="h5" mt={6} mb={5} ml={2} fontWeight="bold" color="#ff2625">Exercise that use the same equipment</Typography>

      <Stack direction='row' sx={{ p:'2' , position:'relative'}}>

        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader/>}

      </Stack>
    </Box>
  )
}

export default SimilarExercises