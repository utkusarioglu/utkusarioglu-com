import { useEffect, useState, Dispatch, SetStateAction } from "react";
import type {
  SpecialtyId,
  PaperFormat,
  Specialties,
  Resume,
  PaperFormatShortCode,
} from "_types/resume.types";
import { useRouter } from "next/router";
import {
  createPaperFormatShortCode,
  createResumeCode,
} from "_utils/resume.utils";

export type IncludePhoto = boolean;

export interface ResumeIncludePhotoStateProps {
  setIncludePhoto: Dispatch<SetStateAction<IncludePhoto>>;
  includePhoto: IncludePhoto;
}

export interface ResumeSpecialtyIdStateProps {
  activeSpecialtyId: SpecialtyId;
  setActiveSpecialtyId: Dispatch<SetStateAction<SpecialtyId>>;
}

export interface ResumePaperFormatShortCodeProps {
  activePaperFormatShortCode: PaperFormatShortCode;
}

export type ResumeCode = string[];

type UseResumeCustomizationReturn = ResumeSpecialtyIdStateProps &
  ResumeIncludePhotoStateProps &
  ResumePaperFormatShortCodeProps & {
    resumeCode: ResumeCode;
  };

function getInitialSpecialtyId(specialties: Specialties) {
  const hasAl = specialties.filter((s) => s.id === "al").length > 0;
  return !hasAl ? specialties[0].id : "al";
}

export function useResumeCustomization(
  resume: Resume
): UseResumeCustomizationReturn {
  const router = useRouter();
  const querySpecialtyId = router.query["specialty-id"] as SpecialtyId;
  const queryIncludePhoto = router.query["include-photo"] === "true";
  const queryPaperFormat = router.query[
    "paper-format"
  ] as PaperFormat["searchQueryValue"];
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<SpecialtyId>(
    querySpecialtyId || getInitialSpecialtyId(resume.variants.specialties)
  );
  const [includePhoto, setIncludePhoto] = useState(queryIncludePhoto);
  const [paperFormat, setPaperFormat] = useState(queryPaperFormat || "a4");
  const activePaperFormatShortCode = createPaperFormatShortCode(paperFormat);
  const resumeCode = createResumeCode(
    activeSpecialtyId,
    includePhoto,
    activePaperFormatShortCode
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
    activePaperFormatShortCode,
    includePhoto,
    setIncludePhoto,
    resumeCode,
  };
}
