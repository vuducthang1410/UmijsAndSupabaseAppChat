import { supabase } from '@/config/supabaseConfig';
import { history } from '@umijs/max';
import { Alert, Button, Card, Form, Input, message } from 'antd';
import { useState } from 'react';
import { AuthDataRq } from 'types/auth';
const SignupForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: AuthDataRq) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email: values.email || '',
      password: values.password || '',
      options: {
        emailRedirectTo: 'http://localhost:3456/auth/login',
      },
    });
    await supabase.from('user_roles').insert([
      {
        user_id: data?.user?.id,
        role_id: '73baccb4-ef93-4f8c-9077-cbc83473717a',
      },
    ]);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      history.push('/auth/login');
      message.success('User created successfully! Check your email to verify.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#fff',
      }}
    >
      <Card
        style={{
          width: 400,
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        }}
        cover={
          <img
            alt="logo"
            src="https://www.saokim.com.vn/wp-content/uploads/2023/01/Bieu-Tuong-Logo-Ngan-Hang-Kien-Long-Bank.png"
            style={{ width: '100px', margin: '20px auto', display: 'block' }}
          />
        }
      >
        <h2 style={{ textAlign: 'center', color: '#ff8e2e' }}>Đăng Ký</h2>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
          >
            <Input
              placeholder="Nhập email của bạn"
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password
              placeholder="Nhập mật khẩu"
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>
          {error && (
            <Alert
              message={error}
              type="error"
              showIcon
              style={{ marginBottom: 16 }}
            />
          )}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{
                backgroundColor: '#ff8e2e',
                borderColor: '#ff8e2e',
                borderRadius: '8px',
              }}
            >
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          Bạn đã có tài khoản?{' '}
          <a href="/auth/login" style={{ color: '#ff8e2e' }}>
            Đăng nhập
          </a>
        </div>
      </Card>
    </div>
  );
};

export default SignupForm;
