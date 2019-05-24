export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/overview', authority: ['admin', 'user'] },
      {
        path: '/overview',
        authority: ['admin', 'user'],
        name: 'overview',
        icon: 'dashboard',
        component: './Dashboard/Overview',
      },
      {
        path: '/monitor',
        authority: ['admin', 'user'],
        name: 'monitor',
        icon: 'dashboard',
        component: './Dashboard/Monitor',
      },
    ],
  },
];
