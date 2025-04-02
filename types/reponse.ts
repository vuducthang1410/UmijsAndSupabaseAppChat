import { AuthDataRp } from "./auth"

export interface DataCallback<T> {
    isSuccess: boolean,
    message?: string,
    data?: T
}
export interface BaseAuthRp {
    session: AuthDataRp
}