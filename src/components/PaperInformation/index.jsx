import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const PaperInformation = (props) => {
    const { userState } = props
    const { public_repos, followers, following } = userState
    return (
    <Stack sx={{backgroundColor: "#141d2f", color: "white", borderRadius: "10px"}}>
        <Stack spacing={3} direction="row" justifyContent="space-between" sx={{padding: "20px"}}>
            <Stack>
                <Typography component='h5'> Repos </Typography>
                <Typography component='h6'> { public_repos } </Typography>
            </Stack>
            <Stack>
                <Typography component='h5'> Followers </Typography>
                <Typography component='h6'> { followers } </Typography>
            </Stack>
            <Stack>
                <Typography component='h5'> Following </Typography>
                <Typography component='h6'> { following } </Typography>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default PaperInformation