import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingPage from "./layouts/components/LoadingPage";
import { menu } from "./layouts/menu";
import ProtectedLayout from "./layouts/ProtectedLayout";
import { useMFE1Store } from "./stores";

const queryClient = new QueryClient();

function App() {
  const { path } = useMFE1Store();

  console.log("mfe-path", path)

  return (
    <QueryClientProvider client={queryClient}>
      <Routes path="/">
        {menu?.map((item, index) => {
          return (
            <Route
              key={index}
              path={item?.path}
              element={
                <ProtectedLayout>
                  <Suspense fallback={<LoadingPage />}>
                    {item?.component}
                  </Suspense>
                </ProtectedLayout>
              }
            />
          );
        })}
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
