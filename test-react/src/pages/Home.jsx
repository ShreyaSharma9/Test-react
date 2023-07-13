import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import { fetchUser } from '../context/UserActions'
import { List, ListItem, ListItemText, TextField, Typography} from '@mui/material'
import ImageSection from '../components/ImageSection'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const Home = () => {
    const {users, dispatch} = useContext(UserContext)
    const handleData = async () => {
        const data = await fetchUser();
        dispatch({
          type: "SET_USER",
          payload: data,
        })  
    }
 useEffect(()=>{
        handleData()
    },[])


  

  return (
  <>
   
<Typography variant="h3" align="center" color={'white'} gutterBottom>
          User List
        </Typography>
        <TextField sx={{bgcolor : 'white', width : '54%', marginLeft : '370px',}}
          label="Search"
          // margin="normal"
          
          
        />
   
            <List sx={{width : '80%' , marginTop : '-10px'}}> 
            <ImageSection/>        
           {
            users.map(user => <ListItem key={user.id}> 
              
                <ListItemText primary={`${user.name}`} secondary={`${user.username}`} sx={{bgcolor : 'white', marginLeft : '750px'}} /> 
               
                <Box sx={{ '& button': { m: 1 } }}>

                  <div>
                  <Button variant="contained" size="large" component={Link} to="/another-page">
          Click
        </Button>
                  </div>
                </Box>
                
              </ListItem>)
           }
          </List>
        
        {users.length === 0 && (
          <Typography variant="body1" align="center">
            No users found.
          </Typography>
        )}

         
          
  </>
  


  )
}

export default Home
