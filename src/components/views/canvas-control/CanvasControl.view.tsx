import { type FC } from "react";
import { usePerlin } from "_hooks/perlin/perlin.hook";
import { useFormik } from "formik";
import { CANVAS_CONTROLS, COLORS, PERLIN_PRESETS } from "_constants";
import Label from "_primitives/form/Label.primitive";
import Legend from "_primitives/form/Legend.primitive";
import Section from "_primitives/form/Section.primitive";
import SectionHelp from "_primitives/form/SectionHelp.primitive";
import Input from "_primitives/form/Input.primitive";
import CanvasControlFormButtonView from "./CanvasControlFormButton.view";
import PresetItemView from "./PresetItem.view";

interface CanvasControlViewProps {
  minimize: () => void;
  helpEnabled: boolean;
}

const CanvasControlView: FC<CanvasControlViewProps> = ({
  minimize,
  helpEnabled,
}) => {
  const {
    duration,
    jpgDataUrl,
    pngDataUrl,
    updateConfig,
    saveToLocalStorage,
    loadFromLocalStorage,
    config,
    produceConfig,
    generateRandomConfig,
    removeFromLocalStorage,
  } = usePerlin();
  const localStorageValues = loadFromLocalStorage();
  const formik = useFormik({
    initialValues: localStorageValues || config,
    onSubmit: (values) => {
      updateConfig(values);
    },
  });

  const onSaveClick = () => {
    saveToLocalStorage({ ...formik.values, name: "Saved" });
  };

  const downloadJpgImage = () => {
    const link = document.createElement("a");
    link.setAttribute("download", `utkusarioglu-${config.seed}.jpg`);
    link.setAttribute(
      "href",
      jpgDataUrl.replace("image/jpg", "image/octet-stream")
    );
    link.click();
  };

  const downloadPngImage = () => {
    const link = document.createElement("a");
    link.setAttribute("download", `utkusarioglu-${config.seed}.png`);
    link.setAttribute(
      "href",
      pngDataUrl.replace("image/png", "image/octet-stream")
    );
    link.click();
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col overflow-hidden"
    >
      <div
        className={[
          "scrollbar-thin px-5 overflow-x-hidden grow py-5",
          COLORS.scrollbar,
        ].join(" ")}
      >
        <SectionHelp enabled={helpEnabled}>
          You can control the parameters of the canvas and save them to local
          storage for your following visits.
          <br />
          Once the image is drawn, you can download it as JPG or PNG.
        </SectionHelp>
        <div className={`px-3 rounded-md mb-5 ${COLORS.canvasControlInput}`}>
          <div className={`${COLORS.paragraph}`}>
            {!!duration ? (
              <div>
                <div className={[COLORS.paragraph, "mb-5 pt-3"].join(" ")}>
                  Drawing complete in {Math.floor(duration / 100) / 10}s.
                </div>
                <CanvasControlFormButtonView
                  color="secondary"
                  type="button"
                  onClick={downloadJpgImage}
                  className="mb-3"
                >
                  Download JPG
                </CanvasControlFormButtonView>
                <CanvasControlFormButtonView
                  color="secondary"
                  type="button"
                  onClick={downloadPngImage}
                  className="mb-3"
                >
                  Download PNG (with transparent bg)
                </CanvasControlFormButtonView>
              </div>
            ) : (
              <div className={[COLORS.paragraph, "py-3"].join(" ")}>
                Drawing...
              </div>
            )}
          </div>
        </div>
        <div className="mb-5">
          <Legend title="Presets">
            <SectionHelp enabled={helpEnabled}>
              Select a preset to apply to the controls.
              <br />
              Double click starts drawing the preset immediately.
              <br />
              Triple click minimizes the controls during drawing.
            </SectionHelp>
            <ol>
              {localStorageValues && (
                <PresetItemView
                  formik={formik}
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
                    formik={formik}
                    configCallback={() => produceConfig(preset)}
                    minimize={minimize}
                  />
                </li>
              ))}
              <li key="random">
                <PresetItemView
                  formik={formik}
                  name="Random"
                  configCallback={() => generateRandomConfig()}
                  minimize={minimize}
                />
              </li>
            </ol>
          </Legend>
        </div>
        {CANVAS_CONTROLS.map(({ title, items }) => (
          <Legend title={title} key={title}>
            {items.map(({ name, label, unit, type, min, max, help }) => (
              <Section key={name} helpEnabled={helpEnabled} help={help}>
                <Label htmlFor={name}>{label}</Label>
                <Input
                  name={name}
                  type={type}
                  min={min}
                  max={max}
                  formik={formik}
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
            formik.submitForm();
          }}
        >
          Draw & ▼
        </CanvasControlFormButtonView>
      </div>
    </form>
  );
};

export default CanvasControlView;
