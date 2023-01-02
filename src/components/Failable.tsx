import { isOk, Result } from "../models/Result";

type Props<T> = {
    result: Result<T>
    success: (value: T) => React.ReactNode,
    error: (error: String) => React.ReactNode
}

export default function Failable<T>({ result, success, error }: Props<T>) {
    return (
        <>
            {
                isOk(result) ? success(result.value) : error(result.value)
            }
        </>
    );
}