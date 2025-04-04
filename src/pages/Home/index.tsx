import { getProfileByUserId } from '@/services/auth/auth';
import { isEmptyObject } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useSelector } from '@umijs/max';
import { Avatar, Card, Space, Tag, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Profile } from 'types/user';
const { Title, Text } = Typography;
const HomePage: React.FC = () => {
  const { authData } = useSelector((state: any) => state.auth);
  const [profile, setProfile] = useState<Profile>({});
  const loadProfile = async (user_id: string) => {
    const response = await getProfileByUserId(authData.user.id);
    console.log(response[0].created_at);
    setProfile(response[0]);
  };
  useEffect(() => {
    if (!isEmptyObject(authData)) {
      loadProfile(authData.user.id);
    }
  }, [authData]);

  return (
    <PageContainer ghost>
      <div
        style={{ display: 'flex', justifyContent: 'center', paddingTop: 40 }}
      >
        <Card
          style={{
            width: 350,
            borderRadius: 16,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: 32,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={profile.avatar}
            size={100}
            style={{ marginBottom: 24 }}
          />

          <Space direction="vertical" size={16} align="center">
            <Title level={3} style={{ margin: 0 }}>
              {profile.name}
            </Title>

            <Tag
              color={profile.is_online ? 'green' : 'default'}
              style={{ fontSize: 14 }}
            >
              {profile.is_online ? 'Đang hoạt động' : 'Ngoại tuyến'}
            </Tag>

            <Text type="secondary">
              Ngày tham gia:{' '}
              {new Date(profile.created_at || '').toLocaleDateString()}
            </Text>
          </Space>
        </Card>
      </div>
    </PageContainer>
  );
};

export default HomePage;
