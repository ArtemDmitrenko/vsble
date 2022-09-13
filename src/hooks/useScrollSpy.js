import { useLayoutEffect, useState } from "react";

// helpers
const clamp = (value) => Math.max(0, value);
const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

// hook
const useScrollSpy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const viewportHeight = document.documentElement.clientHeight;
    const listener = () => {
      const scroll = window.pageYOffset;
      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => {
          return isBetween(scroll + viewportHeight / 2, top, bottom);
        });
      if (!position && activeId !== "") return;
      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [activeId, ids, offset]);

  return activeId;
};

export default useScrollSpy;
