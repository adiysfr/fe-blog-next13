import React from 'react'
import ArticleDetailComponent from '@/components/ArticleDetailComponent';
import Breadcrumb from '@/components/Breadcrumb'

const Detail = ({ params }: { params: { slug: string } }) => {
  let breadcrumb =[
    "Blog","/","Detail"
  ]
  return (
    <div>
      <Breadcrumb data={breadcrumb} />
      <ArticleDetailComponent query={params.slug}/>
    </div>
  )
}

export default Detail