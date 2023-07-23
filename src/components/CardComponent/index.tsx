'use client'
import React, {useState} from 'react'
import data from './data.json'
import useSWR from 'swr'
import axios from 'axios'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import PageWrapper from '../PageWrapper'
import { usePathname  } from 'next/navigation';

// const fetcher = (url:string) => fetch(url).then(res => res.json())
const fetcher = (url:string) =>
  axios
    .get(url, { headers: { 'api-key': process.env.NEXT_PUBLIC_API_KEY } })
    .then((res) => res.data);

interface Props{
  limit: string
}


const CardComponent = ({limit}:Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_URL}/article/pagination?page=${currentPage}&limit=${limit}`,],
    fetcher
    );
    const router = usePathname()
  let totalPage = data?.totalPage
  const arrayPagination = Array.from({ length: totalPage }, (_, index) => (index + 1).toString());
  return (
    <div className='container mx-auto py-8'>
      {data && <p className='mb-5'><strong>page {data?.page} of {data?.totalPage}</strong></p>}
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-5 md:px-0'>
      {data?.data.map((item:any, idx:number) => (
        <PageWrapper key={idx+1}>
          <Card className='bg-center bg-no-repeat bg-cover'>
            <CardHeader className='p-0 md:mb-5'>
              <div className='overflow-hidden h-44 md:h-52 '>
                <img className='hover:scale-110 duration-300 h-52 object-center object-cover w-full' src={item?.poster_url} alt="Picture of the author"/>
              </div>
            </CardHeader>
            <CardContent className='p-3'>
              <p className='font-bold'>{item?.title}</p>
            </CardContent>
            <CardFooter className='p-3'>
              <Link href={`/blog/${item?.id}`} className={buttonVariants({ variant: "outline" })}>Read More</Link>
            </CardFooter>
          </Card>
        </PageWrapper>
      ))}
      </div>
      <div className='flex flex-row gap-10 mt-5 justify-center'>
        {router !== '/home' && arrayPagination.map((item, idx) =>(
          <span key={idx+1} className='border cursor-pointer rounded-sm border-current px-3 py-1' onClick={()=>setCurrentPage(idx+1)}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default CardComponent