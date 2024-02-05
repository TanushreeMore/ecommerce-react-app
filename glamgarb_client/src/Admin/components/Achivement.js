import styled from '@emotion/styled'
import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const TrignleImg = styled("img")({
  right:0,
  bottom:0,
  height:170,
  position:'absolute',
  maxWidth: '100%', 
})

const TrophyImg = styled("img")({
  right:36,
  bottom:20,
  height:98,
  position:'absolute',
  maxWidth: '100%', 
})

const CardContainer = styled(Card)({
  overflow: 'hidden',  // Prevent overflow
});

const Achivement = () => {
  return (
    <CardContainer>
    {/* <Card > sx={{position: 'relative', bgcolor: '#242B2E', color:'white'}}> */}
      <CardContent>
        <Typography variant='h6' sx={{letterSpacing: ".25px"}}>
          Shop With Josh
        </Typography>
        <Typography variant='body1'>Congratulations 🥳 </Typography>
        <Typography variant='h5' sx={{my:3.1}}> 420.8k</Typography>

        <Button size='small' variant='contained'>View Sales</Button>

        <TrignleImg src=''/>
        <TrophyImg src='https://spng.pngfind.com/pngs/s/57-578860_general-artwork-trophy-trophies-crests-cup-clipart-star.png'>
        </TrophyImg>
      </CardContent>
    {/* </Card> */}
    </CardContainer>
  )
}

export default Achivement