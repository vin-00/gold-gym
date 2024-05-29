import React , {useEffect , useState} from 'react'

import {useParams} from 'react-router-dom'
import {Box } from '@mui/material'

import {exercisesConst} from "../utils/constants"

import {fetchData ,youtubeOptions} from "../utils/fetchData"

import Detail from "../components/Detail"
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises"

const ExerciseDetail = () => {

  const {id} = useParams();
  const [exerciseDetail , setExerciseDetail] = useState({});

  const [exerciseVideos , setExerciseVideos] = useState([]);

  const [targetMuscleExercises , setTargetMuscleExercises] = useState([]);

  const [equipmentExercises , setEquipmentExercises] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async()=>{

      const youtubeSearchUrl ="https://youtube-search-and-download.p.rapidapi.com";
      let exerciseDetailData ;
      for(let a of exercisesConst){
        if(a.id==id){
          exerciseDetailData = a;
        }
      }

      const targetMuscleExercisesData = exercisesConst.filter((item)=>item.target===exerciseDetailData.target);

      const equipmentExercisesData = exercisesConst.filter((item)=>item.equipment===exerciseDetailData.equipment);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)

      setExerciseVideos(exerciseVideoData.contents); 

      setEquipmentExercises(equipmentExercisesData);
      
      setTargetMuscleExercises(targetMuscleExercisesData);

      setExerciseDetail(exerciseDetailData);
    }
    fetchExercisesData();
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />

      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}  />
    </Box>
  )
}

export default ExerciseDetail