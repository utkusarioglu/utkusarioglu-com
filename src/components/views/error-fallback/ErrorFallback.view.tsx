import { type FC } from "react";
import { type FallbackProps } from "react-error-boundary";

const ErrorFallbackView: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <div className="grid justify-items-center content-center h-full w-full">
    <p className="text-white p-5">{error.toString()}</p>
    <button
      className="text-white bg-red-900 rounded-md p-5"
      onClick={resetErrorBoundary}
    >
      Reset
    </button>
  </div>
);

export default ErrorFallbackView;
