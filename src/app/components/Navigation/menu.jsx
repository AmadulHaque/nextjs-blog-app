const ADMIN = 1;
const MODERATOR = 2;
const USER = 3;

export const menu = [
  {
    title: 'Dashboard',
    icon: 'dashboard-icon',
    href: '/dashboard',
    roles: [ADMIN, MODERATOR, USER], 
  },
  {
    title: 'Category',
    icon: 'Category-icon',
    href: '/categories',
    roles: [ADMIN],
    // subMenu: [
    //   {
    //     title: 'Category List',
    //     href: '/categories',
    //     roles: [ADMIN],
    //   },
    //   {
    //     title: 'New Category',
    //     href: '/categories/create',
    //     roles: [ADMIN],
    //   },
    // ],
  },

];
