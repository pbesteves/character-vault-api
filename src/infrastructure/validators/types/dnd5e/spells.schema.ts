import z from 'zod';
import { AbilityScores } from './ability-scores.schema';

export const DamageEffect = z.object({
  type: z.literal('damage'),
  die: z.enum(['d4', 'd6', 'd8', 'd10', 'd12']),
  dieAmount: z.number().min(1),
});

const SpellEffect = z.discriminatedUnion('type', [
  DamageEffect,
  z.object({ type: z.literal('buff') }),
  z.object({ type: z.literal('debuff') }),
]);

export const RangeTuple = z.tuple([z.number(), z.enum(['self', 'touch'])]);
export const SpellSchema = z.object({
  name: z.string(),
  time: z.enum(['action', 'bonusAction', 'reaction', '1hour', '10minutes']),
  range: RangeTuple,
  hit: z.number().optional(),
  difficultyClass: z.record(AbilityScores, z.number()),
  effect: SpellEffect,
  isConcentration: z.boolean().default(false),
  concentrationTime: z.string(),
  duration: z.string(),
  components: z.enum(['verbal', 'somatic', 'material']),
  level: z.number().min(0).max(9),
});
