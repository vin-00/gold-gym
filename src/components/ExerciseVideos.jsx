import React from 'react'

import {Box , Stack , Typography } from '@mui/material'

const ExerciseVideos = ({exerciseVideos , name}) => {


  // console.log(exerciseVideos);
  return (
    <Box sx={{marginTop : {lg : '30px' , xs : '10px'}}} p='20px' >
      <Typography variant='h3' mb='33px' >
        Watch <span style={{color : '#ff2625' , textTranform:'capitalize'}}  >{name}</span> exercise videos
      </Typography>

      <Stack justifyContent="flex-start" flexWrap='wrap' alignItems="center" sx={{
        flexDirection :{xs:'col' , sm:'row'} ,
        gap : {sm:'10px' , xs:'0' , md:'40px'}
      }} >
        {exerciseVideos?.slice(0,3).map((item , index)=>(
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">

            <img src={item.video.thumbnails[0].url} alt={item.video.title} />

            <Box>
              <Typography variant='h6' color="#000">
                {item.video.title}
              </Typography>
              <Typography variant='p' color="#000" opacity="0.5">
                {item.video.channelName}
              </Typography>
            </Box>

          </a>
        ))}
      </Stack>

    </Box>
  )
}

export default ExerciseVideos