// import Header from "./Header"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "./LoginPage"
import Browse from "./Browse"

const Body = () => {
    const appRouting = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage />,
        },
        {
            path: '/browse',
            element: <Browse />,
        }
    ])

    return (
        <RouterProvider router={appRouting}>
        </RouterProvider>
    )
}

export default Body
