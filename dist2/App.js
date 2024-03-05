import { jsx as _jsx } from "react/jsx-runtime";
import ModelProvider from "./library/ModelContext";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Mushroom from "./Mushroom";
import About from "./pages/About";
const App = () => {
    const router = createBrowserRouter([
        {
            element: _jsx(Layout, {}),
            children: [
                {
                    path: "/",
                    element: _jsx(Home, {}),
                },
                {
                    path: ":mushroom",
                    element: _jsx(Mushroom, {}),
                },
                {
                    path: "/about",
                    element: _jsx(About, {}),
                },
            ],
        },
    ]);
    return (_jsx(ModelProvider, { children: _jsx(RouterProvider, { router: router }) }));
};
export default App;
