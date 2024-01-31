import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import CustomNavbar from "./components/CustomNavbar"
// import CustomSidebar from "./components/CustomSidebar"
import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
import { Suspense} from "react"
import Spinner from "./components/Spinner";
// const LazyAbout =lazy(()=>import("./pages/About"));
// const LazyContact =lazy(()=>import("./pages/Contact"));
// const LazyLogin =lazy(()=>import("./pages/login"));
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddEnq from "./pages/AddEnq";
import ViewCourse from "./pages/ViewCourse";
// import About from "./pages/About";
// import { Dashboard } from "@rsuite/icons";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
const App =()=>{
  const router=createBrowserRouter([
    {
      path:'/login',
      element :<Suspense fallback={<Spinner/>}><Login></Login></Suspense>
    },
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>}> <Home/></Suspense>
     },
     {
       path:'/about',
       element :<Suspense fallback={<Spinner/>}><Dashboard/></Suspense>
     },
    {
      path:'/signup',
      element :<Suspense fallback={<Spinner/>}><Signup/></Suspense>
    },
    {
      path:'/add',
      element :<Suspense fallback={<Spinner/>}><AddEnq/></Suspense>
    },
    {
      path:'/view',
      element :<Suspense fallback={<Spinner/>}><ViewCourse/></Suspense>
    },
    {
      path:'/ab',
      element :<Suspense fallback={<Spinner/>}><About/></Suspense>
    }
  ])
   return (
      <RouterProvider router={router}/>
  )
}

export default App
