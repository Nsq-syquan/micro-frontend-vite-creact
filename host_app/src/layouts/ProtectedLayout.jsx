import React from "react";
import { useOutlet } from "react-router-dom";
import AHeader from "../components/AHeader";

const ProtectedLayout = () => {
  const outlet = useOutlet();
  return (
    <div className="h-screen w-screen flex flex-col gap-1">
      <AHeader />
      <div className="h-[100vh - 60px] w-screen bg-red-50">{outlet}</div>
    </div>
  );
};

export default ProtectedLayout;
