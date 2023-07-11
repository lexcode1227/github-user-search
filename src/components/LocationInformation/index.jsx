import React from 'react'
import { Grid, Stack, Typography, useTheme } from '@mui/material'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = ({ userState }) => {
    const { location, twitter_username, blog, company  } = userState
    const theme = useTheme();
    return (
    <Grid container spacing={2} sx={{marginTop: "15px", [theme.breakpoints.down('sm')]: {
        flexWrap: "nowrap", flexDirection: "column",
        },}}>
        <Grid item xs={6} maxWidth="100%" >
            <Stack direction="row" spacing={2}>
                <LocationOnIcon/>
                <Typography>{location}</Typography>
            </Stack>
        </Grid>
        <Grid item xs={6} maxWidth="100%" >
            <Stack direction="row" spacing={2}>
                <TwitterIcon/>
                {twitter_username === null
                    ? <Typography>Not available</Typography>
                    : <Typography>@{twitter_username}</Typography>
                }
            </Stack>
        </Grid>
        <Grid item xs={6} maxWidth="100%" >
            <Stack direction="row" spacing={2}>
                <LinkIcon/>
                {blog !== null
                    ?<a target='blank' href={blog
                    }><Typography>{blog}</Typography></a>
                    :<Typography>Not available</Typography>
                }
            </Stack>
        </Grid>
        <Grid item xs={6} maxWidth="100%" >
            <Stack direction="row" spacing={2}>
                <BusinessIcon/>
                {company !== null
                    ?<Typography>{company}</Typography>
                    :<Typography>Not available</Typography>
                }
            </Stack>
        </Grid>
    </Grid>
  )
}

export default LocationInformation