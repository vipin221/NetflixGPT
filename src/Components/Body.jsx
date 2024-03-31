// import Header from "./Header"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "./LoginPage"
import Home from "./Home"

const Body = () => {
    const appRouting = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage />,
        },
        {
            path: '/home',
            element: <Home />,
        }
    ])
    return (
        <RouterProvider router={appRouting}>
        </RouterProvider>
    )
}

export default Body
