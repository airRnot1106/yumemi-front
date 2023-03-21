export type Ok<T> = {
  ok: true;
  value: T;
};

export type Err<E extends Error> = {
  ok: false;
  error: E;
};

// 成功か失敗かを表す型。APIレスポンスなど、取得に失敗する可能性のある処理の結果に使用する。成功か失敗かは、okプロパティで判定する
export type Result<T, E extends Error> = Ok<T> | Err<E>;
