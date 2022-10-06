import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/HomeComponent";
import Contact from "./pages/contact/ContactComponent";
import Header from "./Header";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>

          {/* <Main theme={chosenTheme} /> */}
          {/* <Header theme={chosenTheme} /> */}
          <Header theme={chosenTheme} />
          <Home theme={chosenTheme} />
          <Projects theme={chosenTheme} />
          <Contact theme={chosenTheme} />


        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
