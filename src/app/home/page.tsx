'use client'
import React, { useState, Suspense } from 'react'
import { headers } from 'next/headers'

import CardComponent from '@/components/CardComponent'
import HeroBanner from '@/components/HeroBanner'
import Breadcrumb from '@/components/Breadcrumb'


const home = () => {
  let breadcrumb =[
    "Home"
  ]
  let limit = "6" 
  return (
    <div>
      <HeroBanner/>
      <Breadcrumb data={breadcrumb}/>
      <Suspense fallback={<div>Loading...</div>}>
        <CardComponent limit={limit}/>
      </Suspense>
    </div>
  )
}

export default home