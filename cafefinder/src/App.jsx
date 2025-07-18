import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './components/Blogs'
import FAQs from './components/FAQs'
import Booking from './components/Booking'



const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home /></>
  },
  {
    path: '/About',
    element: <><Navbar/> <About/> <FAQs/></>
  },

  {
    path : '/Blogs',
    element:<> <Navbar/> <Blogs/> <Footer/></>
  },
  {
    path : '/Book-a-table',
    element:<> <Navbar/> <Booking/> </>
  }
  
])

function App() {
  return <RouterProvider router={router} />
}

export default App
