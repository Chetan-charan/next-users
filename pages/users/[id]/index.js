import { useRouter } from "next/router";
import Button from '@mui/material/Button';

const userprofile = ({user}) => {
    const router = useRouter();
    const { id } = router.query;

    return <>
    <div style={{marginLeft: '2rem'}} >  
    <img style={{ width: '400px', height: '380px', objectFit: 'cover' }} src={user.profilePic} alt={user.Name} />
    <h2>{user.Name}</h2>
    <h5>Age: {user.age}</h5>
    <h5>City: {user.city}</h5>
    <Button onClick={() => { router.push('/users') }} variant="contained">Go back</Button>
 
  </div>
    </>


}




export const getStaticProps = async (context) => {

    const res = await fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo/${context.params.id}`)
    const user = await res.json();

    return {
        props: {
            user,
        }
    }

}

export const getStaticPaths = async () => {

    const res = await fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo`);
    const users = await res.json();

    const ids = users.map(user => user.id);
    const paths = ids.map((id) => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: false,
    }


}

export default userprofile;