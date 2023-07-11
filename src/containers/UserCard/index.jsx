import React from 'react'
import { CardMedia, Grid, Stack, useTheme } from '@mui/material'
import PrincipalInformation from '../../components/PrincipalInformation'
import Description from '../Description'

const UserCard = (props) => {
    const theme = useTheme();
    const { userState } = props
    const { avatar_url } = userState
    return (
        <Grid
            container
            justifyContent="center"
            width="100%"
            sx={{
                margin: "15px 0 0 0",
                backgroundColor: "#1e2a47",
                borderRadius: "15px",
                padding: "48px",
                [theme.breakpoints.down('sm')]: {
                padding: "5px",
                },
            }}
    >
            <Grid item >
                <CardMedia 
                    component="img" 
                    image={avatar_url} 
                    alt='Github User'
                    sx={{
                        borderRadius: "50%",
                        height: "117px",
                        width: "117px",
                    }} 
                />
            </Grid>
            {/* <Grid item width="481px" > */}
                <Stack container direction="column" spacing={1} sx={{
                    margin: "10px 30px 30px"
                }}>
                    <PrincipalInformation userState={userState} />
                    <Description userState={userState} />
                </Stack>
            {/* </Grid>  */}
        </Grid>
  )
}

export default UserCard