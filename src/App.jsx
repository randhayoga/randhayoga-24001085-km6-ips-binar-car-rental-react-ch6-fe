import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import AddCar from "./pages/addCar";

import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";

import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <Navbar />
                <Home />
            </Protected>
        ),
    },
    {
        path: "/login",
        element: (
            <NonProtected>
                <Login />
            </NonProtected>
        ),
    },
    {
        path: "/register",
        element: (
            <NonProtected>
                <Register />
            </NonProtected>
        ),
    },
    {
        path: "/profile",
        element: (
            <Protected>
                <Navbar />
                <Profile />
            </Protected>
        ),
    },
    {
        path: "/addCar",
        element: (
            <Protected roles={["admin", "superadmin"]}>
                <Navbar />
                <AddCar />
            </Protected>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer theme="colored" />
        </Provider>
    );
}

export default App;
