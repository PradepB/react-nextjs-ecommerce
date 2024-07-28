import React from 'react'
import Link from 'next/link'


async function fetchCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    return data
}

const NavLinks = async () => {
    const categories = await fetchCategories()
    return (
        <>
            {categories.map((item: string, index: any) => {
                return (
                    <li className="m-0" key={index}>
                        <Link key={item} className='capitalize text-gray-900 no-underline px-4 py-2 
                        transition-colors duration-300 hover:bg-gray-200' href={`/c/${item}`}>{item}</Link>
                    </li>
                )
            })}

        </>
    )
}

function NavBar() {
    return (
        <>
            <nav className="bg-[#c9e3fb] p-4 top-0 left-0 w-full z-[1000]">
                <ul className="list-none flex justify-around p-0 m-0">
                    <NavLinks />
                </ul>
            </nav>
        </>
    )
}

export default NavBar