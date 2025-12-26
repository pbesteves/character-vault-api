import z from 'zod';
import { AbilityScores } from './ability-scores.schema';

export const SavingThrowSchema = z.object({
  isProficient: z.boolean().default(false),
  modifier: z.number(),
});
export type SavingThrowSchema = z.infer<typeof SavingThrowSchema>;

export const SavingThrowsSchema = z.array(
  z.record(AbilityScores, SavingThrowSchema),
);
export type SavingThrowsSchema = z.infer<typeof SavingThrowsSchema>;
