import React, { ChangeEventHandler } from "react";

interface ImageUploadProps {
  handleImageUpload: ChangeEventHandler<HTMLInputElement>;
}

const ImageUploadInput: React.FC<ImageUploadProps> = ({ handleImageUpload }) => {
  return (
    <label className="block bg-white shadow-xl p-4 lg:px-6 rounded-full max-w-[260px] md:max-w-max">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="rounded-3xl text-primary block w-full text-sm
        file:mr-5 file:py-2 file:px-4
        lg:file:mr-6 lg:file:py-3 lg:file:px-5
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:cursor-pointer
        file:bg-[#e2cec4] file:text-primary
        file:active:scale-90 file:transition file:duration-150
        cursor-pointer
    "></input>
    </label>
  );
};

export default ImageUploadInput;
