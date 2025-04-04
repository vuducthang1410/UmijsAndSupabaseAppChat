import { history } from '@umijs/max';
import { Button } from 'antd';
import React from 'react';
const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <h1 style={{ fontSize: '8rem', fontWeight: 'bold', color: '#ff4d4f' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', marginBottom: 20 }}>
        Trang không tồn tại!
      </h2>
      <p style={{ color: '#595959', marginBottom: 30 }}>
        Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Button type="primary" size="large" onClick={() => history.push('/')}>
        Quay về trang chủ
      </Button>
    </div>
  );
};

export default NotFoundPage;
