import Loadable from 'react-loadable';

const AsyncHome = Loadable({
  loader: () => import('views/home'),
  loading: () => null,
});

const AsyncUser = Loadable({
  loader: () => import('views/user'),
  loading: () => null,
});

const AsyncDemo = Loadable({
  loader: () => import('views/demo'),
  loading: () => null,
});

const routes = [{
  path: '/',
  exact: true,
  component: AsyncHome,
}, {
  path: '/user',
  component: AsyncUser,
},{
  path: '/demo',
  component: AsyncDemo,
}
];

export default routes;
