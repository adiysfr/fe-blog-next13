'use client'
import React from 'react';
import useSWR from 'swr'
import axios from 'axios';
import moment from 'moment';
import "moment/locale/id";
import Image from 'next/image'
import { Markup } from 'interweave';
const fetcher = (url:string) =>
  axios
    .get(url, { headers: { 'api-key': process.env.NEXT_PUBLIC_API_KEY } })
    .then((res) => res.data);


interface Props{
  query: string
}
export default function ArticleDetailComponent({query}:Props) {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_URL}/article/detail/${query}`,],
    fetcher
    );
  const dataVal = data?.data
  return (
    <div className='container mx-auto'>
      <div className='mt-5 mb-10'>
        <img className='mx-auto' src={dataVal?.url} alt={dataVal?.title}/>
        <h1><strong>{dataVal?.title}</strong></h1>
        <h3>Categrory : {dataVal?.category_name}</h3>
        {/* <p>Dibuat pada: {moment(dataVal?.createdAt).format("dddd, Do MMMM YYYY | h:mm:ss")}</p> */}
        <span>{dataVal?.createdAt}</span>
      </div>

      <div>
        <Markup content={dataVal?.body}/>
      </div>
    </div>
  )
}
