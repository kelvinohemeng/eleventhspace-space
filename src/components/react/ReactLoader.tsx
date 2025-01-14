import React from "react";
import { useLoaderStore } from "../../lib/zustand/store";

const ReactLoader = () => {
  const isLoading = useLoaderStore((state) => state.isLoading);

  return isLoading ? (
    <div className="fixed inset-0 bg-black z-50">
      {" "}
      <h1 className="text-white three absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Loading
      </h1>
    </div>
  ) : null;
};

export default ReactLoader;
