import React from 'react'
import { Link } from 'react-router-dom';
import { MdCardMembership } from "react-icons/md";
import './Navbar.css'
function Navbar() {
    return (
        <header>
            <MdCardMembership className='main-icon'/>
            <nav>
                <ul>
                    <li><Link className="link" to='/'>Home</Link></li>
                    <li><Link className="link" to='/read'>Users</Link></li>
                    <li><Link className="link" to='/save'>Add</Link></li>
                </ul>
            </nav>
            <Link className="btn" to='/contact'><button>Contact</button></Link>
        </header>
    )
}

export default Navbar
