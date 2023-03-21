import { atom } from 'jotai';
import { atomWithCache } from 'jotai-cache';

import { checkedPrefecturesAtom } from '@/stores/prefecture/atoms';
import type {
  CheckedPrefecturesState,
  PrefecturesState,
} from '@/stores/prefecture/types';
import { prefecturesResponseSchema } from '@/stores/prefecture/types';

// 選択状態の都道府県コードをソートしたatom
export const checkedPrefecturesState = atom<CheckedPrefecturesState>((get) => {
  const checkedPrefectures = get(checkedPrefecturesAtom);
  checkedPrefectures.sort((a, b) => a - b);
  return checkedPrefectures;
});
checkedPrefecturesAtom.debugLabel = 'checkedPrefecturesState';

// 都道府県の一覧を取得するatom
export const prefecturesState = atomWithCache<Promise<PrefecturesState>>(
  async () => {
    const response = await fetch(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env['NEXT_PUBLIC_RESAS_API_KEY'] as string,
        },
      }
    );
    const prefecturesResponse = await response.json();

    // レスポンスの型チェック
    const parsedPrefecturesResponse =
      prefecturesResponseSchema.safeParse(prefecturesResponse);

    if (!parsedPrefecturesResponse.success) {
      return {
        ok: false,
        error: parsedPrefecturesResponse.error,
      };
    }

    const prefectures = parsedPrefecturesResponse.data.result;

    // 都道府県コードをキーにしたRecordに変換する
    const prefecturesMap = prefectures.reduce(
      (acc, prefecture) => ({
        ...acc,
        [prefecture.prefCode]: prefecture,
      }),
      {} as Record<number, (typeof prefectures)[number]>
    );

    return {
      ok: true,
      value: prefecturesMap,
    };
  }
);
prefecturesState.debugLabel = 'prefecturesState';
