import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <Link
          // prefetch={false}
          href="/"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Home
        </Link>
        <Link
          // prefetch={false}
          href="/demo"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Demo
        </Link>
      </nav>
    </header>
  )
}
