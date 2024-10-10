'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {status, data: session} = useSession();

  
  return (
    <div className='flxex bg-slate-500 p-5 space-x-3'>
        <Link href='/'>Next.js</Link>
        <Link href='/users'>Users</Link>
        <Link href='/admin'>Admin</Link>
        {status === "loading" && <p>Loading ...</p>}
        {status === "authenticated" && 
        <div>
          {session.user!.name}
          <Link href='/api/auth/signout' className='ml-5'>Sign Out</Link>
        </div>}
        {status === "unauthenticated" && <Link href='/api/auth/signin'>Log In</Link>}
     
    </div>
  )
}

export default Navbar