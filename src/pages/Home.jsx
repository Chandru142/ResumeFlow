import Header from '@/components/Custom-components/Header'
import LandingPage from '@/components/Custom-components/HomePagecomponent/LandingPage'

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'

const Home = () => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <div>
      <Header/>

    <LandingPage/>

    </div>
  )
}

export default Home




