import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./layouts/Router";
import LoadingPage from "./layouts/components/LoadingPage";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={routers} />
    </Suspense>
  );
}

export default App;
