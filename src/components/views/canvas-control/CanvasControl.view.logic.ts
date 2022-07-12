import type { DownloadImage } from "./CanvasControl.view.types";

export const downloadImage: DownloadImage = ({ dataUrl, hash, extension }) => {
  const link = document.createElement("a");
  link.setAttribute("download", `utkusarioglu-${hash}.${extension}`);
  link.setAttribute(
    "href",
    dataUrl.replace(`image/${extension}`, "image/octet-stream")
  );
  link.click();
};
