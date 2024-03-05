import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { MoonLoader } from "react-spinners";
export default function Layout() {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);
    return (_jsx(_Fragment, { children: isLoading ? (_jsx("div", { className: "flex justify-center items-center h-screen", children: _jsx(MoonLoader, { color: "red" }) })) : (_jsxs("div", { className: `bg-primary scroll-smooth flex flex-col min-h-screen min-w-screen ${"fade-in"}`, children: [_jsx(Header, {}), _jsx("main", { className: "bg-secondary flex-grow my-8 max-w-[1600px] mx-auto", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] })) }));
}
