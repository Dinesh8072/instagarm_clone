import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import VeiwStory from './Components/VeiwStory.jsx'
import Profile from './Components/Profile.jsx'


let router=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/story/:id/:tot',
    element:<VeiwStory/>
  },
  {
    path:'/profile',
    element: <Profile/>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
