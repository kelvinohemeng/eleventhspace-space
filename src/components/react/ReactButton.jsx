import React from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Magnet from "../react/reactbits/Magnet";

export const ReactButton = ({ title = "learn more", href = "/" }) => {
  return (
    <Magnet client:visible padding={20} disabled={false} magnetStrength={10}>
      <a href={href}>
        <button class="text-e-lg dark:text-Black-e-black-500 dark:bg-white text-white bg-black full flex gap-3 items-center px-6 py-4 rounded-full">
          <span>{title}</span>
          <ArrowUpRight />
        </button>
      </a>
    </Magnet>
  );
};
