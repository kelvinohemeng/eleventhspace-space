import React, { useState, useEffect } from "react";
import { SplitTextAnim, SplitWordAnim } from "./TextAnimations";
import { ReactButton } from "../react/ReactButton";
import { cn, containerClass } from "../../lib/utils";

const services = [
  {
    title: "Photography",
    image:
      "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Videography",
    image:
      "https://images.pexels.com/photos/2461691/pexels-photo-2461691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Motion & Graphic Design",
    image: "/sample.png",
  },
  {
    title: "Animation",
    image:
      "https://images.pexels.com/photos/2461691/pexels-photo-2461691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Branding",
    image: "/sample.png",
  },
  {
    title: "Digital Marketing",
    image:
      "https://images.pexels.com/photos/2461691/pexels-photo-2461691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Content Creation",
    image: "/sample.png",
  },
  {
    title: "Signage & Billboard Installation",
    image:
      "https://images.pexels.com/photos/2461691/pexels-photo-2461691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Copywriting",
    image: "/sample.png",
  },
  {
    title: "Web Design",
    image:
      "https://images.pexels.com/photos/2461691/pexels-photo-2461691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Media & Ad Buying",
    image: "/sample.png",
  },
];
export const ServiceSectionReact = () => {
  const containerClasses = containerClass(false);
  const [currentService, setCurrentService] = useState({
    title: "Web Design",
    image:
      "https://images.pexels.com/photos/2461691/pexels-photo-2461691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

  useEffect(() => {
    console.log(currentService);
  }, [currentService]);
  return (
    <div>
      <div className={cn(containerClasses, "md:!pr-0 flex h-full ")}>
        <div className="flex flex-col md:flex-row-reverse gap-16 h-full ">
          <div className="w-full min-h-full max-sm:h-[500px] md:min-h-[400px] lg:min-h-[800px] bg-slate-300">
            <img
              className="!w-ful h-full object-cover"
              src={currentService.image}
              alt=""
            />
          </div>

          <div className="w-full flex flex-col gap-16 justify-center">
            <div>
              <div className="el-cover overflow-hidden">
                <div className="text-e-3xl text-Red-e-red-500 el">Services</div>
              </div>
              <div className="max-w-[750px] flex flex-col gap-16">
                <SplitTextAnim
                  text="Our Services"
                  className=" leading-[100%] font-helvetica font-[500] dark:text-white"
                  duration={1.5}
                  wrapper="h1"
                />
                <SplitWordAnim
                  text={`Elevent Space is a creative agency redefining the boundaries of everyday brand experiences. We specialize in crafting unique, engaging, and brand-centered solutions that resonate deeply with our clients and their target audiences.`}
                  className={"text-e-7xl dark:text-Black-e-black-50"}
                />
              </div>
            </div>

            <div className="space-y-11">
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <button
                    onClick={() => setCurrentService(service)}
                    className={`${"hover:bg-[#471D86] hover:text-white hover:border-none transition-all duration-300 "} border border-black dark:border-others-text-dark dark:text-others-text-dark text-e-lg md:text-e-2xl px-3 py-2 rounded-full text-black`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              <div>
                <ReactButton title="Let's Start a Conversation" href="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
