import { useState, type FC } from "react";
import { useCanvas } from "_contexts/canvas/Canvas.context";
import { useFormik } from "formik";
import { CANVAS_CONTROLS, COLORS, PERLIN_PRESETS } from "_constants";
import Label from "_primitives/form/Label.primitive";
import Legend from "_primitives/form/Legend.primitive";
import Section from "_primitives/form/Section.primitive";
import SectionHelp from "_primitives/form/SectionHelp.primitive";
import Input from "_primitives/form/Input.primitive";
import CanvasControlFormButtonView from "./CanvasControlFormButton.view";
import PresetItemView from "./PresetItem.view";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";
import type { CanvasControlViewProps } from "./CanvasControl.view.types";
import { downloadImage } from "./CanvasControl.view.logic";
import { useDeviceQuery } from "_hooks/device/device.hook";
import { useTheme } from "_hooks/theme/theme.hook";
import HslColorBarView from "./HslColorBar.view";

const CanvasControlView: FC<CanvasControlViewProps> = ({
  minimize,
  helpEnabled,
  firstVisit,
}) => {
  const [showStats, setShowStats] = useState(false);
  const { isSm } = useDeviceQuery();
  const { getActive } = useTheme();
  const {
    config,
    lastDrawStats: {
      finished,
      duration,
      jpgDataUrl,
      pngDataUrl,
      handler,
      config: lastDrawConfig,
    },
    draw,
    saveToLocalStorage,
    localStorageValues,
    produceConfig,
    adjustConfig,
    generateRandomConfig,
    removeFromLocalStorage,
  } = useCanvas();
  const { handleSubmit, values, submitForm, setValues, handleChange } =
    useFormik({
      initialValues: localStorageValues || config,
      onSubmit: (values) => {
        draw(values);
      },
    });

  const onSaveClick = () => {
    saveToLocalStorage({ ...values, name: "Saved" });
  };

  const toggleShowStats = () => {
    setShowStats((showSpecs) => !showSpecs);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
      <div
        className={[
          "scrollbar-thin px-5 overflow-x-hidden grow py-5",
          COLORS.scrollbar,
        ].join(" ")}
      >
        <SectionHelp enabled={helpEnabled}>
          <Paragraph small>
            Welcome to the canvas page. You can control the specifications of
            the background canvas draw from this control window.
          </Paragraph>
          <Paragraph small>
            You can either choose a preset or enter custom values to draw a
            custom curve for your background.
          </Paragraph>
          <Paragraph small>
            Once you find a result that you are satisfied with, you can save it
            to local storage for your subsequent visits.
          </Paragraph>
          {firstVisit && (
            <Paragraph small>
              You are seeing this section because this is your first visit to
              this page. You can toggle the help dialogs by clicking the{" "}
              <span
                className={[
                  "bg-neutral-800 text-white px-2",
                  "text-sm w-min h-min rounded-md inline-block",
                ].join(" ")}
              >
                ?
              </span>{" "}
              button on top right.
            </Paragraph>
          )}
        </SectionHelp>
        <Legend title="Status">
          <div
            className={["px-3 rounded-md mb-5", COLORS.canvasControlInput].join(
              " "
            )}
          >
            <div className={COLORS.paragraph}>
              {finished ? (
                <div>
                  <div className={["mb-5 pt-3", COLORS.paragraph].join(" ")}>
                    <div className="mb-3">
                      Drawing complete in {Math.round(duration / 100) / 10}{" "}
                      seconds
                    </div>
                  </div>
                  <CanvasControlFormButtonView
                    color="secondary"
                    type="button"
                    onClick={toggleShowStats}
                    className="mb-3"
                  >
                    {showStats ? "Hide" : "Show"} stats
                  </CanvasControlFormButtonView>
                  {showStats && (
                    <div className="select-text mb-3">
                      {Object.entries({
                        handler,
                        duration,
                        ...lastDrawConfig,
                      }).map(([key, value]) => (
                        <pre
                          key={key}
                          className={[
                            "text-sm font-thin",
                            COLORS.secondaryText,
                          ].join(" ")}
                        >
                          {key}: {value}
                        </pre>
                      ))}
                    </div>
                  )}
                  {jpgDataUrl && (
                    <CanvasControlFormButtonView
                      color="secondary"
                      type="button"
                      onClick={() =>
                        downloadImage({
                          dataUrl: jpgDataUrl,
                          hash: config.seed.toString(),
                          extension: "jpg",
                        })
                      }
                      className="mb-3"
                    >
                      Download JPG
                    </CanvasControlFormButtonView>
                  )}
                  {pngDataUrl && (
                    <CanvasControlFormButtonView
                      color="secondary"
                      type="button"
                      onClick={() =>
                        downloadImage({
                          dataUrl: pngDataUrl,
                          hash: config.seed.toString(),
                          extension: "png",
                        })
                      }
                      className="mb-3"
                    >
                      Download transparent PNG
                    </CanvasControlFormButtonView>
                  )}
                </div>
              ) : (
                <div className={[COLORS.paragraph, "py-3"].join(" ")}>
                  Drawing...
                </div>
              )}
            </div>
          </div>
          <SectionHelp enabled={helpEnabled}>
            <Paragraph small>
              Status section shows details about the current and last finished
              render.
            </Paragraph>
            <Paragraph small>
              Once the image is drawn, you can download it as a JPG or PNG file.
            </Paragraph>
            <Paragraph small>
              Note that the size of the image will be the size of the viewport.
              If you need a fullscreen image, consider reloading the page using
              the fullscreen mode of your browser and then start creating your
              renders.
            </Paragraph>
            <Paragraph small>
              This limitation is expected to be removed later with the
              introduction of pre-renders.
            </Paragraph>
          </SectionHelp>
        </Legend>
        <div className="mb-5">
          <Legend title="Presets">
            <ol>
              {localStorageValues && (
                <PresetItemView
                  setValues={setValues}
                  values={values}
                  submitForm={submitForm}
                  name="Saved Preset"
                  configCallback={() => localStorageValues}
                  minimize={minimize}
                  ControlComponent={
                    <div onClick={removeFromLocalStorage}>Remove</div>
                  }
                />
              )}
              {Object.entries(PERLIN_PRESETS).map(([key, preset]) => (
                <li key={key}>
                  <PresetItemView
                    name={preset.name}
                    setValues={setValues}
                    values={values}
                    submitForm={submitForm}
                    configCallback={() =>
                      adjustConfig(produceConfig(preset), isSm, getActive())
                    }
                    minimize={minimize}
                  />
                </li>
              ))}
              <li key="random">
                <PresetItemView
                  setValues={setValues}
                  values={values}
                  submitForm={submitForm}
                  name="Random"
                  configCallback={generateRandomConfig}
                  minimize={minimize}
                />
              </li>
            </ol>
            <SectionHelp enabled={helpEnabled}>
              <Paragraph small>
                Presets section provides you with configurations that
                demonstrate the variety of renders that can be created with this
                tool.
              </Paragraph>
              <Paragraph small>
                Despite the configurations being fixed, the seed value that
                determines the shape of the curve is random. Which means that
                every time you choose a preset, a different curve will be drawn.
              </Paragraph>
              <Paragraph small>
                Double click the preset to minimize controls during the draw.
              </Paragraph>
              <Paragraph small>
                You can also select a preset only to customize its values from
                the controls below.
              </Paragraph>
            </SectionHelp>
          </Legend>
        </div>
        {CANVAS_CONTROLS.map(({ title, items }) => (
          <Legend title={title} key={title}>
            {title === "HSL" && <HslColorBarView {...values} />}
            {items.map(({ name, label, unit, type, min, max, help }) => (
              <Section key={name} helpEnabled={helpEnabled} help={help}>
                <Label htmlFor={name}>{label}</Label>
                <Input
                  name={name}
                  type={type}
                  min={min}
                  max={max}
                  handleChange={handleChange}
                  values={values}
                  unit={unit}
                />
              </Section>
            ))}
          </Legend>
        ))}
      </div>
      <div className="flex gap-2 px-5 py-3 justify-end">
        <CanvasControlFormButtonView
          color="secondary"
          type="button"
          onClick={onSaveClick}
        >
          Save
        </CanvasControlFormButtonView>
        <CanvasControlFormButtonView color="secondary" type="submit">
          Draw
        </CanvasControlFormButtonView>
        <CanvasControlFormButtonView
          color="primary"
          type="button"
          onClick={() => {
            minimize();
            submitForm();
          }}
        >
          Draw & ▼
        </CanvasControlFormButtonView>
      </div>
    </form>
  );
};

export default CanvasControlView;
