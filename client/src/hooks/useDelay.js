import React, { useEffect, useState } from "react";

export const useDelay = (setDelay) => {
  const [isComplete, setIsComplete] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;
    setTimeout(() => setIsComplete(true), setDelay);
  }, [setDelay, start]);

  return [isComplete, setStart];
};
