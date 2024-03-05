import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import * as tmImage from "@teachablemachine/image";
import { config } from "./config/config";

interface ModelContextInterface {
  model: tmImage.CustomMobileNet | null;
}
interface Props {
  children: ReactNode;
}

const ModelContext = createContext<ModelContextInterface>({
  model: null,
});

// Custom hook to consume the model from the context
export const useModel = () => useContext(ModelContext);

// Provider component responsible for loading and providing the machine learning model
const ModelProvider = ({ children }: Props) => {

  // State to store the loaded machine learning model
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);

  // Effect to load the machine learning model on component mount
  useEffect(() => {
    const loadModel = async () => {
      // Check if the model is not already loaded
      if (!model) {
      // Load the model using Teachable Machine's load function
        const loadedModel = await tmImage.load(
          config.modelURL,
          config.metadataURL
        );
        setModel(loadedModel);
        console.log("Model loaded", loadedModel);
      }
    };
    loadModel();
  }, []);

  return (
    <ModelContext.Provider value={{ model }}>{children}</ModelContext.Provider>
   
  );
};

export default ModelProvider;