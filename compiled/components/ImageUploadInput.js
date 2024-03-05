import { jsx as _jsx } from "react/jsx-runtime";
const ImageUploadInput = ({ handleImageUpload }) => {
    return (_jsx("label", { className: "block bg-white shadow-xl p-4 lg:px-6 rounded-full max-w-[260px] md:max-w-max", children: _jsx("input", { type: "file", accept: "image/*", onChange: handleImageUpload, className: "block w-full text-sm text-slate-500\n        file:mr-5 file:py-2 file:px-4\n        lg:file:mr-6 lg:file:py-3 lg:file:px-5\n        file:rounded-full file:border-0\n        file:text-sm file:font-semibold\n        file:cursor-pointer\n        file:bg-primary file:text-white\n        file:active:scale-90 file:transition file:duration-150\n        cursor-pointer\n    " }) }));
};
export default ImageUploadInput;
