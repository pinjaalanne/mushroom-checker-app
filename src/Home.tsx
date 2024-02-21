import ImageUploader from "./components/ImageUploader";
import Information from "./components/Information";
import React from "react";

export default function Home() {
  return (
    <>
      <main>
        <ImageUploader />
        <Information />
      </main>
    </>
  );
}
