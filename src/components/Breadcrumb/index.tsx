'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

export default function Breadcrumb({data}) {
  const firstPathName = usePathname().split('/')[1]
  const lastPathName = usePathname().split('/').pop()
  return (
    <div className='container mx-auto mt-5'>
      <ul className='flex flex-row gap-3'>
        {data.map((item, idx) => (
          <li>
            <Link 
              href={idx === 0 ? `/${item.toLowerCase()}` : `/${firstPathName}/${lastPathName}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
