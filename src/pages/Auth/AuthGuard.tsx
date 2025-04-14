import { isEmptyObject } from '@/utils/format';
import { getUserInfoInLocalStorage } from '@/utils/LocalStorageUtil';
import {
  history,
  Outlet,
  useDispatch,
  useLocation,
  useSelector,
} from '@umijs/max';
import React, { useEffect } from 'react';
const AuthGuard: React.FC<{ children: JSX.Element }> = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { authData, isLogin, isCompleteProfile, isCheckProfile } = useSelector(
    (state: any) => state.auth,
  );
  const data = getUserInfoInLocalStorage();
  const checkCompleteProfile = () => {
    console.log(isCheckProfile, isCompleteProfile);
    if (!isCompleteProfile && isCheckProfile) {
      history.push('/profile/complete');
    }
  };
  useEffect(() => {
    if (!data && isLogin === false) {
      if (location.pathname !== '/logout')
        localStorage.setItem('pathname', location.pathname);
      history.push('/auth/login');
    }
    console.log(authData, isEmptyObject(authData));
    if (authData === undefined || isEmptyObject(authData)) {
      console.log('first');
      if (data) {
        dispatch({
          type: 'auth/reloadPage',
          payload: {
            user: data,
          },
          callback: (user_id: string) => {
            if (!isCheckProfile) {
              dispatch({
                type: 'auth/checkCompleteProfile',
                payload: user_id,
                callback: checkCompleteProfile,
              });
            }
          },
        });
      } else if (!data) {
        history.push('/auth/register');
      }
    }
  }, [authData]);
  useEffect(() => {
    console.log(isCheckProfile, isCompleteProfile);
    if (!isEmptyObject(authData)) {
      dispatch({
        type: 'auth/checkCompleteProfile',
        payload: authData.user.id,
        callback: checkCompleteProfile,
      });
    } else checkCompleteProfile();
  }, [isCheckProfile]);
  return <Outlet></Outlet>;
};

export default AuthGuard;
