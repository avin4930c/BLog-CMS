import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ErrorPage } from '../errorPage';
import MainPage from '../pages/mainPage';
import AddBlogForm from '../components/addBlogForm';
import SignupForm from '../components/signupForm';
import LoginForm from '../components/loginForm';
import EditBlogForm from '../components/editBlogForm';
import UnderDevelopmentPage from '../components/soonPage';
import EditProfile from '../components/editProfile';

function Route() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/signup',
            element: <SignupForm />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/login',
            element: <LoginForm />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/editProfile',
            element: <EditProfile />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/addBlog',
            element: <AddBlogForm />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/editBlog/:id',
            element: <EditBlogForm />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/topics',
            element: <UnderDevelopmentPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: '*',
            errorElement: <ErrorPage />,
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export { Route }