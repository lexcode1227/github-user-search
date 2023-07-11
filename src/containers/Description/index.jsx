import { Stack, Typography } from '@mui/material'
import React from 'react'
import PaperInformation from '../../components/PaperInformation'
import LocationInformation from '../../components/LocationInformation'

const Description = ({ userState }) => {
    const { bio } = userState
    return (
    <>
        <Stack justifyContent="center">
            {bio !== null 
                ?<Typography variant='body1'>{bio}</Typography>
                :<Typography variant='body1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque id necessitatibus sequi voluptatem minus accusamus illo unde itaque voluptatibus voluptate temporibus molestiae. </Typography>    
            }
        </Stack>
        <PaperInformation userState={userState} />
        <LocationInformation userState={userState} />
    </>
  )
}

export default Description