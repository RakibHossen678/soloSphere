import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path:'/addJob',
        element:<AddJob></AddJob>
      }
    ],
  },
]);

export default router;
