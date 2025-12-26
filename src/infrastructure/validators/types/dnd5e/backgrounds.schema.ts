import z from 'zod';
import { Languages } from './proficiencies-and-training.schema';
import { Skills } from './skills.schema';

export const BackgroundSchema = z.object({
  name: z.string(),
  feature: z.object({ name: z.string(), description: z.string() }),
  proficiencies: z.object({
    languages: z.array(Languages),
    skills: z.array(Skills),
    equipment: z.array(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        amount: z.number().optional(),
      }),
    ),
  }),
});

export type BackgroundSchema = z.infer<typeof BackgroundSchema>;
