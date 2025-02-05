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
    <a href={href} className="footer-link cursor-pointer">
      <h6 ref={linkRef1}>{linkName}</h6>
    </a>
  );
};
