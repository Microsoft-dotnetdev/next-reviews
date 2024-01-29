import { getReview } from '@/lib/reviews'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ReviewCard({ title, image, slug }) {

  return (
    <div className="bg-white border shadow-md rounded hover:shadow-xl w-80 sm:w-full">
      <Link href={`/reviews/${slug}`} className="hover:underline flex flex-col sm:flex-row">
        <Image src={image} width={320} height={180} alt=""
          className='rounded-t sm:rounded-l sm:rounded-none' />
        <h2 className="text-center py-1 font-orbitron font-semibold sm:px-2">
          {title}
        </h2>
      </Link>
    </div>
  )
}
