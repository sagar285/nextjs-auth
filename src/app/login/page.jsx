"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'


const Login = () => {
    const session =useSession();
    console.log(session);
    if(session.status ==="loading"){
        return <p>Loading....</p>
    }
    if(session.status ==="authenticated"){
        return  <button onClick={()=>signOut("google")}>Logout</button>
    }
    if(session.status ==="unauthenticated"){
        return <p>user un  authenticated</p>
    }
  return (
    <div>
        <button onClick={()=>signIn("google")}>Login with google</button>
    </div>
  )
}

export default Login