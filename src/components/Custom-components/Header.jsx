import React from 'react'
import { Button } from '../ui/button'
import { Link, useLocation } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'
import ThemeToggle from '../ui/theme-toggle'

const Header = () => {
  const {user,isSignedIn}=useUser()
  const { pathname } = useLocation()
  const isLandingPage = pathname === '/'

  return (
    <>
    <div className='flex w-full justify-center items-center fixed z-50 '>
    <div className='flex justify-between items-center p-2 shadow-lg mt-1.5 bg-background/30 backdrop-blur-2xl border border-border/30 rounded-2xl w-[90%] md:w-4/5'>
    <Link to='/'>
    <img src="/logo.svg" alt="logo" width={150} height={150}  />
    </Link>

      <div className='flex items-center gap-2'>
        {!isLandingPage && <ThemeToggle/>}
        {!isSignedIn?(
          <Link to={'/auth/sign-in'}>
            <Button className="bg-[#45D2B0] hover:bg-[#2dad90]">Get Started</Button>
          </Link>
        ):(
          <div className='flex items-center gap-1'>
            <Link to={'/dashboard'}>
              <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton/>
          </div>
        )}
      </div>

    </div>

    </div>
    </>
  )
}

export default Header