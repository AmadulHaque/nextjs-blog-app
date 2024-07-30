import { menu } from './menu';

export const getMenu = (role) => {
  const filterMenu = (items) => {
    return items
      .filter(item => item.roles.includes(role))
      .map(item => ({
        ...item,
        subMenu: item.subMenu ? filterMenu(item.subMenu) : []
      }));
  };

  return filterMenu(menu);
};
