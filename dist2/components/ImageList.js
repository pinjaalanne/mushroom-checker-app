import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ToggleButton from "./ToggleButton";
import data from "../data/data";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const ImageList = ({ images }) => {
    const [predictionImages, setPredictionImages] = useState([]);
    const [carouselActivate, setCarouselActivate] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const onCarouselActivate = () => {
        setCarouselActivate(!carouselActivate);
    };
    useEffect(() => {
        // Function to handle resize events
        const handleResize = () => {
            const isMobileSize = window.innerWidth <= 768; // Check if the window width is less than or equal to 768 pixels
            setIsMobile(isMobileSize); // Set the state variable isMobile with the result of the check
        };
        handleResize(); // Call handleResize once to set the initial state based on the window size
        window.addEventListener("resize", handleResize); // Add an event listener for the "resize" event on the window
        // Cleanup function: remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // Update the predictionImages state variable when the images prop changes
    // This will be triggered when the user uploads a new image
    useEffect(() => {
        setPredictionImages(images);
    }, [images]);
    return (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6", children: [predictionImages && predictionImages.length >= 2 && isMobile && (_jsxs("div", { className: "flex justify-end items-center max-w-[85vw]", children: [_jsx("span", { className: "text-slate-300 mr-4", children: "Carousel View" }), _jsx(ToggleButton, { value: carouselActivate, onClick: onCarouselActivate })] })), predictionImages &&
                predictionImages.length >= 2 &&
                isMobile &&
                carouselActivate ? (_jsx(Carousel, { images: predictionImages })) : (predictionImages?.map((image, index) => (_jsx("div", { className: "flex relative flex-col items-center pb-8 bg-primary justify-center border border-gray-300 active:scale-90 transition duration-150", children: image && (_jsxs(_Fragment, { children: [_jsx(Image, { src: image.url, alt: image.name, width: 400, height: 400, className: "max-h-[250px] object-contain" }), image.predictions.map((item, index) => {
                            if (item.probability !== 0) {
                                const matchingData = data.find((data) => data.name === item.className);
                                return (_jsx("div", { className: `flex items-center absolute bottom-0 justify-center w-full`, children: _jsx("p", { className: "text-lg font-bold", children: _jsxs("span", { className: "text-[#fff]", children: [_jsxs("p", { children: [matchingData?.name, " ", _jsxs("span", { className: "italic", children: ["(", matchingData?.scientificName, ")"] })] }), _jsx(Link, { to: `${matchingData?.name}`, children: _jsx(Button, { sx: { backgroundColor: '#d7c8c0', color: '#48362c', ":hover": { backgroundColor: '#a28778' } }, children: "Learn More" }) })] }) }) }, index));
                            }
                        })] })) }, index))))] }));
};
export default ImageList;
