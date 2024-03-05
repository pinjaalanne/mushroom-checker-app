import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ImageUploadInput from "../components/ImageUploadInput";
import ImageList from "../components/ImageList";
import { useModel } from "../library/ModelContext";
export default function ImageUploader() {
    // State to manage uploaded images and tracking if an image is uploaded
    const [images, setImages] = useState([]);
    const [imageUploaded, setImageUploaded] = useState(false);
    // Accessing the machine learning model from the context
    const { model } = useModel();
    // Function to predict the class of an uploaded image using the machine learning model
    const predictImage = async (image) => {
        // Check if the model is available
        if (!model)
            return;
        // Create an image element and set its source
        const img = document.createElement("img");
        img.src = image?.url;
        await img.decode();
        // Predict the image class using the machine learning model
        const predictions = await model.predict(img);
        // Find the maximum probability among predictions
        const maxFloatValue = Math.max(...predictions.map((obj) => obj.probability));
        // Map predictions to custom class prediction format
        const predictionData = predictions.map((p) => ({
            className: p.className,
            probability: p.probability === maxFloatValue ? p.probability : 0,
        }));
        const updatedImage = { ...image, predictions: predictionData };
        setImages((prevImages) => [updatedImage, ...prevImages]);
        setImageUploaded(false);
    };
    // Function to handle the change event when a user selects images for upload
    const handleImageChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setImageUploaded(true);
            const fileArray = Array.from(files);
            const readerArray = [];
            fileArray.forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const imageArray = {
                        name: file.name,
                        url: reader.result,
                        predictions: [],
                    };
                    predictImage(imageArray);
                };
                reader.readAsDataURL(file);
                readerArray.push(reader);
            });
        }
    };
    return (_jsxs("div", { className: "max-w-[90vw] lg:max-w-[80vw] mx-auto", children: [_jsx("h1", { className: "text-white font-semibold my-6 text-[1rem] lg:w-[70vw] max-w-[1250px] mx-auto lg:leading-snug md:text-3xl lg:text-3xl md:my-8 lg:mt-14 lg:mb-10 text-center", children: "Identify Your Mushrooms with Machine Learning" }), _jsxs("div", { children: [!model ? (_jsx("div", { className: "text-center mx-auto flex justify-center items-center", children: _jsxs("button", { type: "button", className: "bg-white processing-btn text-lg font-bold text-primary px-7 py-3 rounded-full flex items-center justify-center disabled", children: [_jsx("svg", { className: "animate-spin processing-svg h-5 w-5 mr-3 border-b-2 border-primary rounded-full", viewBox: "0 0 24 24" }), "Processing..."] }) })) : (_jsxs("div", { className: "flex flex-col justify-center items-center mb-12 my-10 lg:my-16 fade-in", children: [_jsx(ImageUploadInput, { handleImageUpload: handleImageChange }), _jsx("p", { className: "text-xs text-white mt-4 text-center w-[250px] max-w-fit", children: "We do not save your images. Your privacy is important to us." })] })), _jsx("div", { className: `flex justify-center items-center ${imageUploaded && "my-14"}`, children: imageUploaded && _jsx("div", { className: "borders" }) }), _jsx(ImageList, { images: images })] })] }));
}
