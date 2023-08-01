import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './layout/root/index.jsx'
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
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
