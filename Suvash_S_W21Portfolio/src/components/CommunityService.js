import React from 'react'
import { Container, Paper, Box, Typography, Grid, CardContent,CardMedia,GridList } from "@material-ui/core";

function CommunityService() {
    return (
        <div id="communityService" style={{ paddingTop:"65px"}}>
        <h1 style={{height:"50px", backgroundColor:"blue", textAlign:"center", color:"white",}}>Community Service/ Volunteer works</h1>
        <h1></h1>
        <Grid container spacing ={4}  >
            <Grid item sm={10}>
                <card >
                <Paper style={{height:"80vh", display: "block"}}>
                
                    <CardContent >
                        <Typography> 
                         <h4>These activities were carried out in Nepal.</h4>
                         <hr/>
                         <li>
                <ul>
                <h4>Actively participated in the search and rescue mission after the Great EearthQuake 2015 in Nepal</h4>
            </ul>
            <ul>
                <h4> Developed an online quiz app, with the app I used to organize an online Quiz every year. The participants 
                were the Higher Secondary School students in my home town back in Nepal.
                </h4>
            </ul>
            <ul>
                As a member of Computer Association of Nepal, I had organized workshops, seminars on computer literacy.
            </ul>
            
            </li>
    </Typography>      
                    </CardContent>
                </Paper>
                </card>
            </Grid>
            </Grid>







        
        </div>
    )
}

export default CommunityService
