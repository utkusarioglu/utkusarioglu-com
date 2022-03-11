import { useState, useEffect } from "react";
import TruckerJokeView from "../../views/trucker-joke/TruckerJoke.view";
import "./TruckerJokes.layout.scss";

export type ColorScheme = RgbColor[];
export type RgbColor = [number, number, number];

const TruckerJokesLayout = () => {
  const [scheme, setScheme] = useState<ColorScheme>([
    [30, 30, 30],
    [30, 30, 30],
    [30, 30, 30],
  ]);

  useEffect(() => {
    fetch("http://colormind.io/api/", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=UTF-8",
        Accept: "*/*",
      },
      body: '{"model":"default"}',
    })
      .then((body) => body.json())
      .then(({ result }) => {
        console.log(result);
        setScheme(result);
      });
  }, []);

  return (
    <>
      <div
        className="standard-background-layout"
        style={{
          backgroundColor: `rgb(${scheme[scheme.length - 1].join(", ")})`,
        }}
      />
      <div
        className="trucker-jokes-layout"
        style={{ color: `rgb(${scheme[0].join(", ")})` }}
      >
        <h1
          className="trucker-jokes-layout-title"
          style={{ color: `rgb(${scheme[scheme.length - 2].join(", ")})` }}
        >
          Kamyoncu Yazıları
        </h1>
        <h3
          className="trucker-jokes-layout-subtitle"
          style={{ color: `rgb(${scheme[scheme.length - 2].join(", ")})` }}
        >
          Ennuriye'nin tırcılık kariyerinden nadide döktürmeler
        </h3>
        <TruckerJokeView />
      </div>
    </>
  );
};

export default TruckerJokesLayout;
