import React from 'react'

import {Typography , Stack , Button} from '@mui/material';

import BodyPartImage from "../assets/icons/BodyPart.png";
import TargetImage from '../assets/icons/Target.png';
import EquipmentImage from "../assets/icons/Equipment.png"

const Detail = ({exerciseDetail}) => {

  const {bodyPart , gifUrl , name , target , equipment} = exerciseDetail;

  const extraDetail =[
    {
      icon : BodyPartImage,
      name : bodyPart
    },
    {
      icon : TargetImage,
      name : target
    },
    {
      icon : EquipmentImage,
      name: equipment
    }
  ]

  return (
    <Stack key={name} gap="60px" sx={{ flexDirection : {lg : 'row'} , p:'20px' ,alignItems : 'center'}} >
      <img src={gifUrl} alt={name} className="detail-image" loading="lazy" />

      <Stack  sx={{ gap:{lg : '35px' , xs:'20px'}}} >
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6" >
          Exercises keep you strong . {name}&nbsp; is one of the best exercises to target you {target} . It will help you improve your mode and gain energy . 
        </Typography>

        {extraDetail.map((item)=>(
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ bakcground:"#fff2b" , borderRadius : '50%' , width : '100px' , height:'100px'}} >
              <img src={item.icon} alt={bodyPart} style={{width:'50px' , hiehgt:'50px'}} />
            </Button>
            <Typography variant="h5"textTransform='capitalize' >
              {item.name}
            </Typography>
          </Stack>
        ))}

      </Stack>
    </Stack>
  )
}

export default Detail