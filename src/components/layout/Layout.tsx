import { Outlet } from 'react-router-dom'

import { useDeviceWatcher } from '@/hooks'

import NavBar from './Navbar'
import { OutletWrapper } from './OutletWrapper'
import Footer from './Footer'

const Layout = () => {
  useDeviceWatcher()
  return (
    <div className="text-theme-white relative min-h-screen">
      <NavBar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </div>
  )
}

export default Layout
