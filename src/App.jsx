import { Container, ToastContainer } from "react-bootstrap";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/login";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
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
