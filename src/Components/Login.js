import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext';


export default function Login() {

    const { setUsername, setShowProfile } = useContext(LoginContext);
    
  return (
    <div>
        <input 
            type='text'
            placeholder='username...'
            onChange={(event) => {
                setUsername(event.target.value)
            }}
        />
        <input 
            type='text'
            placeholder='password...'
        />
        <button onClick={() => {
            setShowProfile(true);
        }}>
            Login
        </button>
    </div>
  )
}
