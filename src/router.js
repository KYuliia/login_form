import Login_Page from '@/components/Login_Page.vue';
import Main_Page from '@/components/Main_Page.vue';

export const routes = [
  {
    path: '/main',
    name: 'Main_Page',
    component: Main_Page
  },
  {
    path: '/',
    name: 'Login_Page',
    component: Login_Page
  }
];
