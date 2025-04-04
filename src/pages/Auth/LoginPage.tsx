import LoadingOverlay from '@/components/Loading';
import { history, useDispatch, useModel, useSelector } from '@umijs/max';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { AuthDataRp, AuthDataRq } from 'types/auth';
import { DataCallback } from 'types/reponse';
import '././style/styles.css';

const Login: React.FC = () => {
  const [dataLogin, setDataLogin] = useState<AuthDataRq>({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { setInitialState } = useModel('@@initialState');
  const { authData, loading, isLogin, isCheckProfile, isCompleteProfile } =
    useSelector((state: any) => state.auth);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({
      type: 'auth/login',
      payload: { dataLogin: dataLogin },
      callback: (response: DataCallback<Object>) => {
        if (!response.isSuccess) {
          message.error(response.message);
        } else if (response.isSuccess) {
          message.success(response.message);
        }
      },
    });
  };
  useEffect(() => {
    if (authData && isCheckProfile)
      if (isLogin) {
        setInitialState((prev: AuthDataRp) => ({
          ...prev,
          currentUser: authData,
        }));
        const pathName = localStorage.getItem('pathname');
        if (isCompleteProfile) {
          if (pathName && pathName !== '/auth/log-out') {
            history.push(pathName);
          } else {
            history.push('/');
          }
        } else {
          history.push('/profile/complete');
        }
      }
  }, [isCheckProfile]);
  return (
    <div
      className="login-page"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      <div className="login-container">
        <div className="login-box">
          {/* Logo Doanh Nghiệp */}
          <img
            src="https://www.saokim.com.vn/wp-content/uploads/2023/01/Bieu-Tuong-Logo-Ngan-Hang-Kien-Long-Bank.png"
            alt="Logo"
            className="logo"
          />
          <h1 className="system-title">KLB-Banking</h1>
          <h2 style={{ marginTop: 5 }}>Đăng nhập</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={dataLogin.email}
                onChange={(e) =>
                  setDataLogin((prev: AuthDataRq) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="Nhập email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                value={dataLogin.password}
                onChange={(e) =>
                  setDataLogin((prev: AuthDataRq) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
            <div className="forgot-password">
              <a onClick={() => history.push('/forgot-password')}>
                Quên mật khẩu?
              </a>
            </div>
            <button type="submit" className="btn-login">
              Đăng nhập
            </button>
          </form>
          <p className="register-link">
            Chưa có tài khoản? <a href="/auth/register">Đăng ký ngay</a>
          </p>
        </div>
      </div>
      <LoadingOverlay loading={loading} />
    </div>
  );
};

export default Login;
