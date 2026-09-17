"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type IntroContextValue = {
  ready: boolean;
  finishIntro: () => void;
};

const IntroContext = createContext<IntroContextValue | null>(null);

export function IntroProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  const finishIntro = useCallback(() => {
    setReady(true);
  }, []);

  const value = useMemo(
    () => ({ ready, finishIntro }),
    [ready, finishIntro]
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
}

export function useIntro() {
  const ctx = useContext(IntroContext);
  if (!ctx) {
    return { ready: true, finishIntro: () => {} };
  }
  return ctx;
}
