import type { FC } from 'react';
import ModelProvider from "./ModelProvider";
import Layout from "./components/Layout";

import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Mushroom from './Mushroom';



const App: FC =( ) => {
const router = createBrowserRouter([
{
element: <Layout/>,
children: [
    {
        path:"/",
        element: <Home/>

    },
    {
      path:":mushroom",
      element: <Mushroom/>

  },

]
}

])
    
  return (
    <ModelProvider>
    <RouterProvider router={router}/>
    </ModelProvider>
  );
}

export default App;