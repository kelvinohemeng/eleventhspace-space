import React, { useEffect, useRef, useState } from "react";
import { Link } from "./Link";
import { Copyright } from "@phosphor-icons/react";
import gsap from "gsap";

const NavSideBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ntl = gsap.timeline({ paused: true });

    ntl
      .to(".bbg", {
        opacity: 1,
      })
      .to(".seq_1", {
        xPercent: -100,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        ".seq_2",
        {
          xPercent: -100,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=1"
      );

    timelineRef.current = ntl;
  }, []);

  useEffect(() => {
    if (isClicked) {
      timelineRef.current?.play();
      console.log("clicked");
    } else {
      timelineRef.current?.reverse();
      console.log("reverse click");
    }
    console.log(isClicked);
  }, [isClicked, setIsClicked]);

  return (
    <>
      <div
        className={`absolute bbg inset-0 h-screen bg-opacity-50 bg-black pointer-events-none opacity-0 `}
      ></div>
      <div
        className="relative space-y-2 !z-[999] trigger_nav cursor-pointer"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <div
          className={`w-[35px] h-1 bg-slate-600 transition-all ${
            isClicked ? " transform rotate-[45deg] translate-y-3 bg-white" : ""
          }`}
        ></div>
        <div
          className={`w-[35px] h-1 bg-slate-600 transition-all ${
            isClicked ? " bg-opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-[35px] h-1 bg-slate-600 transition-all ${
            isClicked
              ? " transform rotate-[-45deg] -translate-y-3 bg-white"
              : ""
          }`}
        ></div>
      </div>

      <div className="absolute top-0 right-0 w-full max-w-[500px] translate-x-[100%] h-screen bg-slate-900 z-[99] overflow-hidden seq_1">
        <div className="p-8 pt-[80px] flex flex-col justify-between h-full">
          <div className="gap-12 flex flex-col seq_2">
            <Link href="/">
              <h3 className="text-white seq_2">Home</h3>
            </Link>
            <Link href="/about">
              <h3 className="text-white seq_2">About</h3>
            </Link>
            <Link href="/projects">
              <h3 className="text-white seq_2">Projects</h3>
            </Link>
            <Link href="/admin" target="_blank">
              <h3 className="text-white seq_2">admin</h3>
            </Link>
          </div>
          <div className="space-y-6 seq_2">
            <h2 className="text-white seq_2">eleventhspace</h2>
            <div className="flex justify-between items-center text-white seq_2">
              <span className="flex items-center gap-2">
                <p>Copyright</p>
                <Copyright />
                <p>eleventhspace 2024</p>
              </span>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSideBar;
