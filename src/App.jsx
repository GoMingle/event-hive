import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './App.css'
import College from './pages/college'
import CreateEvent from './pages/createEvent'
import Event from './pages/event'
import Landing from './pages/landing'
import NotFound from './pages/notFound'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'


const router =createBrowserRouter([
  {path: '/', element: <Landing/>},
  {path: '/signup', element: <SignUp/>},
  {path: '/signin', element: <SignIn/>},
  {path: '/event', element: <Event/>},
  {path:'/college', element: <College/>},
  {path: '/createevent', element: <CreateEvent/>},
  {path: '/notfound', element: <NotFound/>}

])

function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
