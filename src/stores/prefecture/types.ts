import { z } from 'zod';

import type { Result } from '@/types/result';

/* Schema & Type */

export const prefectureSchema = z.object({
  prefCode: z.number(),
  prefName: z.string(),
});
export type Prefecture = z.infer<typeof prefectureSchema>;

export const prefectureCodeSchema = prefectureSchema.shape.prefCode;
export type PrefectureCode = z.infer<typeof prefectureCodeSchema>;

export const prefecturesResponseSchema = z.object({
  message: z.null(),
  result: prefectureSchema.array(),
});
export type PrefecturesResponse = z.infer<typeof prefecturesResponseSchema>;

/* Atom */

export type CheckedPrefecturesAtom = PrefectureCode[];

/* Selector */

export type CheckedPrefecturesState = PrefectureCode[];

export type PrefecturesState = Result<
  Record<PrefectureCode, Prefecture>,
  Error
>;
