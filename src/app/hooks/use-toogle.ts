"use client"

import { useCallback, useEffect, useState } from "react";

type UseToggleReturn = [boolean, () => void];

export const useToggle = (initialState: boolean = false): UseToggleReturn => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
