export type Result<T, E extends Error> =
  | { ok: T; error?: never }
  | { error: E; ok?: never };

export type Success<T> = Result<T, any>;
export type Failure<E extends Error> = Result<any, E>;

export function ok<T>(value: T): Success<T> {
  return { ok: value };
}

export function err<E extends Error>(error: E): Failure<E> {
  return { error: error };
}
