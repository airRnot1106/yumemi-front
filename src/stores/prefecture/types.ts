import { z } from 'zod';

import type { Result } from '@/types/result';

/* Schema & Type */

// 都道府県データ
export const prefectureSchema = z.object({
  prefCode: z.number(),
  prefName: z.string(),
});
export type Prefecture = z.infer<typeof prefectureSchema>;

// 都道府県コード
export const prefectureCodeSchema = prefectureSchema.shape.prefCode;
export type PrefectureCode = z.infer<typeof prefectureCodeSchema>;

// 都道府県の取得レスポンス
export const prefecturesResponseSchema = z.object({
  message: z.null(),
  result: prefectureSchema.array(),
});
export type PrefecturesResponse = z.infer<typeof prefecturesResponseSchema>;

/* Atom */

// チェック状態の都道府県コード一覧を管理するAtom
export type CheckedPrefecturesAtom = PrefectureCode[];

/* Selector */

// チェック状態の都道府県コード一覧を取得するAtom
export type CheckedPrefecturesState = PrefectureCode[];

// 都道府県のデータを取得するAtom
export type PrefecturesState = Result<
  Record<PrefectureCode, Prefecture>,
  Error
>;
