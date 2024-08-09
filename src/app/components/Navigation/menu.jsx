import CategoryIcon from "../UI/Icons/CategoryIcon";
import HomeIcon from "../UI/Icons/HomeIcon";

const ADMIN = 1;
const MODERATOR = 2;
const USER = 3;

export const menu = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    href: "/dashboard",
    roles: [ADMIN, MODERATOR, USER],
  },
  {
    title: "Post",
    icon: <CategoryIcon />,
    href: "/posts",
    roles: [ADMIN, MODERATOR],
  },
  {
    title: "Category",
    icon: <CategoryIcon />,
    href: "/categories",
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
