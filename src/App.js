import React from "react";
import Style from "./App.module.scss";
import BaseLayout from "./Components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className={Style.app}>
        <BaseLayout>
          <Home />
        </BaseLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
