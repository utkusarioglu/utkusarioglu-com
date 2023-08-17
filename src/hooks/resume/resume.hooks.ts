import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { type SpecialtyId, type PaperFormat } from "_types/resume.types";
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

export type ResumeCode = string[];

type UseResumeCustomizationReturn = ResumeSpecialtyIdStateProps &
  ResumeIncludePhotoStateProps & {
    resumeCode: ResumeCode;
  };

export function useResumeCustomization(): UseResumeCustomizationReturn {
  const router = useRouter();
  const querySpecialtyId = router.query["specialty-id"] as SpecialtyId;
  const queryIncludePhoto = router.query["include-photo"] === "true";
  const queryPaperFormat = router.query[
    "paper-format"
  ] as PaperFormat["searchQueryValue"];
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<SpecialtyId>(
    querySpecialtyId || "al"
  );
  const [includePhoto, setIncludePhoto] = useState(queryIncludePhoto);
  const [paperFormat, setPaperFormat] = useState(
    queryPaperFormat || "unspecified"
  );
  const paperFormatShortCode = createPaperFormatShortCode(paperFormat);
  const resumeCode = createResumeCode(
    activeSpecialtyId,
    includePhoto,
    paperFormatShortCode
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
    resumeCode,
  };
}
