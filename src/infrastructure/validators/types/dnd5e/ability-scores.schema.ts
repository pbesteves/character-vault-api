import z from 'zod';

export const AbilityScores = z.enum([
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
]);

export const AbilityScoresSchema = z.record(AbilityScores, z.number());
export type AbilityScoresSchema = z.infer<typeof AbilityScoresSchema>;
