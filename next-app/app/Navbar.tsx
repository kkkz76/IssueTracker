import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flxex bg-slate-500 p-5'>
        <Link href='/' className='mr-5'>Next.js</Link>
        <Link href='/users'className='mr-5' >Users</Link>
        <Link href='/admin' >Admin</Link>
    </div>
  )
}

export default Navbar