import ProfileForm from '@/components/User/ProfileForm';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

const CompleteProfilePage: React.FC = () => {
  return (
    <PageContainer
      style={{
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100vh'
      }}
    >
      <ProfileForm />
    </PageContainer>
  );
};

export default CompleteProfilePage;
