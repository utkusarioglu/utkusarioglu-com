import { useState, useEffect } from "react";
import { PaperChain } from "./paper-chain-list.types";

export function usePaperChainList() {
  const [paperChain, setPaperChain] = useState<PaperChain>({
    timestamp: 0,
    list: [],
  });

  useEffect(() => {
    fetch("/paper-chain-data/2020-01.json")
      .then((response) => response.json())
      .then((paperChain) => {
        setPaperChain({
          timestamp: Date.now(),
          ...paperChain,
        });
      });
  }, []);
  return paperChain;
}
