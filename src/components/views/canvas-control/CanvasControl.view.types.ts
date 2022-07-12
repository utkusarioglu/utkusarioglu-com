export interface CanvasControlViewProps {
  minimize: () => void;
  helpEnabled: boolean;
  firstVisit: boolean;
}

export type DownloadImage = (args: {
  dataUrl: string;
  hash: string;
  extension: string;
}) => void;
