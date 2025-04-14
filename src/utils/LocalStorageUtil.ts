import { AuthDataRp } from "types/auth";

export function getUserInfoInLocalStorage() {
    const data = localStorage.getItem("sb-wxibsezkqqbfflonpjbm-auth-token")
    const authDataRp: AuthDataRp | null = data ? (JSON.parse(data) as AuthDataRp) : null
    return authDataRp

}