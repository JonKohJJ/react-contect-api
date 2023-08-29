import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

export default function Profile() {

    const { username } = useContext(LoginContext);

  return (
    <div>
        Welcome Home { username }!
    </div>
  )
}
