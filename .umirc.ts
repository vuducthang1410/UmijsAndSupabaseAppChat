import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  dva: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      wrappers: ['@/pages/Auth/AuthGuard'],
    },
    {
      path: "/auth/register",
      component: './Auth/RegisterPage.tsx',
      layout: false
    },
    {
      path: "/auth/login",
      component: './Auth/LoginPage.tsx',
      layout: false
    }
  ],
  npmClient: 'pnpm',
});

