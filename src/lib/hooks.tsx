import { MutableRefObject, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export function usePrevious<T>(value: T) {
  const ref = useRef<T | null>(null);
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

export function useMeasure<T extends Element>(): [
  { ref: MutableRefObject<T | null> },
  { left: number; top: number; width: number; height: number }
] {
  const ref = useRef<T | null>(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(() => new ResizeObserver(([entry]) => setBounds(entry.contentRect)));
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [{ ref }, bounds];
}
