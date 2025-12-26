import z from 'zod';
import { ArmorTypes, WeaponTypes } from './proficiencies-and-training.schema';
import { AbilityScores } from './ability-scores.schema';
import { SkillSchema } from './skills.schema';
import { SpellSchema } from './spells.schema';

export const ClassFeatures = z.object({
  name: z.string(),
  description: z.string(),
});

const SpellcasterSchema = z.object({
  type: z.literal('spellcaster'),
  spells: z.array(SpellSchema),
  features: z.array(z.record(z.string(), z.string())),
});
const MartialSchema = z.object({
  type: z.literal('martial'),
  features: z.array(z.record(z.string(), z.string())),
});

export const SubclassSchema = z.discriminatedUnion('type', [
  SpellcasterSchema,
  MartialSchema,
]);

export const ClassSchema = z.object({
  level: z.number(),
  hitDice: z.number().min(6).max(12),
  proficienciesAndTrainingSchema: z.object({
    armor: z.array(ArmorTypes),
    weapons: z.array(WeaponTypes),
    savingThrows: z.array(AbilityScores),
    skills: z.array(SkillSchema),

    features: ClassFeatures,
  }),
  spellcasting: z
    .object({
      knownCantrips: z.number(),
      spellSlotsPerSpellLevel: z.array(z.number()),
      spells: z.array(SpellSchema),
    })
    .optional(),
  subclass: SubclassSchema,
});
