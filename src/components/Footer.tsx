import React from "react";


const Footer: React.FC = () => {
  return (
    <div className="text-center py-4 w-full">
      <footer className="text-quaternary">
        © {new Date().getFullYear()} Developed By Team 4{" "}
      </footer>
    </div>
  );
};

export default Footer;
