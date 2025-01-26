import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type FooterLink = {
  linkName: string;
  href?: string;
};

export const FooterLinks = ({ linkName, href }: FooterLink) => {
  const linkRef1 = useRef<HTMLDivElement>(null);
  const linkRef2 = useRef<HTMLDivElement>(null);

  return (
    <div className=" max-h-[25px] overflow-hidden dark:text-white">
      <a
        href={href}
        className="footer-link cursor-pointer flex flex-col transition-all duration-200 hover:translate-y-[-30px]"
      >
        <h6 ref={linkRef1}>{linkName}</h6>
        <h6 ref={linkRef2}>{linkName}</h6>
      </a>
    </div>
  );
};
