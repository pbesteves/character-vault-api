import z from 'zod';

export const SensesSchema = z.object({
  passivePerception: z.number(),
  passiveInvestigation: z.number(),
  passiveInsight: z.number(),
  darkVision: z.number(),
  tremorSense: z.number(),
});

export type SensesSchema = z.infer<typeof SensesSchema>;
