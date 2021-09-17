import React, {useState} from 'react'
import UserService from '../services/UserService'
import './AddForm.css'
function AddForm() {


    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [age, setage] = useState('')
    const [image, setimage] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        const userDetails = { firstname, lastname, age, image}
        
        console.log(userDetails)
        setfirstname('')
        setlastname('')
        setage('')
        setimage('')
        UserService.postUser(userDetails).then((response) => {
            console.log(response.data)
        });
    };


    return (
        <form onSubmit={handleSubmit} className='addform-container'>
            <label htmlFor="fname">First Name</label>
            <input value={firstname}
            onChange={e => setfirstname(e.target.value)}

            type="text" name="fname" required/>
            <label htmlFor="lname">Last Name</label>
            <input value={lastname}
            onChange={e => setlastname(e.target.value)}
            type="text" name="lname" required/>
            
            <label htmlFor="age">Age</label>
            <input value={age}
            onChange={e => setage(e.target.value)}
            type="text" name="age" required/>
            
            <label htmlFor="image">Image URL</label>
            <input value={image}
            onChange={e => setimage(e.target.value)}
            type="text" name="image" required/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddForm
