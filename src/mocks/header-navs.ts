export default [
  {
    id: '1',
    title: 'Home',
    to: 'home',
  },
  {
    id: '2',
    title: 'Pages',
    to: 'home', // TODO: change when has route
    isHasComponent: true,
  },
  {
    id: '3',
    title: 'Categories',
    to: 'home', // TODO: change when has route
    children: [
      {
        id: '1',
        title: 'Tips',
        to: 'home', // TODO: change when has route
      },
      {
        id: '2',
        title: 'Resources',
        to: 'home', // TODO: change when has route
      },
      {
        id: '3',
        title: 'Guides',
        to: 'home', // TODO: change when has route
      },
    ],
  },
  {
    id: '4',
    title: 'Contact',
    to: 'home', // TODO: change when has route
  },
  {
    id: '5',
    title: 'Subscribe',
    to: 'home', // TODO: change when has route
  },
];
