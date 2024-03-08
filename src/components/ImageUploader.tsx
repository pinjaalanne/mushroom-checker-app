import React, { useState } from "react";
import ImageUploadInput from "../components/ImageUploadInput";
import ImageList from "../components/ImageList";
import { useModel } from "../library/useModel";
import { ClassPrediction, UploadedImage } from "../types/customedTypes";


export default function ImageUploader() {

  // State to manage uploaded images and tracking if an image is uploaded
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [imageUploaded, setImageUploaded] = useState(false);

  // Accessing the machine learning model from the context
  const { model } = useModel();

  // Function to predict the class of an uploaded image using the machine learning model
  const predictImage = async (image: UploadedImage) => {

    // Check if the model is available
    if (!model) return;

    // Create an image element and set its source
    const img = document.createElement("img");
    img.src = image?.url;
    await img.decode();

    // Predict the image class using the machine learning model
    const predictions = await model.predict(img);

    // Find the maximum probability among predictions
    const maxFloatValue = Math.max(
      ...predictions.map((obj) => obj.probability)
    );

    // Map predictions to custom class prediction format
    const predictionData: ClassPrediction[] = predictions.map((p) => ({
      className: p.className,
      probability: p.probability === maxFloatValue ? p.probability : 0,
    }));
    const updatedImage = { ...image, predictions: predictionData };
    setImages((prevImages) => [updatedImage, ...prevImages]);
    setImageUploaded(false);
  };

  // Function to handle the change event when a user selects images for upload
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setImageUploaded(true);
      const fileArray: File[] = Array.from(files);
      const readerArray: FileReader[] = [];

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageArray = {
            name: file.name,
            url: reader.result as string,
            predictions: [],
          };
          predictImage(imageArray);
        };
        reader.readAsDataURL(file);
        readerArray.push(reader);
      });
    }
  };

  return (
    <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto">
      <h1 className="text-quaternary font-semibold my-6 text-[1rem] lg:w-[70vw] max-w-[1250px] mx-auto lg:leading-snug md:text-3xl lg:text-3xl md:my-8 lg:mt-14 lg:mb-10 text-center">
        Identify Your Mushrooms with Machine Learning
      </h1>
      <div>
        {!model ? (
          <div className="text-center mx-auto flex justify-center items-center">
            <button
              type="button"
              className="bg-white processing-btn text-lg font-bold text-primary px-7 py-3 rounded-full flex items-center justify-center disabled"
            >
              <svg
                className="animate-spin processing-svg h-5 w-5 mr-3 border-b-2 border-primary rounded-full"
                viewBox="0 0 24 24"
              ></svg>
              Processing...
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mb-12 my-10 lg:my-16 fade-in">
            <ImageUploadInput handleImageUpload={handleImageChange} />
            <p className="text-xs text-quaternary mt-4 text-center w-[250px] max-w-fit">
              We do not save your images. Your privacy is important to us.
            </p>
          </div>
        )}
        <div
          className={`flex justify-center items-center ${imageUploaded && "my-14"
            }`}
        >
          {imageUploaded && <div className="borders" />}
        </div>
        <ImageList images={images} />
      </div>
    </div>
  );
}
