'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const ButtonComponet = ({ children, data, className, link }: {
  children: any,
  data: any,
  className: any,
  link: string
}) => {
  const router = useRouter()
  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(link)
  }
  return (
    <>
      <button className={className}
        onClick={(e) => handleClick(e)}
      >
        {children}
      </button>

    </>
  )
}

export default ButtonComponet