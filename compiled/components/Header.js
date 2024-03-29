import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
    return (_jsx("header", { className: "sticky top-0 z-50 bg-primary shadow-xl border-b-[1px] border-[#4b5563]", children: _jsxs("div", { className: "layout flex h-1 lg:h-16 items-center justify-between max-w-[90vw] lg:max-w-[80vw] 2xl:max-w-[1400px] mx-auto my-2", children: [_jsx(Link, { to: "/", children: _jsx("div", { className: "flex justify-center items-center text-white text-xl mx-1", children: _jsx(Image, { alt: "", src: logo, width: 200, height: "auto" }) }) }), _jsx(Link, { to: "/about", className: "text-white", children: _jsx("h2", { children: "About" }) })] }) }));
};
export default Header;
