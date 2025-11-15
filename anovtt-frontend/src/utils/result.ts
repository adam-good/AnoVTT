export type Ok<T> = {
  _tag: "success";
  data: T;
};

export type Err<E> = {
  _tag: "failure";
  error: E;
};

export type Result<T, E> = Ok<T> | Err<E>;

export function ok<T>(value: T): Ok<T> {
  return {
    _tag: "success",
    data: value,
  };
}

export function err<E>(error: E): Err<E> {
  return {
    _tag: "failure",
    error: error,
  };
}
