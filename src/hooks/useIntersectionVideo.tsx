import { RefObject, useEffect, useRef, useState } from 'react';

const options = {
  root: document.querySelector('main'),
  rootMargin: '0px',
  threshold: 0.8,
};

export default function useIntersectionVideo(videoRef: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, options);
  }, []);

  useEffect(() => {
    if (observerRef.current) observerRef.current.observe(videoRef.current!);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [videoRef]);

  return isOnScreen;
}
