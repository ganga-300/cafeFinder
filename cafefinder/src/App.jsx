import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home /></>
  },
  {
    path: '/About',
    element: <><Navbar/> <About/> <Footer /></>
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
