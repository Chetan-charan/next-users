
import userStyle from '../styles/user.module.css';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';


const User = ({ Name, age, city, pic,deletbutton,id }) => {

  const router = useRouter();

   return <div className={userStyle.user}>
    <img  className={userStyle.userprofilepic} src={pic} alt={Name} />
    <div className={userStyle.userinformation}>
      <h3>{Name}</h3>
      <h5>Age: {age}</h5>
      <h5>City: {city}</h5>
      {deletbutton}
      <Button style={{marginLeft: '20px'}} onClick={() => {router.push(`/users/${id}`)}} variant="contained" >View user</Button>
    </div>
  </div>;

}

export default User;