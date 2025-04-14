import { UploadOutlined } from '@ant-design/icons';
import { history, useDispatch, useSelector } from '@umijs/max';
import { Button, Card, Input, message, Typography, Upload } from 'antd';
import React, { useState } from 'react';
import { DataCallback } from 'types/reponse';
import './style.css';
const { Title, Text } = Typography;

interface UserProfileData {
  name: string;
  avatar: File | null;
}

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { authData, loading, isLogin } = useSelector(
    (state: any) => state.auth,
  );
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    name: '',
    avatar: null,
  });

  const handleUpload = (file: File) => {
    setUserProfile((prev) => ({ ...prev, avatar: file }));
    return false;
  };
  const completeProfile = () => {
    dispatch({
      type: 'auth/completeProfile',
      payload: {
        file: userProfile.avatar,
        name: userProfile.name,
        userId: authData.user.id,
      },
      callback: (reponse: DataCallback<string>) => {
        if (reponse.isSuccess) {
          message.success(reponse.message);
          history.push('/');
        } else {
          message.error(reponse.message);
        }
      },
    });
  };
  return (
    <Card
      style={{
        width: 400,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Logo và tên app ở góc trên trái */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 20,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src="https://www.saokim.com.vn/wp-content/uploads/2023/01/Bieu-Tuong-Logo-Ngan-Hang-Kien-Long-Bank.png"
          alt="KLB-Chat Logo"
          style={{ width: 40, height: 40, marginRight: 10 }}
        />
        <Title level={4} style={{ color: '#ff8e2e', margin: 0 }}>
          KLB-Chat
        </Title>
      </div>
      <h2 style={{ marginTop: 45 }}>Hoàn thiện đăng ký thông tin</h2>
      {/* Nội dung chính */}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
      >
        {userProfile.avatar ? (
          <img
            src={URL.createObjectURL(userProfile.avatar)}
            alt="Avatar"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              color: '#aaa',
              border: '2px dashed #ccc',
            }}
          >
            ?
          </div>
        )}
      </div>
      <Upload
        beforeUpload={(file) => {
          handleUpload(file);
          return false;
        }}
        showUploadList={false}
      >
        <Button
          type="dashed"
          icon={<UploadOutlined />}
          style={{ marginBottom: 15, color: '#ff8e2e' }}
        >
          Chọn ảnh đại diện
        </Button>
      </Upload>
      <div style={{ width: '100%', textAlign: 'left', marginBottom: 5 }}>
        <Text strong>Tên của bạn:</Text>
      </div>
      <Input
        placeholder="Nhập tên của bạn"
        value={userProfile.name}
        onChange={(e) =>
          setUserProfile((prev) => ({ ...prev, name: e.target.value }))
        }
        style={{ marginBottom: 15, width: '100%', textAlign: 'center' }}
      />
      <Button
        type="primary"
        style={{
          width: '100%',
          backgroundColor: '#ff8e2e',
          borderColor: '#ff8e2e',
        }}
        onClick={completeProfile}
      >
        Lưu thông tin
      </Button>
    </Card>
  );
};

export default UserProfile;
