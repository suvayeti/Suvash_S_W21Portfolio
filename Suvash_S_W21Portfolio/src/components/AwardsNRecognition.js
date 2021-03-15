import React from 'react'
import { Container, Paper, Box, Typography, Grid, CardContent,CardMedia,GridList } from "@material-ui/core";

function AwardsNRecognition() {
    return (
        <div id="awardsNRecognition">
        <h1 style={{height:"50px", backgroundColor:"blue", textAlign:"center", color:"white", }}>Awards and Recognition</h1>
        <h1></h1>
        <Grid container spacing ={4}  >
            <Grid item sm={10}>
                <card >
                <Paper style={{height:"80vh", display: "block"}}>
                
                    <CardContent >
                        <Typography> 
                         <h4>I am in George Brown college Dean's list from the first Semester of my studies and still carrying it up!</h4>
                         <hr/>
                    </Typography>      
                    </CardContent>
                </Paper>
                </card>
            </Grid>
            </Grid>







        
        </div>
    )
}

export default AwardsNRecognition
