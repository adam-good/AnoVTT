export type Result<T, E> = { ok: T; error?: never } | { err: E; ok?: never };

function ok<T>(value: T): Result<T, any> {
  return { ok: value };
}

function err<E>(error: E): Result<any, E> {
  return { err: error };
}
