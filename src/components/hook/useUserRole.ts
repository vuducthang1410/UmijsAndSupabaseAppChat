import { JwtPayload } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserInfoInLocalStorage } from "@/utils/LocalStorageUtil";

export function useUserRole() {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const authDataRp = getUserInfoInLocalStorage()
        const token = authDataRp?.access_token
        if (!token) return;

        try {
            const decoded: JwtPayload = jwtDecode(token);
            if (decoded.exp && decoded.exp * 1000 < Date.now()) {
                console.warn("Token hết hạn!");
                setRole(null);
            } else {
                setRole(decoded.role || null);
            }
        } catch (error) {
            console.error("Lỗi giải mã JWT:", error);
            setRole(null);
        }
    }, []);

    return role;
}