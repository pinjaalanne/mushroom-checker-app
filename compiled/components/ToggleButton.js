import { jsx as _jsx } from "react/jsx-runtime";
// ToggleButton component is button to switch on and off the carousel view
const ToggleButton = ({ value, onClick }) => {
    const toggleClass = "transform translate-x-6";
    return (_jsx("button", { onClick: onClick, className: `w-14 h-7 flex items-center
      bg-white rounded-full 
      p-1 cursor-pointer`, children: _jsx("div", { className: `bg-primary h-6
          w-6 rounded-full shadow-md transition transform${value ? toggleClass : null}` }) }));
};
export default ToggleButton;
