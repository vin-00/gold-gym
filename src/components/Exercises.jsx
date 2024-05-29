import React , {useEffect , useState} from 'react'

import Pagination from "@mui/material/Pagination"
import {Box , Stack , Typography} from "@mui/material"

import ExerciseCard from './ExerciseCard'


import {exercisesConst} from "../utils/constants"

// import { exerciseOptions , fetchData } from '../utils/fetchData'

const Exercises = ({exercises , setExercises , bodyPart}) => {

  
  const[currentPage , setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  

  const indexOfLastExercise = currentPage*exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage ; 

  const currentExercises = exercises.slice(indexOfFirstExercise , indexOfLastExercise);

  const paginate = (e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top : 1800 , behaviour:'smooth'  })
  }

  useEffect(()=>{
    const fetchExercisesData = async() =>{
      let exerciseData = [];

      if(bodyPart === 'all'){
        exerciseData = exercisesConst;
      }
      else{
        exerciseData = exercisesConst.filter(
          (exercise) =>
          exercise.bodyPart.toLowerCase().includes(bodyPart)
        );
      }
      
      // console.log(exerciseData);

      setExercises(exerciseData);
    };

    fetchExercisesData();

  }, [bodyPart])

  return (
    <Box id="exercises" sx={{mt : {lg:'110px'}}}
    mt="50px" p="20px" >

      <Typography variant="h3" mb="46px" >
        Showing Results
      </Typography>

      <Stack direction="row" sx={{gap: {lg: '110px' , xs :'50px'}}} flexWrap="wrap" justifyContent="center" >
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && 
        <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length/exercisesPerPage)}
        page={currentPage} onChange={paginate} size="large"
        />}
      </Stack>
    </Box>
  )
}

export default Exercises