type Success<T> = {Ok: T};
type Error = {Err: string};

export type Result<T> = Success<T> | Error;

export function isOk<T>(result: Result<T>): result is Success<T> {
    return "Ok" in result;
}

export function ok<T>(value: T): Result<T> {
    return {Ok: value}
}

export function err(message: string): Result<never> {
    return {Err: message}
}