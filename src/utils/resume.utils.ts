import { IncludePhoto } from "_hooks/resume/resume.hooks";
import {
  type Specialties,
  type SpecialtyId,
  type Specialty,
  type PaperFormatShortCode,
  PaperFormatSearchQueryValue,
} from "_types/resume.types";

export function getActiveSpecialty(
  specialties: Specialties,
  activeSpecialtyId: SpecialtyId
): Specialty {
  console.log({ activeSpecialtyId });
  const activeSpecialty = specialties.filter(
    ({ id }) => activeSpecialtyId == id
  );
  if (activeSpecialty.length !== 1) {
    throw new Error("Specialty filter should only return a single specialty");
  }

  return activeSpecialty[0];
}

export function specialtyFilter(
  item: any,
  activeSpecialtyId: SpecialtyId
): boolean {
  let displayItem = true;
  if (!["al", "w3", "fe", "be", "fs"].includes(activeSpecialtyId)) {
    throw new Error("Unrecognized specialty id");
  }
  if (
    item.specialties &&
    !item.specialties.includes(activeSpecialtyId) &&
    activeSpecialtyId !== "al"
  ) {
    displayItem = false;
  }
  return displayItem;
}

export function printFilter(item: any): boolean {
  return item.print !== false;
}

export function createPaperFormatShortCode(
  paperFormat: PaperFormatSearchQueryValue
): PaperFormatShortCode {
  switch (paperFormat) {
    case "a4":
      return "4";
    case "letter":
      return "l";
    case "unspecified":
      return "-";
    default:
      throw new Error("unrecognized paper format");
  }
}

export function createResumeCode(
  activeSpecialtyId: SpecialtyId,
  includePhoto: IncludePhoto,
  paperFormatShortCode: PaperFormatShortCode
): string[] {
  const resumeCode = [
    activeSpecialtyId.toUpperCase(),
    includePhoto ? "p" : "n",
    paperFormatShortCode,
    btoa(Date.now().toString()),
  ].join("");
  const lineLength = 6;
  const re = Array(Math.ceil(resumeCode.length / lineLength))
    .fill(null)
    .map((_, i) => {
      let section = resumeCode.slice(i * lineLength, (i + 1) * lineLength);
      if (section.length < lineLength) {
        section = section.padEnd(lineLength, "-");
      }
      return section;
    });
  return re;
}
