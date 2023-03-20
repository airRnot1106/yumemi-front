import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { atomWithCache } from 'jotai-cache';

import { selectedPopulationTypeAtom } from '@/stores/population/atoms';
import type {
  PopulationsFormattedData,
  PopulationsState,
  PopulationYearsState,
  SelectedPopulationTypeState,
} from '@/stores/population/types';
import {
  populationYearsSchema,
  populationLabelToType,
  populationsResponseSchema,
} from '@/stores/population/types';
import {
  checkedPrefecturesState,
  prefecturesState,
} from '@/stores/prefecture/selectors';
import type { PrefectureCode } from '@/stores/prefecture/types';

// 選択された人口情報の種類を取得するatom
export const selectedPopulationTypeState = atom<SelectedPopulationTypeState>(
  (get) => get(selectedPopulationTypeAtom)
);
selectedPopulationTypeState.debugLabel = 'selectedPopulationTypeState';

// 人口構成の年一覧を取得するatom
export const populationYearsState = atomWithCache<
  Promise<PopulationYearsState>
>(async () => {
  const response = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=1`,
    {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env['NEXT_PUBLIC_RESAS_API_KEY'] as string,
      },
    }
  );

  const populationsResponse = await response.json();

  // レスポンスの型チェック
  const parsedPopulationsResponse =
    populationsResponseSchema.safeParse(populationsResponse);

  if (!parsedPopulationsResponse.success) {
    return {
      ok: false,
      error: parsedPopulationsResponse.error,
    };
  }

  // 人口構成の年一覧を取得する
  const populationYears =
    parsedPopulationsResponse.data.result.data[0]?.data.map(
      (data) => data.year
    );

  // 年一覧が存在するかチェック
  const parsedPopulationYears =
    populationYearsSchema.safeParse(populationYears);

  if (!parsedPopulationYears.success) {
    return {
      ok: false,
      error: parsedPopulationYears.error,
    };
  }

  return {
    ok: true,
    value: parsedPopulationYears.data,
  };
});
populationYearsState.debugLabel = 'populationYearsState';

// ひとつの都道府県の人口構成を取得するFamily
const populationsState = atomFamily((prefectureCode: PrefectureCode) =>
  atomWithCache<Promise<PopulationsState>>(async (get) => {
    const prefecturesResult = await get(prefecturesState);

    // 都道府県が取得できなかった場合はエラーを返す
    if (!prefecturesResult.ok) {
      return {
        ok: false,
        error: prefecturesResult.error,
      };
    }

    const prefecture = prefecturesResult.value[prefectureCode];

    // 都道府県が存在しない場合はエラーを返す
    if (!prefecture) {
      return {
        ok: false,
        error: new Error('都道府県が存在しません'),
      };
    }

    const response = await fetch(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefectureCode}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env['NEXT_PUBLIC_RESAS_API_KEY'] as string,
        },
      }
    );
    const populationsResponse = await response.json();

    // レスポンスの型チェック
    const parsedPopulationsResponse =
      populationsResponseSchema.safeParse(populationsResponse);

    if (!parsedPopulationsResponse.success) {
      return {
        ok: false,
        error: parsedPopulationsResponse.error,
      };
    }

    // populationMapを作るためにpopulationTypeと人口のvalueをセットにし整形する
    const populations = parsedPopulationsResponse.data.result.data.map(
      ({ label, data }) => {
        const populationType = populationLabelToType[label];
        const values = data.map(({ value }) => value);
        return {
          populationType,
          values,
        };
      }
    );

    // populationTypeをキーにしたMapに変換する
    const populationMap = new Map(
      populations.map(({ populationType, values }) => [populationType, values])
    );

    return {
      ok: true,
      value: {
        prefecture: prefecture,
        data: populationMap,
      } satisfies PopulationsFormattedData,
    };
  })
);

// 複数の都道府県の人口構成を取得するatom
export const populationsArrayState = atomFamily(
  (prefectureCodes: PrefectureCode[]) =>
    atomWithCache(async (get) => {
      const populationsArray = await Promise.all(
        prefectureCodes.map((prefCode) => get(populationsState(prefCode)))
      );
      return populationsArray;
    })
);

// 選択されている都道府県の人口構成を取得するatom
export const checkedPrefecturesPopulationsArrayState = atomWithCache(
  async (get) => {
    const checkedPrefectures = get(checkedPrefecturesState);
    const populationsArray = await get(
      populationsArrayState(checkedPrefectures)
    );
    return populationsArray;
  }
);
