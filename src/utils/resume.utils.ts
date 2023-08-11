import {
  type Specialties,
  type SpecialtyId,
  type Specialty,
} from "_types/resume.types";

export function getActiveSpecialty(
  specialties: Specialties,
  activeSpecialtyId: SpecialtyId
): Specialty {
  const activeSpecialty = specialties.filter(
    ({ id }) => activeSpecialtyId == id
  );
  if (activeSpecialty.length !== 1) {
    throw new Error("Specialty filter should only return a single specialty");
  }

  return activeSpecialty[0];
}

export function computeItemDisplay(
  item: any,
  activeSpecialtyId: SpecialtyId
): boolean {
  let displayItem = true;
  if (
    item.specialties &&
    !item.specialties.includes(activeSpecialtyId) &&
    activeSpecialtyId !== "all"
  ) {
    displayItem = false;
  }
  return displayItem;
}
