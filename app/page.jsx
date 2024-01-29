import Heading from "@/components/Heading";
import ReviewCard from "@/components/ReviewCard";
import { getFeaturedReview, getReview } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Indie Gamer',
  description: 'Only the best indie games, reviewed for you.'
}

export default async function HomePage() {
  const review = await getFeaturedReview()
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-white border shadow-md rounded hover:shadow-xl w-80 sm:w-full">
        <Link href={`/reviews/${review.slug}`} className="hover:underline flex flex-col sm:flex-row">
          <Image src={review.image} width={320} height={180} alt=""
            className='rounded-t sm:rounded-l sm:rounded-none' />
          <h2 className="text-center py-1 font-orbitron font-semibold sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  )
}
