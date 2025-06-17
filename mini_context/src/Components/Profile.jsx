import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

export default function profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div>Please login</div>

    return <div>welcome {user.username}</div>
  
}
