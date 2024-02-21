import { Outlet } from "react-router-dom";
import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";

export default function Layout() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`bg-primary scroll-smooth flex flex-col min-h-screen ${
            "fade-in"
          }`}
        >
          <Header />
          <main className="flex-grow my-8 max-w-[1600px] mx-auto">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
