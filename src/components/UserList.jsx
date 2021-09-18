import React from 'react'
import './UserList.css'
function UserList({users}) {
    return (
        <>
            {
                users.map((user) => {
                    const {id, firstname, lastname, age, image} = user;
                    return(
                        <article key={id} className='card'>
                            <img src={image} alt={firstname} />
                            <div>
                                <h1>{firstname} {lastname}</h1>
                                <p>{age} Years</p>
                            </div>
                            
                        </article>
                    )
                })
            }
        </>
    )
}

export default UserList
