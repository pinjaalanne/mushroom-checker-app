import * as React from "react";
import Image from "react-bootstrap/Image";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-xl border-b-[1px] border-[#4b5563]">
      <div className="layout flex h-1 lg:h-16 items-center justify-between max-w-[90vw] lg:max-w-[80vw] 2xl:max-w-[1400px] mx-auto my-2">
        <Link to={"/"}>
          <div className="flex justify-center items-center text-white text-xl mx-1">
            <Image alt="" src={logo} width={200} height={"auto"} />
            {/* <span className="mx-2">Mushrooms Checker</span> */}
          </div>
        </Link>
        <Link to={"/about"} className="text-white">
          <h2>About</h2>
        </Link>
      </div>
    </header>
  );
}
