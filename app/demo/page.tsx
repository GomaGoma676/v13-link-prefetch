'use client'
import { useLoginUser } from '../providers'
import NavBtn from '../components/nav-btn'

export default function DemoPage() {
  const { loginUser, setLoginUser } = useLoginUser()
  return (
    <div className="m-10 text-center">
      Hello World🚀
      <div>{loginUser?.name}</div>
      <div className="my-3">
        <button
          className="rounded bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700"
          onClick={() => {
            setLoginUser({ name: 'Person A' })
          }}
        >
          Set context value
        </button>
      </div>
      <div>
        <NavBtn destination="" />
      </div>
    </div>
  )
}
