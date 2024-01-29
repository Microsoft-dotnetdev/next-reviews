import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Link from "next/link";

export const metadata = {
  title: 'Reviews'
}

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-wrap gap-3">
        {
          reviews.map((review, index) => (
            <li key={index}>
              <div className="bg-white border shadow-md roundedhover:shadow-xl w-80">
                <Link href={`/reviews/${review.slug}`} className="hover:underline">
                  <img src={review.image} width={320} height={180} alt=""
                    className='rounded-t sm:rounded-l sm:rounded-none' />
                  <h2 className="text-center py-1 font-orbitron font-semibold sm:px-2">
                    {review.title}
                  </h2>
                </Link>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}
