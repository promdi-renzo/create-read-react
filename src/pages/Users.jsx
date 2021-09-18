import React, {useState, useEffect} from 'react'
import UserList from '../components/UserList';
import UserService from '../services/UserService'

function Users() {

    const [users, setusers] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        UserService.getUsers().then((response) => {
            console.log(response.data.response.body.users)
            setusers(response.data.response.body.users)
        })
    }

    return (
        <div className='container users'>
            <UserList users={users}/>
        </div>
    )
}

export default Users
