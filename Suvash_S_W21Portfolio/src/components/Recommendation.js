import React from 'react'
import { Container, Paper, Box, Typography, Grid, CardContent,CardMedia,GridList } from "@material-ui/core";

function Recommendation() {
    return (
        <div id="recommendation" style={{ paddingTop:"65px"}}>
        <h1 style={{height:"50px", backgroundColor:"blue", textAlign:"center", color:"white", }}>Letters of Recommendation</h1>
        <h1></h1>
        <Grid container spacing ={4}  >
            <Grid item sm={10}>
                <card >
                <Paper style={{height:"80vh", display: "block"}}>
                
                    <CardContent >
                        <Typography> 
                         <h4>I have not approached for letter of recommendation yet. </h4>
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

export default Recommendation
