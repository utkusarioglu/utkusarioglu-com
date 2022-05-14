import { useState, useEffect } from "react";
import {
  ColorScheme,
  ColorMindApiResponse,
} from "../components/layouts/trucker-jokes/TruckerJokes.layout";

/**
 * A hook for retrieving a colorscheme from colormind.io
 */
export function useColorScheme() {
  const [scheme, setScheme] = useState<ColorScheme>(
    Array(5)
      .fill(null)
      .map((_) => [30, 30, 30])
  );

  useEffect(() => {
    fetch("https://colormind.io/api/", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=UTF-8",
        Accept: "*/*",
      },
      body: '{"model":"default"}',
    })
      .then<ColorMindApiResponse>((body) => body.json())
      .then(({ result }) => {
        setScheme(result);
      });
  }, []);

  return scheme;
}
