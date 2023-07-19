"use client"
import React, { Suspense, useState } from 'react'
import CardComponent from '@/components/CardComponent'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Blog',
}

export default function Blog ()  {
  let breadcrumb =[
    "Blog"
  ]
  let limit = '8'
  return (
    <div>
      <Breadcrumb data={breadcrumb} />
      <Suspense fallback={<div>Loading...</div>}>
        <CardComponent limit={limit}/>
        {/* <ul className='flex flex-row gap-10'>
          <li className='cursor-pointer' onClick={()=>setPage(1)}>1</li>
          <li className='cursor-pointer' onClick={()=>setPage(2)}>2</li>
          <li className='cursor-pointer' onClick={()=>setPage(3)}>3</li>
        </ul> */}
      </Suspense>
    </div>
  )
}

