import User from './User'
import { useState } from 'react';
import Button from '@mui/material/Button';

const UsersList = ({users}) => {

  const [userlist,setUserList] = useState(users);

  const getUsers = () => {                                            //function to get users
    fetch('https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo')
  .then((data) => data.json())
  .then((users) => setUserList(users));
  }

  return <>
      {userlist.map(({Name,age,city,profilePic,id}) => <User
    Name={Name}
    age={age}
    city={city}
    pic={profilePic}
    id={id}
    key={id}
    deletbutton={<Button onClick={() => {

      fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo/${id}`,{method: 'DELETE'})      
      .then(() => getUsers()) }} variant="contained" >Delete</Button>}
    />)}

  </>


}


export default UsersList;

