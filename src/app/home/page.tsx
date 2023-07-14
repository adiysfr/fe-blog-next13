import React from 'react'
import { headers } from 'next/headers'

import CardComponent from '@/components/CardComponent'
import HeroBanner from '@/components/HeroBanner'

async function getData() {
  try {
    let item = await fetch(
        `https://nice-bass-peplum.cyclic.app/article`,
        {
            method: 'GET',
            headers: {
                'api-key': '05f0b227-d216-4ba9-8c98-8be9b5e5c48b'
            },
        }
    );
    return item.json()
} catch (err) {
    console.log(err);
}
}

const home = async  () => {
  const data = await getData()
  return (
    <div>
      <HeroBanner/>
      <CardComponent data={data.data}/>
    </div>
  )
}

export default home