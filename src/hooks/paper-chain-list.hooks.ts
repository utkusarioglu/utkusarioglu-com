import { useState, useEffect } from "react";
import { PaperChain } from "../components/views/paper-chain-list/paper-chain-list.types";

/**
 * #1 This shall be computed by a `current month` function
 */
export function usePaperChainList() {
  const [paperChain, setPaperChain] = useState<PaperChain>({
    timestamp: 0,
    list: [],
  });

  useEffect(() => {
    const filePath = "/paper-chain-data";
    const fileName = "2020-01"; // #1
    const ext = "json";
    fetch(`${filePath}/${fileName}.${ext}`)
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
