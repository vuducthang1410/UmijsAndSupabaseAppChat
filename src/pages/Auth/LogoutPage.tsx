import { history, useDispatch } from '@umijs/max';
import { message } from 'antd';
import { useEffect } from 'react';
import { DataCallback } from 'types/reponse';
const LogoutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'auth/logout',
      callback: (reponse: DataCallback<string>) => {
        if (reponse.isSuccess) {
          message.success(reponse.message);
          history.push('/auth/login');
        } else {
          message.error(reponse.message);
        }
      },
    });
  }, []);
  return null;
};

export default LogoutPage;
