
import './App.css'

import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/Custom-components/Header'
import { Toaster } from './components/ui/sonner'

function App() {
  
const {user,isSignedIn,isLoaded}=useUser()

if(!isLoaded){
  return null
}

if(!isSignedIn && isLoaded){

  return <Navigate to={'/auth/sign-in'}/>
}

  return (
    <>
     <Header/>
     <Outlet/>
     <Toaster/>
    </>
  )
}

export default App
