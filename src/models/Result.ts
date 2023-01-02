type Success<T> = {type: "Ok", value: T};
type Error = {type: "Err", value: String};

export type Result<T> = Success<T> | Error;

export function isOk<T>(result: Result<T>): result is Success<T> {
    return result.type === "Ok";
}