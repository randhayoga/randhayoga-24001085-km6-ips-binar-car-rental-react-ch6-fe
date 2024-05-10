import { Container, ToastContainer } from "react-bootstrap";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Home />
            </>
        ),
    },
    {
        path: "/login",
        element: (
            <>
                <Login />
            </>
        ),
    },
    {
        path: "/register",
        element: (
            <>
                <Register />
            </>
        ),
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer theme="colored" />
        </>
    );
}

export default App;
