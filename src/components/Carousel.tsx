import React from "react";
import "@splidejs/react-splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide"; 
import Image from "react-bootstrap/Image";
import { ImageListProps } from "../types/customedTypes";


const options: Options = {
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

const Carousel: React.FC<ImageListProps> = ({ images }) => {

  return (
    <div className="">
      <div className="mx-auto">
        <Splide options={options}> 
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <div className="flex cursor-pointer relative h-[100%] max-w-[90vw] mx-auto flex-col items-center pb-8 bg-primary justify-center border border-gray-300 active:scale-90 transition duration-150">
                {image && (
                  <>
                    <Image
                      src={image.url}
                      alt={image.name}
                      width={400}
                      height={400}
                      className="max-h-[300px] object-contain"
                    />
                    {image.predictions.map((item, index) => {
                      if (item.probability !== 0) {
                        return (
                          <div
                            className={`flex items-center absolute bottom-0 justify-center w-full`}
                            key={index}
                          >
                            <p className="text-lg font-bold">
                              <span className="text-[#fff]">
                                {item.className} 
                             
                              </span>
                            </p>
                          </div>
                        );
                      }
                    })}
                  </>
                )}
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
