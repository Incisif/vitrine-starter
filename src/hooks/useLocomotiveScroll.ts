'use client';

import { useEffect } from 'react';
import type LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocoScroll = (
  start: boolean,
  scrollRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (!start || typeof window === 'undefined') return;

    let scrollInstance: LocomotiveScroll | null = null;

    const timeout = setTimeout(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      if (!scrollRef.current) {
        console.warn('Scroll container ref is null');
        return;
      }

      scrollInstance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      console.log('Locomotive scroll initialized');
    }, 100); // petit délai pour que le DOM se stabilise

    return () => {
      if (scrollInstance) scrollInstance.destroy();
      clearTimeout(timeout);
    };
  }, [start, scrollRef]);
};
