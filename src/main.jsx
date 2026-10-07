import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ClerkProvider } from '@clerk/clerk-react'

import { ThemeProvider } from 'next-themes'

import SignInPage from './auth/signin/SignIn.jsx'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ResumeEdit from './pages/ResumeEdit'
import ResumeView from './pages/ResumeView'

import { Analytics } from "@vercel/analytics/react"


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publisable Key")
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element: <ResumeEdit/>
      }
    ]
  }
  ,
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  },
  {
    path:'/myresume/:resumeId/view',
    element:<ResumeView/>
  }

])

createRoot(document.getElementById('root')).render(

  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
      <Analytics/>
    </ClerkProvider>
  </ThemeProvider>

)
