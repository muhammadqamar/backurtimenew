import { useSyncExternalStore } from "react";

const BREAKPOINTS = {
  xsm: 440,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export function useBreakpoint(bp: keyof typeof BREAKPOINTS) {
  const minWidth = BREAKPOINTS[bp];

  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
    const listener = () => callback();
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  };

  const getSnapshot = () => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
    return mediaQuery.matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
