import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-orange-300">
            <div>
                <ul  className="flex gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
            <ul className="flex gap-4">
                <li>Login</li>
                <li>Logout</li>
            </ul>
            </div>
        </nav >
    )
}

export default Navbar
