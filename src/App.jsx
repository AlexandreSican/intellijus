import { ThemeProvider } from 'styled-components'
import Header from './components/header'
import Home from './components/pages/home'
import About from './components/pages/about'
import LandingPage from './components/pages/landing'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/pages/login'

function App() {

  const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/login',
        element: <Login />
    },
])

  return (
    <>
      <RouterProvider router={router}>
        <LandingPage />
      </RouterProvider>
    </>
  )
}

export default App
