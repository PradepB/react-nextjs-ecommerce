import React from 'react'
import Image from 'next/image'

function Logo() {
    return (
        <>
            <div className='logo h-12 w-12 sticky top-0 z-[20]'>
                <Image
                    src="/p.jpg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={800}
                    height={20}
                    priority
                />
            </div>
        </>
    )
}

export default Logo