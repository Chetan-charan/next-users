import Link from 'next/link';

const Nav = () => {

    return <nav>
        <ul>
            <li>
            <Link href='/'><a>Home</a></Link>
            </li>
            <li>
            <Link href='/users'><a>Users</a></Link>
            </li>
            <li>
            <Link href='/adduser'><a>Add User</a></Link>
            </li>
        </ul>
       
    </nav>

}

export default Nav;