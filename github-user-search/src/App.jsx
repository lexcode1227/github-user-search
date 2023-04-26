import { Container } from '@mui/material'
import './App.css'
import Searcher from './components/Searcher';
import { useEffect, useState } from 'react';
import { getGitHubUsers } from "./services/users"
import UserCard from './containers/userCard';

const containerStyles = {
  background: "whitesmoke",
  marginTop: '30px',
  width: '80vw',
  height: "500px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const App = () => {
  const [inputUser, setInputUser] = useState("octocat")
  const [userState, setUserState] = useState(inputUser)
  const [ notFound, setNotFound] = useState(false)

  const gettingUser = async (user)=> {
    const userResponse = await getGitHubUsers(user)
    
    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse)
    }
    if(userResponse.message === "Not Found"){
      const { octocat } = localStorage
      setInputUser(octocat)
      setNotFound(true)
    } else {
      setUserState(userResponse)
    }    
  }
  console.log(userState)

  useEffect(()=>{
    gettingUser(inputUser)
  }, [inputUser])

  return (
    <Container sx={containerStyles}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  )
}

export default App
