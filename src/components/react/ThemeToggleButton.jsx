import { useEffect, useState } from "react";
import { useNavClicked } from "../../lib/zustand/store";

export const ThemeToggleButton = () => {
  // const [theme, setTheme] = useState(false);
  const { isClickedTheme, setIsClickedTheme } = useNavClicked();

  useEffect(() => {
    if (isClickedTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isClickedTheme]);

  return (
    <>
      <button onClick={() => setIsClickedTheme(!isClickedTheme)}>
        {/* {theme ? <div>light</div> : <div>Dark</div>} */}

        <div
          className={`flex w-[40px] p-[3px] border-[1px] rounded-full transition-all duration-200 ${
            !isClickedTheme
              ? " bg-Black-e-black-500 border-white"
              : " border-black bg-white"
          }`}
        >
          <span
            className={`w-[16px] aspect-square rounded-full transition-all duration-200 ${
              !isClickedTheme
                ? "bg-white"
                : "bg-Black-e-black-500 translate-x-[17px]"
            }`}
          ></span>
        </div>
      </button>
    </>
  );
};
