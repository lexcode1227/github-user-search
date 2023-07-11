import React from 'react'
import { Stack,Typography, useTheme } from '@mui/material'

const PrincipalInformation = ({userState}) => {
    const { name, login, created_at } = userState
    const theme = useTheme();
    return (
    <>
        <Stack direction="row" justifyContent="space-evenly" alignItems="center" sx={{[theme.breakpoints.down('sm')]: {
                flexDirection: "column",
                }}}>
            <Typography component='h2' variant='h5' > {name} </Typography>
            <Typography variant='subtitle2' > {created_at} </Typography>
        </Stack>
        <Typography component='h4' > {`@${login}`} </Typography>
    </>
  )
}

export default PrincipalInformation