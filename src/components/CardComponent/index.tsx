'use client'
import React from 'react'
import data from './data.json'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

// const { Meta } = Card;
const CardComponent = () => {
  return (
    <div className='container mx-auto py-8'>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 md:px-0'>
        {data.data.map((item, idx) => (
          <Card className='bg-center bg-no-repeat bg-cover' key={idx+1}>
            <CardHeader className='p-0 md:mb-5'>
              <div className='overflow-hidden h-44 md:h-52 '>
                <img className='hover:scale-110 duration-300 h-52 object-center object-cover w-full' src={item.imgUrl} alt="Picture of the author"/>
              </div>
            </CardHeader>
            <CardContent className='p-3'>
              <p className='font-bold'>{item.title}</p>
              <p>{item.desc}</p>
            </CardContent>
            <CardFooter className='p-3'>
              {/* <Button><Link href={`/blog/${idx+1}`}>Detail</Link></Button> */}
              <Link href={`/blog/${idx+1}`} className={buttonVariants({ variant: "outline" })}>Read More</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CardComponent