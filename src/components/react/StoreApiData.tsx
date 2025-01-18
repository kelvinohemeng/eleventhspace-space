import React, { useEffect } from "react";
import { useApiData } from "../../lib/zustand/store";
import { client } from "../../lib/sanity/sanity";
import { EVENTS_QUERY } from "../../lib/sanity/sanityQueries";

const StoreApiData = () => {
  const { projects, fetchData, isLoading } = useApiData();

  useEffect(() => {
    fetchData();
    console.log(projects);
  }, []); // Dependency array includes only `setData` because it's stable (doesn't change)

  return null; // Adjust this if you need to render something
};

export default StoreApiData;
