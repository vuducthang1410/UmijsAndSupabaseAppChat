import { useUserRole } from "./components/hook/useUserRole";
import { getRoleInToken } from "./utils/format";

export default function access() {
  const role = getRoleInToken()
  return {
    isAdmin: role === 'ADMIN',
    // isManager: currentUser?.role === 'STAFF',
    isUser: role === 'CUSTOMER',
    isAdminOrManager: role === 'ADMIN' || role === 'manager',
  };
}
