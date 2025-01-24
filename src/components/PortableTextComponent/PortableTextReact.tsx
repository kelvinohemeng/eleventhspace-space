import React from "react";
import { PortableText } from "@portabletext/react";

const PortableTextReact = ({ values }) => {
  return <PortableText value={values.children} />;
};

export default PortableTextReact;
