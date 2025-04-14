import { jwtDecode } from "jwt-decode";
import { getUserInfoInLocalStorage } from "./LocalStorageUtil";
import { JwtPayload } from "@supabase/supabase-js";

// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}
export function getRoleInToken() {
  const authDataRp = getUserInfoInLocalStorage()
  const token = authDataRp?.access_token
  console.log(token)
  if (!token) return null;

  try {
    const decoded: JwtPayload = jwtDecode(token);
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      return null;
    } else {
      console.log(decoded.userRole)
      return decoded.userRole;
    }
  } catch (error) {
    console.error("Lỗi giải mã JWT:", error);
    return null
  }
}
export const isEmptyObject = (obj: any) => {
  // Kiểm tra nếu đối tượng là mảng rỗng
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  // Kiểm tra nếu đối tượng là một đối tượng thuần túy rỗng
  return obj && typeof obj === 'object' && obj.constructor === Object && Object.keys(obj).length === 0;
};
