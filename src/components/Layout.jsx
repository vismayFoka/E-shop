import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-4">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
