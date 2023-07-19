'use client'
import React,{ useState, useEffect } from 'react'
import Link from 'next/link'
import ToogleDark from '@/components/ToogleDark'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuCloseAny = () =>{
    setIsOpen(false)
  }
  useEffect(() => {
    // for handle close menu mobile if any click place
    document.body.addEventListener('click', menuCloseAny, true); 
  }, [])
  

  return (
    <header className='bg-[#0c76c159] backdrop-blur-sm'>
      <div className='container mx-auto'>
        <div className="flex flex-row justify-between py-5 md:p-5 items-center">
          <div>
            {/* @ts-ignore */}
            <Link href='/'><Image className='hover:scale-125 duration-300' src='/markadi.png' width={40} height={40} alt="Picture of the author"/></Link>
          </div>
          <ul className="hidden flex-row gap-10 md:flex	items-center">
            <li><Link className='p-3 hover:ring-2 hover:ring-blue-500 duration-300 rounded-lg' href='/'>Home</Link></li>
            <li><Link className='p-3 hover:ring-2 hover:ring-blue-500 duration-300 rounded-lg' href='/blog'>Blog</Link></li>
            <li><Link className='p-3 hover:ring-2 hover:ring-blue-500 duration-300 rounded-lg' href='/profile'>Profile</Link></li>
            <li><Link className='p-3 hover:ring-2 hover:ring-blue-500 duration-300 rounded-lg' href='/project'>Project</Link></li>
            <li><ToogleDark/> </li>
          </ul>
          <div className="block md:hidden">
            <div className='flex flex-row items-center gap-5'>
              <span className='cursor-pointer' onClick={()=>{setIsOpen(true)}}>☰</span>
              <ToogleDark/>
            </div>
            <Sheet open={isOpen}>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle>
                    <ul className="flex flex-col gap-10">
                      <li onClick={()=>{setIsOpen(false)}}><Link href='/'>Home</Link></li>
                      <li onClick={()=>{setIsOpen(false)}}><Link href='/blog'>Blog</Link></li>
                      <li onClick={()=>{setIsOpen(false)}}><Link href='/profile'>Profile</Link></li>
                      <li onClick={()=>{setIsOpen(false)}}><Link href='/project'>Project</Link></li>
                    </ul>
                  </SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header