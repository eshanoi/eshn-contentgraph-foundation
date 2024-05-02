import { useCallback, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export function useDebounce<T extends Function>(func: T, delay = 500) {
  const timer = useRef<Timer | null>(null);

  const debouncedFunction = useCallback(
    (...args: any[]) => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [delay, func],
  );

  return debouncedFunction;
}
