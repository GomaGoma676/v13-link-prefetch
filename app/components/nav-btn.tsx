'use client'
import { useRouter } from 'next/navigation'
export default function NavBtn({ destination = '' }: { destination: string }) {
  const router = useRouter()
  return (
    <button
      className="rounded bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700"
      onClick={() => {
        router.push(`/${destination}`)
      }}
    >
      Nav to {destination ? destination : 'home'}
    </button>
  )
}
