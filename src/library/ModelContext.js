import React, { createContext, useContext, useState, useEffect, } from "react";
import * as tmImage from "@teachablemachine/image";
import { config } from "../config/config";
const ModelContext = createContext({
    model: null,
});
export const useModel = () => useContext(ModelContext);
// Provider component responsible for loading and providing the machine learning model
const ModelProvider = ({ children }) => {
    const [model, setModel] = useState(null);
    // Effect to load the machine learning model on component mount
    useEffect(() => {
        const loadModel = async () => {
            if (!model) {
                // Load the model using Teachable Machine's load function
                const loadedModel = await tmImage.load(config.modelURL, config.metadataURL);
                setModel(loadedModel);
            }
        };
        loadModel();
    }, []);
    return (React.createElement(ModelContext.Provider, { value: { model } }, children));
};
export default ModelProvider;
