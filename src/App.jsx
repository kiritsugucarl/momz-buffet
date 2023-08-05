import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './layout/root/index.jsx'
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
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
