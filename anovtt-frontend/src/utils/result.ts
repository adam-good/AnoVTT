const SUCCESS_TAG: string = "success";
const FAILURE_TAG: string = "failure";
export type Result<T, E extends Error> =
  | { _tag: string; ok: T; error?: never }
  | { _tag: string; error: E; ok?: never };

export type Success<T> = Result<T, any>;
export type Failure<E extends Error> = Result<any, E>;

export function ok<T>(value: T): Success<T> {
  return { _tag: SUCCESS_TAG, ok: value };
}

export function err<E extends Error>(error: E): Failure<E> {
  return { _tag: FAILURE_TAG, error: error };
}

export function isSuccess<T, E extends Error>(r: Result<T, E>): boolean {
  return r._tag === SUCCESS_TAG;
}

export function isFailure<T, E extends Error>(r: Result<T, E>): boolean {
  return r._tag === FAILURE_TAG;
}
