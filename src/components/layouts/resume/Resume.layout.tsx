import { type FC, useEffect, useState } from "react";
import ResumePrintLayout from "./ResumePrint.layout";
import ResumeScreenLayout from "./ResumeScreen.layout";
import {
  type SpecialtyId,
  type Resume,
  type Specialties,
} from "_types/resume.types";
import { useRouter } from "next/router";

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
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<SpecialtyId>(
    querySpecialtyId || "all"
  );
  const [includePhoto, setIncludePhoto] = useState(queryIncludePhoto);

  useEffect(() => {
    if (querySpecialtyId) {
      console.log({ activeSpecialtyId });
      setActiveSpecialtyId(querySpecialtyId);
    }
    setIncludePhoto(queryIncludePhoto);
  }, [querySpecialtyId, queryIncludePhoto]);

  return { activeSpecialtyId, setActiveSpecialtyId, includePhoto };
}

const ResumeLayout: FC<ResumeLayoutProps> = ({ resume }) => {
  const { activeSpecialtyId, setActiveSpecialtyId, includePhoto } =
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
      />
    </>
  );
};

export default ResumeLayout;
