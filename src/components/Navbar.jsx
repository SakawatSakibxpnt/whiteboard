import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-4 bg-gray-200'>
        <h1 className='text-gray-800 font-bold text-2xl tracking-widest cursor-pointer'>WHITEBOARD</h1>
        <ul className='flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="/accordion">Accordion</Link>
            <Link href="/chat">Chat</Link>
        </ul>
    </div>
  )
}

export default Navbar