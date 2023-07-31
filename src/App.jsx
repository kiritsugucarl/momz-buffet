import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './layout/root/index.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
