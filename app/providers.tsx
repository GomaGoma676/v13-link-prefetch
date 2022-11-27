'use client'

import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'

type LoginUser = { name: string }

type LoginUserContextType = {
  loginUser: LoginUser | null
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
)

export default function UserProvider({ children }: { children: ReactNode }) {
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null)
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext)
