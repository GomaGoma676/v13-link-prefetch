import '../styles/globals.css'
import NavBar from './components/nav-bar'
import UserProvider from './providers'
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar />
        <UserProvider>
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  )
}
