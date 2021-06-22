import AOS from "aos";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/styles/style.scss";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route
            path={""}
            component={React.lazy(() => import("./pages/home"))}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
