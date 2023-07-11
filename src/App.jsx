import { useEffect, useState } from 'react';
import './App.css'
import { Container, Typography } from '@mui/material'
import Searcher from './components/Searcher';
import { getGitHubUsers } from "./services/users"
import UserCard from './containers/UserCard';

const containerStyles = {
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "730px",
  gap: "20px"
};

const App = () => {
  const [inputUser, setInputUser] = useState("lexcode1227")
  const [userState, setUserState] = useState(inputUser)
  const [ notFound, setNotFound] = useState(false)

  const gettingUser = async (user)=> {
    const userResponse = await getGitHubUsers(user)
    if (userState === "octocat") {
      localStorage.setItem("octocat", JSON.stringify(userResponse))
    }
    if(userResponse.message === 'Not Found') {
      // setInputUser("octocat")
      const storedUser = localStorage.getItem('octocat');
      const userObject = JSON.parse(storedUser);
      setUserState(userObject);
      setNotFound(true)
    } else {
      setUserState(userResponse)
      setNotFound(false)
    }    
  }

  useEffect(()=>{
    gettingUser(inputUser)
  }, [inputUser])

  return (
    <Container sx={containerStyles}>
      <Typography component="h1" variant='h4' color="white" >Github User Finder</Typography>
      <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
      {notFound ? <Typography color="#d13c3c">Este usuario no existe</Typography> : ""}
      <UserCard userState={userState} />
    </Container>
  )
}

export default App
