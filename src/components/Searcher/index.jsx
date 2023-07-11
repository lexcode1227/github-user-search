import React, { useState } from 'react'
import { IconButton, InputBase, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const stackStyles = {
    padding: '15px',
    width: '100%',
    backgroundColor: "#1e2a47",
    borderRadius: "15px",
    '& input:focus': {
      outline: 'none',
      boxShadow: 'none',
      border: 'none',
    },
  };
const TextFieldStyles = {
    width: '90%',
    color: "white"
  };

const Searcher = ({ setInputUser }) => {
  const [valueInput, setValueInput] = useState("")
  
  const onSearchValueChange = (e) => {
    const inputValue = e.target.value
    setValueInput(inputValue) 
  }
  
  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  return (
    <>
      <Stack direction='row' justifyContent='space-between' sx={stackStyles}>
        <InputBase id="outlined-basic" autoComplete='off' placeholder='Search Github Username...' type='text' value={valueInput} onChange={onSearchValueChange} sx={TextFieldStyles}>
        </InputBase>
        <IconButton onClick={handleSubmit} size='small' sx={{ color: "white" }}>
            <SearchIcon/>
        </IconButton>
      </Stack>
    </>
  )
}

export default Searcher