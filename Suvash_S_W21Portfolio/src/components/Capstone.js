import React from 'react'
import Cap1 from '../capstone/cap1.jpg'
import Cap2 from '../capstone/cap2.jpg'
import Cap3 from '../capstone/cap3.jpg'
import Cap4 from '../capstone/cap4.jpg'
import Cap5 from '../capstone/cap5.jpg'
import Cap6 from '../capstone/cap6.jpg'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100vw",
      height: "100vh",
      // backgroundColor: theme.palette.grey[300],
      paddingTop: "25px",
    },
  }));

function Capstone() {
   
    return (
        <>
        <div id="capstone" style={{ paddingTop:"65px"}}>       
        <h1 style={{ height:"50px", backgroundColor:"blue", textAlign:"center", color:"white" }}>Capstone Project</h1>
         <img width = "90%" src= {Cap1} align="center"></img>
         <img width = "90%" src= {Cap2} align="center"></img>
         <img width = "90%" src= {Cap3} align="center"></img>
         <img width = "90%" src= {Cap4} align="center"></img>
         <img width = "90%" src= {Cap5} align="center"></img>
         <img width = "90%" src= {Cap6} align="center"></img>
        
       
        </div>
        </>
    )
}

export default Capstone
