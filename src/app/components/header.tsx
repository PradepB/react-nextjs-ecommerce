import React from 'react'
import NavBar from './navbar'

function Header() {
    return (
        <>
            <header className='bg-dark-background sticky top-12 z-[20] mx-auto flex w-full items-center
             justify-between border-b border-gray-500'>
                <NavBar />
            </header>
        </>
    )
}

export default Header