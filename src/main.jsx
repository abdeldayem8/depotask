
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {   HashRouter, RouterProvider } from 'react-router-dom'
import Notfound from './Notfound.jsx'
import Postdetail from './components/Postdetails/Postdetail.jsx'
import Posts from './components/Posts/Posts.jsx'


const router = HashRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'/',element:<Posts/>},
            {path:'/posts/:postId',element:<Postdetail/>},
          ]
    },
    {path:'*',element:<Notfound/>}
])
createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router} />
 
)
