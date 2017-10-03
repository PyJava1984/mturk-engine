import { HitDatabaseEntry } from '../types';

export const conflictsPreserveBonus = (
  oldEntry: HitDatabaseEntry,
  newEntry: HitDatabaseEntry
): HitDatabaseEntry => {
  return {
    ...newEntry,
    bonus: oldEntry.bonus
  };
};