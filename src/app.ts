import { AuthDataRp } from "types/auth";
import { getUserInfoInLocalStorage } from "./utils/LocalStorageUtil";

export async function getInitialState(): Promise<{
  currentUser?: AuthDataRp | null;
}> {
  const user = getUserInfoInLocalStorage()
  return { currentUser: user};
}

export const layout = () => {
  return {
    logo: 'https://www.saokim.com.vn/wp-content/uploads/2023/01/Bieu-Tuong-Logo-Ngan-Hang-Kien-Long-Bank.png',
    menu: {
      locale: false,
    },
    contentStyle: { padding:0},
  };
};
