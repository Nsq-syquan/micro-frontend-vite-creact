import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthLayout } from "./AuthLayout";
import { ErrorPage } from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";
import NotFoundPage from "./components/NotFoundPage";
import { menu } from "./menu";
import ProtectedLayout from "./ProtectedLayout";

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />} errorElement={<ErrorPage />}>
      {/* <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
        </Route> */}

      <Route path="/" element={<ProtectedLayout />}>
        {menu?.map((item, index) => {
          return (
            <Route
              key={index}
              path={item?.path}
              element={
                <Suspense fallback={<LoadingPage />}>
                  {item?.component}
                </Suspense>
              }
            />
          );
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
);
