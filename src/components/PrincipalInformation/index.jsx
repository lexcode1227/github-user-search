import React from 'react'
import { Stack,Typography } from '@mui/material'

const PrincipalInformation = ({userState}) => {
    const { 
        name,
        login,
        created_at,
        } = userState
    return (
    <>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography component='h2' variant='h5' > {name} </Typography>
            <Typography variant='subtitle2' > {created_at} </Typography>
        </Stack>
        <Typography component='h4' > {`@${login}`} </Typography>
    </>
  )
}

export default PrincipalInformation