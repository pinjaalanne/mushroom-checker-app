import * as React from "react";
import Image from "react-bootstrap/Image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-xl border-b-[1px] border-[#4b5563]">
      <div className="layout flex h-14 lg:h-16 items-center justify-between max-w-[90vw] lg:max-w-[80vw] 2xl:max-w-[1400px] mx-auto">
        
          <div className="flex justify-center items-center text-white text-xl mx-2">
            <Image
              alt=""
              src="https://i.ibb.co/qFZpvXs/logo.png"
              width={40}
              height={40}
            />
            <span className="mx-2">Mushrooms Checker</span>
            </div>
           </div>
    </header>
  );
}
