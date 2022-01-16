import usersStyles from '../styles/users.module.css';
import UsersList from '../components/UsersList';



const users = ({data}) => {



    return (
        <>
        <h1>users</h1>
        <div className={usersStyles.allUsers}>
            <UsersList users={data} />
        </div>
        </>
    
    )
}

export default users;


export const getServerSideProps = async () => {

    const res = await fetch('https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo');
    const data = await res.json();
    
    return {
        props: {
            data,
        }
    }

}




  


