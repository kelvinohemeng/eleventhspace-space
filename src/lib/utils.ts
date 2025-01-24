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
  return `mx-auto px-[20px] md:px-[40px] lg:px-[68px] max-w-[1920px] h-full ${
    notNav && "py-[80px] md:py-[120px]"
  }`;
}

//it is not complete ---
type SplitText = {
  elementTarget: string;
  wordClass?: string;
  charClass?: string;
};

export function splitText({
  elementTarget,
  wordClass = "",
  charClass = "",
}: SplitText) {
  // Select the target element
  const target: HTMLElement | null = document.querySelector(
    `.${elementTarget}`
  );
  if (!target) {
    console.error(`Element with class "${elementTarget}" not found.`);
    return;
  }

  // Get the text content and split into words
  const words = target.textContent?.split(" ") || [];

  // Clear existing content
  target.textContent = "";

  // Process each word
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span");
    wordSpan.classList.add("inline-block");
    if (wordClass) wordSpan.classList.add(wordClass);

    // Process each character in the word
    word.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.classList.add("inline-block");
      if (charClass) charSpan.classList.add(charClass);

      wordSpan.appendChild(charSpan);
    });

    // Append the word span to the target
    target.appendChild(wordSpan);

    // Add a spacer after each word except the last
    if (wordIndex < words.length - 1) {
      const spacerSpan = document.createElement("span");
      spacerSpan.textContent = "\u00A0"; // Non-breaking space
      spacerSpan.classList.add("spacer");
      target.appendChild(spacerSpan);
    }
  });
}
