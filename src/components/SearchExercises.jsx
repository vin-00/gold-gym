import React , {useEffect , useState} from 'react'

import {Box , Button  , Stack , TextField , Typography} from "@mui/material"


import {exercisesConst , bodyPartsList} from "../utils/constants"

import HorizontalScrollbar from './HorizontalScrollbar'
// import {exerciseOptions , fetchData} from "../utils/fetchData"

const SearchExercises = ({bodyPart , setBodyPart , setExercises}) => {

  const [search , setSearch] = useState("");

  const [bodyParts , setBodyParts] = new useState([]);
  

  const handleSearch = async ()=>{
    if(search){
      const exercisesData = exercisesConst;

      const searchedExercises = exercisesData.filter(
        (exercise) =>exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) 
      );
      
      setSearch('');
      setExercises(searchedExercises);

    }
  }
  
  useEffect(()=>{
    const fetchExercisesData= async()=>{
      const bodyPartsData = bodyPartsList;

      
      setBodyParts(['all' , ...bodyPartsData]);
    }

    fetchExercisesData();
   }, [])
  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center">
      <Typography fontWeight={700} sx={{
        fontSize:{md : '44px' , xs : '20px', sm:'30px'}
      }} mb='50px' textAlign="center">Awesome Exercises You <br />Should Know</Typography>

      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input:  {fontWeight: '700' ,
            border : 'none' ,
            borderRadius : '4px'},
          width:{md:'800px',sm:'350px' ,  xs : '190px'},
          backgroundColor:'#fff',
          borderRadius : "40px"
            }} 
          height="76px"
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          placeholder="Exercise..."
          type="text"></TextField>

        <Button className="search-btn"
        sx={{backgroundColor:'#FF2625' , color:"#fff" , textTransform :"none" , width : {lg: '175px' , xs : '80px'} , fontSize:{lg : '20px' , xs : '14px'} , 
        height:'56px' , 
        position:'absolute' , right:'0'}} 
        onClick={handleSearch}>Search</Button>
      </Box>

      <Box sx={{position:'relative' , width:'90%' , p:'20px'}}>
            <HorizontalScrollbar isBodyPart={true} data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises