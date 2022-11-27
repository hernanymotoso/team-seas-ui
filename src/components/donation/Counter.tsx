import { animate, DragControls } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface CounterProps {
  from: number;
  to: number;
}

export const Counter = ({ from, to }: CounterProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          // eslint-disable-next-line radix
          node.textContent = parseInt(value.toFixed(0)).toLocaleString();
        },
      });

      return () => controls.stop();
    }
  }, [from, to]);

  return <div ref={nodeRef} />;
};
