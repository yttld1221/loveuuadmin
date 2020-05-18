import login from '../views/login/login';
import home from '../views/home/home';


export const routerConfig = [
  {
    path:'/',
    component:home,
    auth:true,
  },
  {
    path:'/home',
    component:home
  },{
    path:'/login',
    component:login,
  }
];