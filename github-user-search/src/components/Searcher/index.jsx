import React, { useState } from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const stackStyles = {
    marginTop: '30px',
    width: '80%',
  };
  const TextFieldStyles = {
    width: '90%',
  };

const Searcher = (props) => {
  const { setInputUser } = props

  const [valueInput, setValueInput] = useState("")
  
  const onSearchValueChange = (e) => {
    const inputValue = e.target.value
    setValueInput(inputValue) 
  }
  
  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  return (
    <Stack direction='row' sx={stackStyles}>
        <TextField  
            id="outlined-basic" label="Github User" placeholder='Octocat' variant="outlined" size='small' value={valueInput} onChange={onSearchValueChange} sx={TextFieldStyles} 
        ></TextField>
        <IconButton onClick={handleSubmit} size='small' sx={{
            left: '-45px'
        }}>
            <SearchIcon/>
        </IconButton>
    </Stack>
  )
}

export default Searcher