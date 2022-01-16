import { useSelector } from "react-redux"
import UsersList from "./UsersList"

export const UsersContainer = () => {
    const users = useSelector(state => state.users)
    return <>
        <UsersList users={users}/>
    </>
}