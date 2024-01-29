import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-8 justify-items-start px-2 py-4 text-orange-800">
        <li>
          <Link href="/" className='font-orbitron font-bold text-xl'>Indie Gamer</Link>
        </li>
        <li className='ml-auto'>
          <Link href="/reviews" className='hover:underline align-middle'>Reviews</Link>
        </li>
        <li>
          <Link href="/about" className='hover:underline align-middle'>About</Link>
        </li>
      </ul>
    </nav>
  )
}
