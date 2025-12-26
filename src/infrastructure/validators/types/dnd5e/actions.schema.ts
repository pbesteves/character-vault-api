import z from 'zod';
import { DamageEffect, RangeTuple } from './spells.schema';
import { AbilityScores } from './ability-scores.schema';

export const ActionsSchema = z.object({
  name: z.string(),
  range: RangeTuple,
  effect: DamageEffect,
  savingThrow: z.record(AbilityScores, z.number()).optional(),
});
