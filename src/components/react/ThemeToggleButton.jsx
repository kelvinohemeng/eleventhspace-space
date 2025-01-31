import { useEffect, useState } from "react";
import { useNavClicked } from "../../lib/zustand/store";

export const ThemeToggleButton = () => {
  // const [theme, setTheme] = useState(false);
  const { isClickedTheme, setIsClickedTheme } = useNavClicked();

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      localStorage.setItem("theme", "dark");
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        // setTheme(true);
        setIsClickedTheme(true);
        document.body.classList.add("dark");
      } else {
        // setTheme(false);
        setIsClickedTheme(false);
        document.body.classList.remove("dark");
      }
    });
  }, []);

  useEffect(() => {
    if (isClickedTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    const checkLocalStorage = localStorage.getItem("theme");
    console.log(checkLocalStorage);
  }, [isClickedTheme]);

  return (
    <>
      <button onClick={() => setIsClickedTheme(!isClickedTheme)}>
        {/* {theme ? <div>light</div> : <div>Dark</div>} */}

        <div
          className={`flex w-[40px] p-[3px] border-[1px] rounded-full transition-all duration-200 ${
            isClickedTheme
              ? " bg-Black-e-black-500 border-white"
              : " border-black bg-white"
          }`}
        >
          <span
            className={`w-[16px] aspect-square rounded-full transition-all duration-200 ${
              isClickedTheme
                ? "bg-white"
                : "bg-Black-e-black-500 translate-x-[17px]"
            }`}
          ></span>
        </div>
      </button>
    </>
  );
};
