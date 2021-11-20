import { useState, useRef, useEffect } from "react";

export const useIntersect = ({
  root = null,
  rootMargin = "0px",
  threshold = 0,
}) => {
  const [node, setNode] = useState(null);
  const [entry, setEntry] = useState({});

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), {
      root,
      rootMargin,
      threshold,
    });

    const { current: currentObserver } = observer;

    if (node) {
      currentObserver.observe(node.current);
    }

    return () => {
      currentObserver.disconnect();
    };
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};
