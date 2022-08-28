const ResumePrintH2 = ({ children, className = "" }) => (
  <h1 className={["font-bold text-md mb-1", className].join(" ")}>
    {children}
  </h1>
);

export default ResumePrintH2;
