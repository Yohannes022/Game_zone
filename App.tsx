import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
// import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-semiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });

export default function App() {
  {/**customizing fonts 
    const [fontsLoaded, setFontsLoaded] = useState(false);
    if (fontsLoaded) {
      return <Home />
    } else {
      return (
        <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
      );
    }
    
    */}
  

  return <Home />;
}
