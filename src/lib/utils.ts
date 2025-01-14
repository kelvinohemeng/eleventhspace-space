import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function consoleLog() {
  console.log("Hello World");
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function containerClass(notNav: boolean): string {
  return `mx-auto px-[20px] md:px-[40px] lg:px-[68px] max-w-[1920px] ${notNav && "min-h-screen py-[120px] h-full"}`;
}

//it is not complete ---

// export function splitText({ elementTarget, wordClass, charCLass }: any) {
//   const target = document.querySelector(`.${elementTarget}`); // Target element for the animation

//   // Function to animate text (same animation as before)
//   const splitText = target.split(" "); // Split the current word into individual characters

//   // Clear existing content
//   target.textContent = "";

//   // Add the new word as spans
//   splitText.forEach((word, index) => {
//     const span = document.createElement("span");
//     ``;
//     //   span.textContent = word;
//     span.classList.add(
//       { wordClass },
//       "inline-block"
//       // "bg-clip-text",
//       // "bg-gradient-to-r",
//       // "from-ara-yellow",
//       // "to-ara-yellow-deep"
//     );
//     target.appendChild(span);

//     const char = word.split("");
//     char.forEach((char, index) => {
//       const charSpan = document.createElement("span");
//       charSpan.textContent = char;
//       charSpan.classList.add(
//         { charCLass },
//         "inline-block",
//         "bg-clip-text",
//         "bg-gradient-to-r",
//         "from-ara-yellow",
//         "to-ara-yellow-deep"
//       );
//       span.appendChild(charSpan);
//     });

//     if (index < splitText.length - 1) {
//       const spacerSpan = document.createElement("span");
//       spacerSpan.textContent = "\u00A0"; // Non-breaking space
//       spacerSpan.classList.add("spacer");
//       span.appendChild(spacerSpan);
//     }
//   });
// }
