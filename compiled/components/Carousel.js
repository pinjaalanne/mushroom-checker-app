import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "react-bootstrap/Image";
const options = {
    perPage: 1,
    start: 0,
    perMove: 1,
    gap: "50%",
    type: "loop",
    pagination: false,
    arrows: true,
    width: "100%",
    rewind: true,
};
const Carousel = ({ images }) => {
    return (_jsx("div", { className: "", children: _jsx("div", { className: "mx-auto", children: _jsx(Splide, { options: options, children: images.map((image, index) => (_jsx(SplideSlide, { children: _jsx("div", { className: "flex cursor-pointer relative h-[100%] max-w-[90vw] mx-auto flex-col items-center pb-8 bg-primary justify-center border border-gray-300 active:scale-90 transition duration-150", children: image && (_jsxs(_Fragment, { children: [_jsx(Image, { src: image.url, alt: image.name, width: 400, height: 400, className: "max-h-[300px] object-contain" }), image.predictions.map((item, index) => {
                                    if (item.probability !== 0) {
                                        return (_jsx("div", { className: `flex items-center absolute bottom-0 justify-center w-full`, children: _jsx("p", { className: "text-lg font-bold", children: _jsx("span", { className: "text-[#fff]", children: item.className }) }) }, index));
                                    }
                                })] })) }) }, index))) }) }) }));
};
export default Carousel;
