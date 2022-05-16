import TruckerJokeView from "../../views/trucker-joke/TruckerJoke.view";
import "./TruckerJokes.layout.scss";
import { useColorScheme } from "../../../hooks/trucker-jokes.layout.hooks";
import { rgb } from "../../../utils/rgb.utils";

export type ColorScheme = RgbColor[];
export type RgbColor = [number, number, number];
export interface ColorMindApiResponse {
  result: ColorScheme;
}
export type RgbArray = string[];

const TruckerJokesLayout = () => {
  const scheme = useColorScheme();

  return (
    <>
      <div
        className="standard-background-layout"
        style={{
          backgroundColor: rgb(scheme[scheme.length - 1]),
        }}
      />
      <div className="trucker-jokes-layout">
        <h1
          className="trucker-jokes-layout--title"
          style={{
            color: rgb(scheme[scheme.length - 2]),
          }}
        >
          Kamyoncu Yazıları
        </h1>
        <h3
          className="trucker-jokes-layout--subtitle"
          style={{ color: rgb(scheme[scheme.length - 2]) }}
        >
          Ennuriye'nin tırcılık kariyerinden döktürmeler
        </h3>
        <div
          className="trucker-jokes-layout--view-container"
          style={{
            color: rgb(scheme[0]),
            textShadow: `0 0 5px ${rgb(scheme[1])}`,
          }}
        >
          <TruckerJokeView />
        </div>
      </div>
    </>
  );
};

export default TruckerJokesLayout;
