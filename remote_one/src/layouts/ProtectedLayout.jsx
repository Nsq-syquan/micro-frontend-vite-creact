import React from "react";
import ASidebar from "../components/ASidebar";

const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex gap-1 h-full w-full">
      <div className="flex h-[calc(100vh-64px)] w-full">
        <ASidebar />
        <div className="bg-gray-200 flex-auto  p-[24px] overflow-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
