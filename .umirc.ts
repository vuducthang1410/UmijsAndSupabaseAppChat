import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  dva: {},
  initialState: {},
  request: {},
  layout: {
    title: 'KLB-Chat',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Trang chủ',
      path: '/home',
      component: './Home',
      wrappers: ['@/pages/Auth/AuthGuard'],
      access: 'isUser',
    },

    {
      name: 'Tin nhắn',
      path: '/conversation',
      component: './Conversation/ConversationPage.tsx',
      wrappers: ['@/pages/Auth/AuthGuard'],
      access: 'isUser',
    },
    {
      name: 'Đăng xuất',
      path: '/auth/log-out',
      component: './Auth/LogoutPage.tsx',
      wrappers: ['@/pages/Auth/AuthGuard'],
      access: 'isUser',
    },
    {
      path: '/profile/complete',
      component: './User/CompleteProfilePage.tsx',
      layout: false,
      access: 'isUser',
    },
    {
      path: '/auth/register',
      component: './Auth/RegisterPage.tsx',
      layout: false,
    },
    {
      path: '/auth/login',
      component: './Auth/LoginPage.tsx',
      layout: false,
    },
    {
      path: '/*',
      component: './Error/NotFoundPage.tsx',
      layout: false,
    },
  ],
  npmClient: 'pnpm',
  history: {
    type: 'browser',
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', 
  base: '/',
  outputPath: 'dist',
});
