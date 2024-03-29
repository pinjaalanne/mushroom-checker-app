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
          {images.map((image) => (
            <SplideSlide key={image.url}>
              <div className="flex cursor-pointer relative h-[100%] max-w-[90vw] mx-auto flex-col items-center pb-8 bg-quaternary justify-center border border-brown-300 active:scale-90 transition duration-150">
                {image && (
                  <>
                    <Image
                      src={image.url}
                      alt={image.name}
                      width={250}
                      height={250}
                      className="max-h-[300px] object-contain my-2" />
                    {image.predictions.map((item) => {
                      if (item.probability !== 0) {
                        return (
                          <div
                            className={`flex items-center absolute bottom-0 justify-center w-full`}
                            key={item.className}
                          >
                            <p className="text-sm mb-4">
                              <span className="text-primary">
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
    </div >
  );
};

export default Carousel;
