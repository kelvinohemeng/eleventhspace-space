import { useState } from "react";
import type { HTMLAttributeAnchorTarget } from "react";
import { cn } from "../../lib/utils";

type LinkButtonProps = {
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  children: React.ReactNode;
};
export const Link = ({
  href,
  className,
  target,
  children,
}: LinkButtonProps) => {
  // const [test, setTest] = useState(false);
  const [test, setTest] = useState(false);
  return (
    <a
      href={href}
      target={target}
      className={cn("link no-underline text-black text-lg", className, {
        "text-red-700": test,
      })}
    >
      {children}
    </a>
  );
};
