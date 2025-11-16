const SUCCESS_TAG: string = "success";
const FAILURE_TAG: string = "failure";
type ResultElement<T, E extends Error> =
  | { data: T; error?: never }
  | { error: E; data?: never };

type Empty = {};

export type Success<T> = Result<T, any>;
export type Failure<E extends Error> = Result<any, E>;
export class Result<T, E extends Error> {
  _tag: string;
  _element: ResultElement<T, E>;
  protected constructor(_tag: string, value: T | null, error: E | null) {
    this._tag = _tag;
    if (value) this._element = { data: value };
    else if (error) this._element = { error: error };
    else throw Error("Invalid Result Construction");
  }

  static ok<T>(value: T = {} as T): Success<T> {
    return new Result(SUCCESS_TAG, value, null) as Success<T>;
  }

  static err<E extends Error>(error: E): Failure<E> {
    return new Result(FAILURE_TAG, null, error) as Failure<E>;
  }

  isSuccess(): boolean {
    return this._tag === SUCCESS_TAG;
  }

  isFailure(): boolean {
    return this._tag === FAILURE_TAG;
  }

  protected get _unsafeValue(): T {
    return this._element.data as T;
  }

  protected get _unsafeError(): E {
    return this._element.error as E;
  }

  protected _unpack(): T | E {
    return this.isSuccess() ? this._unsafeValue : this._unsafeError;
  }

  expect(msg: string): T {
    if (this.isSuccess()) return this._unsafeValue as T;
    else throw Error(msg);
  }

  get value(): T {
    if (this.isSuccess()) return this._unsafeValue;
    else throw Error("Attempted value Retrieval from Failure Result");
  }

  get error(): E {
    if (this.isFailure()) return this._unsafeError;
    else throw Error("Attempted error Retrieval from Success Result");
  }
}
