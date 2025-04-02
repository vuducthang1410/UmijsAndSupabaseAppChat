import { User } from "types/user";

export default function access(initialState: { currentUser?: User | null }) {
  const { currentUser } = initialState || { currentUser: null };
  return {
    isAdmin: currentUser?.role === 'ADMIN',
    isManager: currentUser?.role === 'STAFF',
    isUser: currentUser?.role === 'CUSTOMER',
    isAdminOrManager:
      currentUser?.role === 'ADMIN' || currentUser?.role === 'manager',
  };
}
