import { useLayoutEffect, useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

type ScrollPosition = {
  x: number;
  y: number;
};

const STORAGE_KEY = "aakar-scroll-positions";

const getSavedPositions = (): Record<string, ScrollPosition> => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
};

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const activeKey = useRef(location.key);

  // Disable browser's automatic restoration.
  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  // Save the current page's scroll position.
  useEffect(() => {
    const savePosition = () => {
      const positions = getSavedPositions();

      positions[activeKey.current] = {
        x: window.scrollX,
        y: window.scrollY,
      };

      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
      } catch {
        // Ignore storage errors.
      }
    };

    window.addEventListener("scroll", savePosition, {
      passive: true,
    });

    return () => {
      savePosition();
      window.removeEventListener("scroll", savePosition);
    };
  }, []);

  // Restore or reset scrolling when the route changes.
  useLayoutEffect(() => {
    activeKey.current = location.key;

    let frameId = 0;

    const restoreScroll = () => {
      if (location.hash) {
        const id = decodeURIComponent(location.hash.slice(1));

        const target = document.getElementById(id);

        if (target) {
          target.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
          return;
        }
      }

      if (navigationType === "POP") {
        const positions = getSavedPositions();
        const savedPosition = positions[location.key];

        if (savedPosition) {
          window.scrollTo({
            left: savedPosition.x,
            top: savedPosition.y,
            behavior: "instant",
          });
          return;
        }
      }

      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "instant",
      });
    };

    frameId = window.requestAnimationFrame(restoreScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [
    location.pathname,
    location.search,
    location.hash,
    location.key,
    navigationType,
  ]);

  return null;
}
