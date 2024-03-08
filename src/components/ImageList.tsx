import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ToggleButton from "./ToggleButton";
import data from "../data/data"
import { UploadedImage, ImageListProps } from "../types/customedTypes";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  const [predictionImages, setPredictionImages] = useState<UploadedImage[]>([]);
  const [carouselActivate, setCarouselActivate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onCarouselActivate = () => {
    setCarouselActivate(!carouselActivate);
  };

  useEffect(() => {
    // Function to handle resize events
    const handleResize = () => {
      const isMobileSize = window.innerWidth <= 768;      // Check if the window width is less than or equal to 768 pixels
      setIsMobile(isMobileSize);                          // Set the state variable isMobile with the result of the check
    };

    handleResize();                                       // Call handleResize once to set the initial state based on the window size
    window.addEventListener("resize", handleResize);      // Add an event listener for the "resize" event on the window
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {predictionImages && predictionImages.length >= 2 && isMobile && (
        <div className="flex justify-end items-center max-w-[85vw]">
          <span className="text-quaternary mr-4">Carousel View</span>
          <ToggleButton value={carouselActivate} onClick={onCarouselActivate} />
        </div>
      )}
      {predictionImages &&
        predictionImages.length >= 2 &&
        isMobile &&
        carouselActivate ? (
        <Carousel images={predictionImages} />
      ) : (
        predictionImages?.map((image) => (
          <Card
            sx={{ bgcolor: "#FFF2EB", margin: "1rem", padding: "1rem" }}
            key={image.url}
            className="bg-primary flex relative flex-col items-center justify-center border-radius-10 border-brown-300"
          >
            {image && (
              <>
                <CardMedia
                  component="img"
                  sx={{ maxHeight: "200px", margin: "0", objectFit: "contain" }}
                  image={image.url}
                  alt="Mushroom image"
                />

                {image.predictions.map((item) => {
                  if (item.probability !== 0) {
                    const matchingData = data.find(
                      (data) => data.name === item.className
                    );
                    return (
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Box
                            className={`flex items-center bottom-0 justify-center`}
                            key={item.className}
                          >
                            <div className="text-center text-lg text-quarfont-bold">
                              <span className="text-primary">
                                <Typography>
                                  {matchingData?.name}
                                  <span className="text-primary italic">({matchingData?.scientificName})</span>
                                </Typography>

                                <Link to={`${matchingData?.name}`}>
                                  <Button sx={{ marginTop: "1rem", backgroundColor: '#d7c8c0', color: '#48362c', ":hover": { backgroundColor: '#a28778' } }}>Learn More</Button>
                                </Link>
                              </span>
                            </div>
                          </Box>
                        </CardContent>
                      </Box>
                    );
                  }
                })}
              </>
            )
            }
          </Card>
        ))
      )}
    </div>
  );
};

export default ImageList;
