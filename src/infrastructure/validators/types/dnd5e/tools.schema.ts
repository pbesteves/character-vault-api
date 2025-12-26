import z from 'zod';

export const ToolsSchema = z.object({
  category: z.enum([
    'artisan',
    'gamingSet',
    'musicalInstrument',
    'miscellaneous',
  ]),
  name: z.string(),
  cost: z.number(),
});
export type ToolSchema = z.infer<typeof ToolsSchema>;
