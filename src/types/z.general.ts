import { z } from 'zod';

export const ConditionSchema = z.object({
  text: z.string(),
  icon: z.string(),
  code: z.number(),
});

export type ConditionType = z.infer<typeof ConditionSchema>;
