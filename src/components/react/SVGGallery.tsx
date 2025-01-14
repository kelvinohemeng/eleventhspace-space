import gsap from "gsap";
import React, { useEffect } from "react";

const SVGGallery = () => {
  const width = 220 + 16;
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(".ssvgs", {
      x: -width * 7.9,
      duration: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        scrub: 1,
      },
    });
  }, []);

  const SVGS = [
    {
      id: 1,
      element: (
        <svg
          className="w-[220px] h-auto"
          viewBox="0 0 220 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4271_385)">
            <path d="M219.38 0H0.679688V218.7H219.38V0Z" fill="#654BFF" />
            <path
              d="M107.9 28.6797L157.19 43.2197L142.65 92.1497L92.6597 77.2597L107.9 28.6797Z"
              fill="#DD86EC"
            />
            <path
              d="M78.1196 126.55L127.41 141.09L112.87 190.02L62.8696 175.13L78.1196 126.55Z"
              fill="#DD86EC"
            />
            <path
              d="M43.3696 63.0801L92.6596 77.6201L78.1196 126.55L28.1196 111.66L43.3696 63.0801Z"
              fill="#DD86EC"
            />
            <path
              d="M142.65 92.1504L191.94 106.69L177.4 155.63L127.41 140.73L142.65 92.1504Z"
              fill="#DD86EC"
            />
          </g>
          <defs>
            <clipPath id="clip0_4271_385">
              <rect
                width="218.7"
                height="218.7"
                fill="white"
                transform="translate(0.679688)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 2,
      element: (
        <svg
          className="w-[220px] h-auto"
          viewBox="0 0 219 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4271_401)">
            <path d="M218.78 0H0.0795898V218.7H218.78V0Z" fill="#CDEE05" />
            <path
              d="M157.58 109.35C162.293 106.644 166.326 102.898 169.372 98.3974C172.418 93.8968 174.397 88.7604 175.158 83.3793C175.919 77.9982 175.441 72.5145 173.762 67.3459C172.082 62.1773 169.245 57.4602 165.467 53.5539C161.689 49.6477 157.069 46.6553 151.959 44.8048C146.849 42.9543 141.384 42.2945 135.981 42.8757C130.577 43.4568 125.378 45.2636 120.779 48.1583C116.179 51.0531 112.301 54.9594 109.44 59.5798C106.577 54.9631 102.699 51.0604 98.1001 48.1688C93.5016 45.2771 88.3039 43.4727 82.9028 42.8928C77.5016 42.3129 72.0394 42.9729 66.9318 44.8226C61.8242 46.6722 57.2059 49.6627 53.4284 53.5665C49.6509 57.4702 46.8139 62.1843 45.1331 67.3499C43.4524 72.5156 42.9723 77.9966 43.7294 83.3757C44.4865 88.7549 46.4608 93.8904 49.5021 98.3915C52.5434 102.892 56.5714 106.64 61.2797 109.35C56.5733 112.06 52.5472 115.808 49.5076 120.309C46.4679 124.809 44.4949 129.944 43.7385 135.322C42.9822 140.7 43.4624 146.18 45.1428 151.344C46.8232 156.509 49.6594 161.222 53.4356 165.125C57.2118 169.028 61.8285 172.019 66.9346 173.869C72.0406 175.719 77.5014 176.38 82.9015 175.802C88.3016 175.224 93.4987 173.422 98.0974 170.533C102.696 167.644 106.575 163.744 109.44 159.13C112.303 163.748 116.182 167.651 120.781 170.543C125.381 173.436 130.58 175.24 135.982 175.82C141.384 176.399 146.848 175.738 151.956 173.887C157.064 172.036 161.683 169.043 165.46 165.138C169.237 161.232 172.073 156.516 173.752 151.348C175.431 146.181 175.909 140.698 175.149 135.318C174.389 129.939 172.411 124.803 169.367 120.303C166.322 115.803 162.291 112.057 157.58 109.35ZM109.44 121.51C106.317 116.482 101.999 112.304 96.8697 109.35C101.996 106.396 106.314 102.223 109.44 97.1998C112.553 102.226 116.865 106.401 121.99 109.35C116.862 112.299 112.549 116.478 109.44 121.51Z"
              fill="#00BAD6"
            />
          </g>
          <defs>
            <clipPath id="clip0_4271_401">
              <rect
                width="218.7"
                height="218.7"
                fill="white"
                transform="translate(0.0795898)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      element: (
        <svg
          className="w-[220px] h-auto"
          viewBox="0 0 220 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4271_411)">
            <path d="M219.179 0H0.479492V218.7H219.179V0Z" fill="#1DBC81" />
            <path
              d="M32.0594 131.12V173.74L167.249 167.78V143.95L84.7594 136.62L188.789 137.53V100.87L151.669 104.08L152.129 82.5397L121.889 80.2497L186.499 73.8397L188.789 44.9697H65.9794L65.5194 77.0397L32.0594 74.2897L30.8694 105.51L130.849 105.69L58.5394 111.22L58.1894 133.9L32.0594 131.12Z"
              fill="#CDEE05"
            />
          </g>
          <defs>
            <clipPath id="clip0_4271_411">
              <rect
                width="218.7"
                height="218.7"
                fill="white"
                transform="translate(0.479492)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 4,
      element: (
        <svg
          className="w-[220px] h-auto"
          viewBox="0 0 220 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4271_421)">
            <path d="M219.58 0H0.879639V218.7H219.58V0Z" fill="#FF173A" />
            <path
              d="M168.54 167.65C163.454 172.735 156.556 175.592 149.365 175.592C142.173 175.592 135.275 172.735 130.19 167.65L110.19 147.65L90.1895 167.65C87.7208 170.374 84.724 172.568 81.3813 174.098C78.0386 175.627 74.4197 176.462 70.7446 176.55C67.0694 176.638 63.4147 175.978 60.0026 174.61C56.5904 173.242 53.492 171.194 50.8956 168.592C48.2992 165.989 46.259 162.886 44.899 159.471C43.539 156.055 42.8875 152.399 42.9842 148.724C43.0809 145.049 43.9238 141.432 45.4615 138.093C46.9993 134.754 49.1999 131.763 51.9295 129.3L71.9295 109.3L51.9295 89.3502C47.1695 84.2017 44.5885 77.4096 44.7281 70.3992C44.8678 63.3888 47.7172 56.705 52.6785 51.7501C57.6398 46.7952 64.3274 43.9545 71.338 43.824C78.3486 43.6935 85.1373 46.2834 90.2795 51.0502L110.28 71.0502L130.28 51.0502C135.445 46.3905 142.204 43.894 149.158 44.077C156.113 44.26 162.731 47.1085 167.644 52.0334C172.558 56.9584 175.39 63.5831 175.557 70.5379C175.724 77.4927 173.211 84.2455 168.54 89.4002L148.59 109.35L168.54 129.35C173.609 134.434 176.456 141.321 176.456 148.5C176.456 155.68 173.609 162.566 168.54 167.65Z"
              fill="#3E157D"
            />
          </g>
          <defs>
            <clipPath id="clip0_4271_421">
              <rect
                width="218.7"
                height="218.7"
                fill="white"
                transform="translate(0.879639)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 5,
      element: (
        <svg
          className="w-[220px] h-auto"
          viewBox="0 0 219 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4271_431)">
            <path d="M218.37 0H0.279785V218.09H218.37V0Z" fill="#471D86" />
            <path
              d="M182.71 139.28L124.76 112.08L182.64 84.9101L169.44 71.7101L130.6 90.1601L149.04 51.3201L135.85 38.1201L108.64 96.1201L81.4797 38.2001L68.2797 51.3901L86.7297 90.2301L47.8797 71.7901L34.6897 85.0001L92.6897 112.2L34.7597 139.36L47.9597 152.55L86.7997 134.11L68.3597 173L81.5497 186.2L108.75 128.2L135.92 186.08L149.12 172.88L130.67 134L169.52 152.45L182.71 139.28ZM108.71 119.28L101.56 112.13L108.71 104.98L115.86 112.13L108.71 119.28Z"
              fill="#B467FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_4271_431">
              <rect
                width="218.09"
                height="218.09"
                fill="white"
                transform="translate(0.279785)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 6,
      element: (
        <svg
          className="w-[220px] h-auto"
          viewBox="0 0 219 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4271_441)">
            <path d="M218.549 0H0.459473V218.09H218.549V0Z" fill="#654BFF" />
            <path
              d="M67.9695 21.7402L73.3095 92.2402L152.889 88.0002C152.889 88.0002 83.9895 97.5802 67.9695 21.7402Z"
              fill="#DA85EC"
            />
            <path
              d="M196.689 68.3096L126.179 73.6496L130.459 153.23C130.459 153.23 120.839 84.3296 196.689 68.3096Z"
              fill="#DA85EC"
            />
            <path
              d="M151.039 196.35L145.699 125.85L66.1194 130.12C66.1194 130.12 135.019 120.51 151.039 196.35Z"
              fill="#DA85EC"
            />
            <path
              d="M22.3296 149.78L92.8296 144.44L88.5596 64.8604C88.5596 64.8604 98.1696 133.76 22.3296 149.78Z"
              fill="#DA85EC"
            />
          </g>
          <defs>
            <clipPath id="clip0_4271_441">
              <rect
                width="218.09"
                height="218.09"
                fill="white"
                transform="translate(0.459473)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 7,
      element: (
        <svg
          className="w-[220px] h-auto"
          viewBox="0 0 219 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4271_501)">
            <path d="M218.36 0H0.27002V218.09H218.36V0Z" fill="#654BFF" />
            <path
              d="M66.56 109.04L17.86 72.5505L48.61 31.5205L83.68 57.8005V13.9805H134.96V57.8005L170.02 31.5205L200.77 72.5505L152.07 109.04L200.77 145.54L170.02 186.57L134.96 160.29V204.12H83.68V160.29L48.61 186.57L17.86 145.54L66.56 109.04Z"
              fill="#DA85EC"
            />
          </g>
          <defs>
            <clipPath id="clip0_4271_501">
              <rect
                width="218.09"
                height="218.09"
                fill="white"
                transform="translate(0.27002)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 8,
      element: (
        <svg
          className="w-[220px] h-auto"
          viewBox="0 0 219 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4271_465)">
            <path d="M218.819 0H0.729492V218.09H218.819V0Z" fill="#FE8B26" />
            <path
              d="M112.33 112.13H153.16V131.2C153.16 133.871 152.633 136.516 151.611 138.984C150.589 141.451 149.091 143.694 147.202 145.582C145.313 147.471 143.071 148.969 140.603 149.992C138.136 151.014 135.491 151.54 132.82 151.54C130.125 151.54 127.456 151.008 124.967 149.975C122.478 148.943 120.217 147.429 118.313 145.521C116.41 143.613 114.902 141.348 113.875 138.856C112.848 136.365 112.323 133.695 112.33 131V112.13Z"
              fill="#8D46F1"
            />
            <path
              d="M106.87 111.4V152.23H87.7995C85.1284 152.23 82.4835 151.704 80.0157 150.682C77.548 149.66 75.3057 148.162 73.417 146.273C71.5282 144.384 70.03 142.142 69.0078 139.674C67.9856 137.206 67.4595 134.562 67.4595 131.89C67.4595 129.195 67.9911 126.527 69.024 124.038C70.0568 121.548 71.5706 119.287 73.4786 117.384C75.3865 115.481 77.6512 113.973 80.143 112.946C82.6347 111.919 85.3045 111.394 87.9995 111.4H106.87Z"
              fill="#8D46F1"
            />
            <path
              d="M107.219 105.96H66.3894V86.9C66.3842 84.2247 66.9067 81.5746 67.9272 79.1016C68.9476 76.6285 70.4459 74.3811 72.3363 72.488C74.2266 70.5949 76.4718 69.0933 78.9433 68.0692C81.4149 67.0451 84.0641 66.5186 86.7394 66.52C89.4328 66.5213 92.0994 67.0535 94.5868 68.0864C97.0742 69.1192 99.3336 70.6322 101.236 72.539C103.138 74.4458 104.645 76.7089 105.672 79.1988C106.699 81.6887 107.225 84.3566 107.219 87.05V105.96Z"
              fill="#8D46F1"
            />
            <path
              d="M112.689 106.67V65.8399H131.749C134.424 65.8347 137.073 66.3569 139.546 67.3767C142.018 68.3965 144.265 69.8939 146.158 71.7832C148.051 73.6725 149.553 75.9165 150.577 78.3869C151.602 80.8573 152.129 83.5055 152.129 86.1799C152.129 91.6142 149.971 96.8259 146.128 100.669C142.285 104.511 137.074 106.67 131.639 106.67H112.689Z"
              fill="#8D46F1"
            />
          </g>
          <defs>
            <clipPath id="clip0_4271_465">
              <rect
                width="218.09"
                height="218.09"
                fill="white"
                transform="translate(0.729492)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className="wrapper w-full overflow-hidden">
      <div className="ssvgs flex w-fit gap-4">
        {SVGS.map(({ id, element }) => (
          <div key={id} className="w-full aspect-square">
            {element}
          </div>
        ))}
        <div className="w-full aspect-square">
          <svg
            className="w-[220px] h-auto"
            viewBox="0 0 220 219"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4271_385)">
              <path d="M219.38 0H0.679688V218.7H219.38V0Z" fill="#654BFF" />
              <path
                d="M107.9 28.6797L157.19 43.2197L142.65 92.1497L92.6597 77.2597L107.9 28.6797Z"
                fill="#DD86EC"
              />
              <path
                d="M78.1196 126.55L127.41 141.09L112.87 190.02L62.8696 175.13L78.1196 126.55Z"
                fill="#DD86EC"
              />
              <path
                d="M43.3696 63.0801L92.6596 77.6201L78.1196 126.55L28.1196 111.66L43.3696 63.0801Z"
                fill="#DD86EC"
              />
              <path
                d="M142.65 92.1504L191.94 106.69L177.4 155.63L127.41 140.73L142.65 92.1504Z"
                fill="#DD86EC"
              />
            </g>
            <defs>
              <clipPath id="clip0_4271_385">
                <rect
                  width="218.7"
                  height="218.7"
                  fill="white"
                  transform="translate(0.679688)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-full aspect-square">
          <svg
            className="w-[220px] h-auto"
            viewBox="0 0 219 219"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4271_401)">
              <path d="M218.78 0H0.0795898V218.7H218.78V0Z" fill="#CDEE05" />
              <path
                d="M157.58 109.35C162.293 106.644 166.326 102.898 169.372 98.3974C172.418 93.8968 174.397 88.7604 175.158 83.3793C175.919 77.9982 175.441 72.5145 173.762 67.3459C172.082 62.1773 169.245 57.4602 165.467 53.5539C161.689 49.6477 157.069 46.6553 151.959 44.8048C146.849 42.9543 141.384 42.2945 135.981 42.8757C130.577 43.4568 125.378 45.2636 120.779 48.1583C116.179 51.0531 112.301 54.9594 109.44 59.5798C106.577 54.9631 102.699 51.0604 98.1001 48.1688C93.5016 45.2771 88.3039 43.4727 82.9028 42.8928C77.5016 42.3129 72.0394 42.9729 66.9318 44.8226C61.8242 46.6722 57.2059 49.6627 53.4284 53.5665C49.6509 57.4702 46.8139 62.1843 45.1331 67.3499C43.4524 72.5156 42.9723 77.9966 43.7294 83.3757C44.4865 88.7549 46.4608 93.8904 49.5021 98.3915C52.5434 102.892 56.5714 106.64 61.2797 109.35C56.5733 112.06 52.5472 115.808 49.5076 120.309C46.4679 124.809 44.4949 129.944 43.7385 135.322C42.9822 140.7 43.4624 146.18 45.1428 151.344C46.8232 156.509 49.6594 161.222 53.4356 165.125C57.2118 169.028 61.8285 172.019 66.9346 173.869C72.0406 175.719 77.5014 176.38 82.9015 175.802C88.3016 175.224 93.4987 173.422 98.0974 170.533C102.696 167.644 106.575 163.744 109.44 159.13C112.303 163.748 116.182 167.651 120.781 170.543C125.381 173.436 130.58 175.24 135.982 175.82C141.384 176.399 146.848 175.738 151.956 173.887C157.064 172.036 161.683 169.043 165.46 165.138C169.237 161.232 172.073 156.516 173.752 151.348C175.431 146.181 175.909 140.698 175.149 135.318C174.389 129.939 172.411 124.803 169.367 120.303C166.322 115.803 162.291 112.057 157.58 109.35ZM109.44 121.51C106.317 116.482 101.999 112.304 96.8697 109.35C101.996 106.396 106.314 102.223 109.44 97.1998C112.553 102.226 116.865 106.401 121.99 109.35C116.862 112.299 112.549 116.478 109.44 121.51Z"
                fill="#00BAD6"
              />
            </g>
            <defs>
              <clipPath id="clip0_4271_401">
                <rect
                  width="218.7"
                  height="218.7"
                  fill="white"
                  transform="translate(0.0795898)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-full aspect-square">
          <svg
            className="w-[220px] h-auto"
            viewBox="0 0 220 219"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4271_411)">
              <path d="M219.179 0H0.479492V218.7H219.179V0Z" fill="#1DBC81" />
              <path
                d="M32.0594 131.12V173.74L167.249 167.78V143.95L84.7594 136.62L188.789 137.53V100.87L151.669 104.08L152.129 82.5397L121.889 80.2497L186.499 73.8397L188.789 44.9697H65.9794L65.5194 77.0397L32.0594 74.2897L30.8694 105.51L130.849 105.69L58.5394 111.22L58.1894 133.9L32.0594 131.12Z"
                fill="#CDEE05"
              />
            </g>
            <defs>
              <clipPath id="clip0_4271_411">
                <rect
                  width="218.7"
                  height="218.7"
                  fill="white"
                  transform="translate(0.479492)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-full aspect-square">
          <svg
            className="w-[220px] h-auto"
            viewBox="0 0 220 219"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4271_421)">
              <path d="M219.58 0H0.879639V218.7H219.58V0Z" fill="#FF173A" />
              <path
                d="M168.54 167.65C163.454 172.735 156.556 175.592 149.365 175.592C142.173 175.592 135.275 172.735 130.19 167.65L110.19 147.65L90.1895 167.65C87.7208 170.374 84.724 172.568 81.3813 174.098C78.0386 175.627 74.4197 176.462 70.7446 176.55C67.0694 176.638 63.4147 175.978 60.0026 174.61C56.5904 173.242 53.492 171.194 50.8956 168.592C48.2992 165.989 46.259 162.886 44.899 159.471C43.539 156.055 42.8875 152.399 42.9842 148.724C43.0809 145.049 43.9238 141.432 45.4615 138.093C46.9993 134.754 49.1999 131.763 51.9295 129.3L71.9295 109.3L51.9295 89.3502C47.1695 84.2017 44.5885 77.4096 44.7281 70.3992C44.8678 63.3888 47.7172 56.705 52.6785 51.7501C57.6398 46.7952 64.3274 43.9545 71.338 43.824C78.3486 43.6935 85.1373 46.2834 90.2795 51.0502L110.28 71.0502L130.28 51.0502C135.445 46.3905 142.204 43.894 149.158 44.077C156.113 44.26 162.731 47.1085 167.644 52.0334C172.558 56.9584 175.39 63.5831 175.557 70.5379C175.724 77.4927 173.211 84.2455 168.54 89.4002L148.59 109.35L168.54 129.35C173.609 134.434 176.456 141.321 176.456 148.5C176.456 155.68 173.609 162.566 168.54 167.65Z"
                fill="#3E157D"
              />
            </g>
            <defs>
              <clipPath id="clip0_4271_421">
                <rect
                  width="218.7"
                  height="218.7"
                  fill="white"
                  transform="translate(0.879639)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SVGGallery;
