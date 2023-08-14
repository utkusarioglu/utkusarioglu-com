import { type FC, useEffect, useState } from "react";
import ResumePrintLayout from "./ResumePrint.layout";
import ResumeScreenLayout from "./ResumeScreen.layout";
import {
  type SpecialtyId,
  type Resume,
  type Specialties,
  type PaperFormat,
} from "_types/resume.types";
import { useRouter } from "next/router";
import { createResumeCode } from "_utils/resume.utils";

export interface ResumeLayoutProps {
  resume: Resume;
}

export interface SpecialtyReaderProps {
  activeSpecialtyId: SpecialtyId;
  specialties: Specialties;
}

function useResumeCustomization() {
  const router = useRouter();
  const querySpecialtyId = router.query["specialty-id"] as SpecialtyId;
  const queryIncludePhoto = router.query["include-photo"] === "true";
  const queryPaperFormat = router.query["paper-format"] as PaperFormat;
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<SpecialtyId>(
    querySpecialtyId || "al"
  );
  const [includePhoto, setIncludePhoto] = useState(queryIncludePhoto);
  const [paperFormat, setPaperFormat] = useState(
    queryPaperFormat || "unspecified"
  );
  const resumeCode = createResumeCode(
    activeSpecialtyId,
    includePhoto,
    paperFormat
  );

  useEffect(() => {
    if (querySpecialtyId) {
      setActiveSpecialtyId(querySpecialtyId);
    }
    if (queryPaperFormat) {
      setPaperFormat(queryPaperFormat);
    }
    setIncludePhoto(queryIncludePhoto);
  }, [querySpecialtyId, queryIncludePhoto, queryPaperFormat]);

  return {
    activeSpecialtyId,
    setActiveSpecialtyId,
    includePhoto,
    setIncludePhoto,
    paperFormat,
    resumeCode,
  };
}

const ResumeLayout: FC<ResumeLayoutProps> = ({ resume }) => {
  const { activeSpecialtyId, setActiveSpecialtyId, includePhoto, resumeCode } =
    useResumeCustomization();

  return (
    <>
      <ResumeScreenLayout
        resume={resume}
        activeSpecialtyId={activeSpecialtyId}
        setActiveSpecialtyId={setActiveSpecialtyId}
      />
      <ResumePrintLayout
        resume={resume}
        activeSpecialtyId={activeSpecialtyId}
        includePhoto={includePhoto}
        resumeCode={resumeCode}
      />
    </>
  );
};

export default ResumeLayout;
