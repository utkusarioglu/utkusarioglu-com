import { useEffect } from "react";

export function useTiinySite() {
  useEffect(() => {
    const removeAd = () => {
      const adContainer =
        document.querySelector("body > div > a").parentElement;
      adContainer.parentElement.removeChild(adContainer);
    };

    try {
      const domain = window.location.host.split(".")[1];
      if (domain === "tiiny") {
        for (let i = 0; i < 5; i++) {
          setTimeout(removeAd, 1000 * i);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);
}
