import React from 'react'
import {Link} from 'react-router-dom'

import {Stack} from "@mui/material"

import Logo from '../assets/images/Logo.png'

const NavBar = () => {
  return (

    <Stack direction="row"  sx={{gap:{sm : '120px' , xs : '20px'} , mt :{sm:'32px' , xs : '20px'}, px:'20px' , justifyContent:'none'}} >
      <Link to="/">
        <img src={Logo} alt="logo" 
        style={{ width:'40px' , height : '48px' , margin:'0 20px' }} />
      </Link>

      <Stack
      direction="row" 
      sx={{gap:{sm : '40px' , xs : '20px'}} } 
      fontSize="24px"
      alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration:"none" , color:"#3A1212" , borderBottom:'3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none' , color :"#3A1212"}}>Exercises</a>
      </Stack>
    </Stack>
    
  )
}

export default NavBar