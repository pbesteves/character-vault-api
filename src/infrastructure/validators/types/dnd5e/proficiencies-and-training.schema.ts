import z from 'zod';

export const ArmorTypes = z.enum(['heavy', 'light', 'medium', 'shields']);
export const WeaponTypes = z.enum(['martial', 'simple']);
export const Languages = z.enum([
  'common',
  'dwarvish',
  'elvish',
  'giant',
  'gnomish',
  'goblin',
  'halfling',
  'orc',
  'draconic',
  'sign',
  'abyssal',
  'infernal',
  'celestial',
  'deepSpeech',
  'druidic',
  'primordial',
  'sylvan',
  'thievesCant',
  'undercommon',
]);

export const ProficienciesAndTrainingSchema = z.object({
  armor: z.array(ArmorTypes),
  weapons: z.array(WeaponTypes),
  languages: z.array(Languages),
});
export type ProficienciesAndTrainingSchema = z.infer<
  typeof ProficienciesAndTrainingSchema
>;
