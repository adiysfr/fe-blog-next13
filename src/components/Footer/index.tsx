'use client'
import React from 'react'

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className='bg-[#0c76c159] row flex flex-col p-5'>
      <span>Adi Yusuf R @ {year}</span>
      <span>adiyusuframadhan@gmail.com</span>
    </footer>
  )
}

export default Footer