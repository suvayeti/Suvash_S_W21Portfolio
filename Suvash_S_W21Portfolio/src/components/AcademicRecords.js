import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Container, Paper, Box, Typography,  CardContent,  } from "@material-ui/core";
import Masters from '../images/masters.PNG'

function AcademicRecords() {
    return (                
        <div id="AcademicRecord" style={{ paddingTop:"65px"}}>           
            <h1 style={{height:"50px", backgroundColor:"blue", textAlign:"center", color:"white", }}>Academic Records</h1>
            <img width = "90%" src= {Masters} align="center" ></img>           
        </div>
    )
}

export default AcademicRecords
