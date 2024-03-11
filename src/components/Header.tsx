import * as React from "react";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo4.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="sticky bg-primary top-0 z-50 shadow-xl border-b-[0.5px] border-primary">
      <div className="layout bg-primary flex h-1 h-16 items-center justify-between max-w-[90vw] lg:max-w-[80vw] 2xl:max-w-[1400px] mx-auto my-2">
        <Link to={"/"}>
          <Image alt="no logo" src={logo} width={200} height={"auto"} />
        </Link>
        <Link to={"/about"} className="font-sans text-quaternary font-semibold hover:underline">
          <h2>About</h2>
        </Link>
      </div>
    </header>
  );
}
export default Header