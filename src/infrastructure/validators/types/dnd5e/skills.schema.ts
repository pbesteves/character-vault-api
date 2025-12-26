import z from 'zod';
import { AbilityScores } from './ability-scores.schema';

export const Skills = z.enum([
  'acrobatics',
  'animalHandling',
  'arcana',
  'athletics',
  'deception',
  'history',
  'insight',
  'intimidation',
  'investigation',
  'medicine',
  'nature',
  'perception',
  'performance',
  'persuasion',
  'religion',
  'sleightOfHand',
  'stealth',
  'survival',
]);

export const SkillSchema = z.object({
  isProficient: z.boolean().default(false),
  hasDisadvantage: z.boolean().default(false),
  modifier: z.number(),
  abilityScore: AbilityScores,
});
export type SkillSchema = z.infer<typeof SkillSchema>;

export const SkillsSchema = z.record(Skills, SkillSchema);
export type SkillsSchema = z.infer<typeof SkillsSchema>;
