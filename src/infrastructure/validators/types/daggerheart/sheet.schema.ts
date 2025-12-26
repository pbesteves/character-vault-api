import z from 'zod';

export const DaggerheartSheetSchema = z.object({
  name: z.string(),
  characterClass: z.string(),
  heritage: z.string(),
  subclass: z.string(),
  evasion: z.number(),
  armor: z.number(),
  level: z.number().min(1),
  traits: z.object({
    agility: z.string(),
    strength: z.string(),
    finesse: z.string(),
    instinct: z.string(),
    presence: z.string(),
    knowledge: z.string(),
  }),
  damage: z.object({
    minor: z.number(),
    major: z.number(),
  }),
  hitPoints: z.object({ max: z.number(), current: z.number() }),
  stress: z.object({ max: z.number(), current: z.number() }),
  hope: z.object({ max: z.number(), current: z.number() }),
  experiences: z.array(z.string()),
  gold: z.object({ bagsAmount: z.number(), handfulsAmount: z.number() }),
  classFeature: z.array(
    z.object({ name: z.string(), description: z.string() }),
  ),
  proficiencyLevel: z.number(),
  activeWeapons: z.array(
    z.object({
      type: z.enum(['primary', 'secondary']),
      name: z.string(),
      trait: z.string(),
      range: z.string(),
      damageDice: z.number(),
      damageType: z.string(),
      feature: z.string(),
    }),
  ),
  activeArmor: z.object({
    name: z.string(),
    baseThresholds: z.object({ minor: z.number(), major: z.number() }),
    baseScore: z.number(),
    feature: z.string(),
  }),
  inventory: z.array(z.string()),
  domains: z.array(z.string()),
  spells: z.array(
    z.object({
      tier: z.number(),
      name: z.string(),
      description: z.string(),
      recallCost: z.number(),
    }),
  ),
  abilities: z.array(
    z.object({
      tier: z.number(),
      name: z.string(),
      description: z.string(),
      recallCost: z.number(),
    }),
  ),
});
export type DaggerheartSheetSchema = z.infer<typeof DaggerheartSheetSchema>;
