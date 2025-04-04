import { AuthDataRp } from "types/auth";

export function getUserInfoInLocalStorage() {
    const data = localStorage.getItem("sb-localhost-auth-token")
    const authDataRp: AuthDataRp | null = data ? (JSON.parse(data) as AuthDataRp) : null
    return authDataRp

}