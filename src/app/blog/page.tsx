"use client"
import React, { Suspense, useState } from 'react'
import CardComponent from '@/components/CardComponent'
import Breadcrumb from '@/components/Breadcrumb'

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
      </Suspense>
    </div>
  )
}

