import { jsx as _jsx } from "react/jsx-runtime";
import ImageUploader from "./components/ImageUploader";
const Home = () => {
    return (_jsx("main", { className: "bg-tertiary", children: _jsx(ImageUploader, {}) }));
};
export default Home;
