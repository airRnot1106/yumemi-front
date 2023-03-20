import { z } from 'zod';

import { prefectureSchema } from '@/stores/prefecture/types';

import type { Result } from '@/types/result';

/* Schema & Type */

// 人口構成の種類
export const populationTypes = [
  'TOTAL',
  'YOUTH',
  'WORKING_AGE',
  'ELDERLY',
] as const;
export const populationTypeSchema = z.enum(populationTypes);
export type PopulationType = z.infer<typeof populationTypeSchema>;

// 人口構成のラベル
export const populationLabels = [
  '総人口',
  '年少人口',
  '生産年齢人口',
  '老年人口',
] as const;
export const populationLabelSchema = z.enum(populationLabels);
export type PopulationLabel = z.infer<typeof populationLabelSchema>;

// 人口構成->ラベル
export const populationTypeToLabel = {
  TOTAL: '総人口',
  YOUTH: '年少人口',
  WORKING_AGE: '生産年齢人口',
  ELDERLY: '老年人口',
} as const satisfies Record<PopulationType, PopulationLabel>;

// ラベル->人口構成
export const populationLabelToType = {
  総人口: 'TOTAL',
  年少人口: 'YOUTH',
  生産年齢人口: 'WORKING_AGE',
  老年人口: 'ELDERLY',
} as const satisfies Record<PopulationLabel, PopulationType>;

// 人口構成のデータ
export const populationSchema = z.object({
  year: z.number(),
  value: z.number(),
});
export type Population = z.infer<typeof populationSchema>;

// 人口構成の年一覧
export const populationYearsSchema = populationSchema.shape.year.array();
export type PopulationYears = z.infer<typeof populationYearsSchema>;

// ラベルと紐付いた人口構成のデータ
export const populationsDataSchema = z.object({
  label: populationLabelSchema,
  data: populationSchema.array(),
});
export type PopulationsData = z.infer<typeof populationsDataSchema>;

// 人口構成の取得結果データ
export const populationsResultSchema = z.object({
  boundaryYear: z.number(),
  data: populationsDataSchema.array(),
});
export type PopulationsResult = z.infer<typeof populationsResultSchema>;

// 人口構成の取得レスポンス
export const populationsResponseSchema = z.object({
  message: z.null(),
  result: populationsResultSchema,
});

// 人口構成をGraphに渡しやすく整形したデータ
export const populationsFormattedDataSchema = z.object({
  prefecture: prefectureSchema,
  data: z.map(populationTypeSchema, populationSchema.shape.value.array()),
});
export type PopulationsFormattedData = z.infer<
  typeof populationsFormattedDataSchema
>;

/* Atom */

// 選択されている人口情報の種類を管理するatom
export type SelectedPopulationTypeAtom = PopulationType;

/* Selector */

// 選択されている人口情報の種類を取得するatom
export type SelectedPopulationTypeState = PopulationType;

// 人口構成の年一覧を取得するatom
export type PopulationYearsState = Result<PopulationYears, Error>;

// ひとつの都道府県の人口構成のデータを取得するatom
export type PopulationsState = Result<PopulationsFormattedData, Error>;

// 複数の都道府県の人口構成のデータを取得するatom
export type PopulationsArrayState = PopulationsState[];
