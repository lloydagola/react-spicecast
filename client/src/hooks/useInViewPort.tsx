import { useEffect, useRef, useState } from 'react';

export default function useInViewPort(options?: IntersectionObserverInit) {
  const [inViewport, setInViewport] = useState(false);
  
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInViewport(entry.isIntersecting);
    }, options);
    const currentRef = targetRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);
  return {inViewport, targetRef};
}
;
