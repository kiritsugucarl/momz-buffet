import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './layout/root/index.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Food from './pages/Food/Food.jsx'
import Home from './pages/Home/Home.jsx'
import Rates from './pages/Rates/Rates.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/rates',
        element: <Rates/>
      },
      {
        path: '/foods',
        element: <Food/>
      },
      {
        path: '/contact-us',
        element: <Contact />
      },
      {
        path: '/about-us',
        element: <About />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
