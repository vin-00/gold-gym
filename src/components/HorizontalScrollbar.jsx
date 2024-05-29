import React, { useContext } from 'react'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import {Box, Typography} from "@mui/material"
import BodyPart from "./BodyPart"

import ExerciseCard from "./ExerciseCard"

import RightArrowIcon from "../assets/icons/right-arrow.png"

import LeftArrowIcon from "../assets/icons/left-arrow.png"

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({isBodyPart ,data , bodyPart , setBodyPart}) => {
  
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{width:'3000px'}} >
        {data.map((item)=>(
            <Box 
                key={item.id || item}
                itemId={item.id || item }
                title={item.id || item}>
              
            {isBodyPart ? <BodyPart item={item} 
                    bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item}/>}
                
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar

