import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './FlashCard.js'


function Dashboard() {
    return (
        <div id="Dashboard">
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
        <Grid item xs={3}>
            <Card/> 
        </Grid>   
  

     </Grid>
    </div>
    )
}

export default Dashboard
