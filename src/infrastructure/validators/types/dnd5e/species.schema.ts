import z from 'zod';
import { AbilityScores } from './ability-scores.schema';
import { Skills } from './skills.schema';
import { Languages, WeaponTypes } from './proficiencies-and-training.schema';
import { ToolsSchema } from './tools.schema';

const MovementOptions = z.enum(['walk', 'fly', 'swim', 'climb']);

const TraitsSchema = z.object({
  abilityScoreIncrease: z.record(AbilityScores, z.number()),
  speed: z.record(MovementOptions, z.number()),
  defenses: z.array(z.string()),
  proficienciesAndTraining: {
    weapons: z.array(WeaponTypes),
    tools: ToolsSchema,
    languages: z.array(Languages),
    other: z.record(Skills, z.string()).optional(),
  },
});

const SizeSchema = z.object({
  size: z.enum(['tiny', 'small', 'medium', 'large', 'huge', 'gargantuan']),
});

export const BaseSpeciesSchema = z.object({
  name: z.string(),
  traits: z.intersection(TraitsSchema, SizeSchema),
});
export type BaseSpeciesSchema = z.infer<typeof BaseSpeciesSchema>;

export const SubspeciesSchema = z.object({
  name: z.string(),
  traits: TraitsSchema,
});
export type SubspeciesSchema = z.infer<typeof SubspeciesSchema>;

export const SpeciesSchema = z.object({
  base: BaseSpeciesSchema,
  subspecies: SubspeciesSchema,
});
export type SpeciesSchema = z.infer<typeof SpeciesSchema>;
