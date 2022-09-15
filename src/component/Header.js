import { Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <div>
            <Typography fontWeight="600" fontSize="44px"  mt="37px" mb="37px" variant='h3' ml="700px"> Table Data UI Design </Typography>   
            <Typography  fontSize="16px" lineHeight="24px"  mt="37px" mb="37px" variant='body1' ml="500px" mr="500px"> The Table component has a close mapping to the native table elements. This constraint makes building rich data tables challenging.
The DataGrid component is designed for use-cases that are focused on handling large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features. </Typography>   
             
    </div>
  )
}

export default Header