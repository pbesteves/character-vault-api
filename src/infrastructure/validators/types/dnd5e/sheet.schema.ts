import z from 'zod';
import { ClassSchema, SubclassSchema } from './class.schema';
import { SkillsSchema } from './skills.schema';
import { SavingThrowsSchema } from './saving-throws.schema';
import { SensesSchema } from './senses.schema';
import { SpeciesSchema } from './species.schema';
import { ProficienciesAndTrainingSchema } from './proficiencies-and-training.schema';
import { AbilityScoresSchema } from './ability-scores.schema';
import { ActionsSchema } from './actions.schema';
import { BackgroundSchema } from './backgrounds.schema';

export const Dnd5eSheetSchema = z.object({
  name: z.string(),
  level: z.number(),
  proficiencyBonus: z.number(),
  initiative: z.number(),
  conditions: z.array(z.string()),
  defenses: z.array(z.string()),
  hasInspiration: z.boolean().default(false),
  healthPoints: z.object({
    current: z.number().min(0),
    max: z.number(),
    temp: z.number().optional(),
  }),
  armorClass: z.number().default(10),
  attacksPerAction: z.number().default(1),
  characterClass: ClassSchema,
  subclass: SubclassSchema,
  skills: SkillsSchema,
  savingThrows: SavingThrowsSchema,
  senses: SensesSchema,
  species: SpeciesSchema,
  proficienciesAndTrainingSchema: ProficienciesAndTrainingSchema,
  abilityScores: AbilityScoresSchema,
  actions: ActionsSchema,
  backgroud: BackgroundSchema,
});
export type Dnd5eSheetSchema = z.infer<typeof Dnd5eSheetSchema>;
