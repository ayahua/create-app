const routes = [
  {
    path: '/home',
    component: 'home'
  },
  {
    path: '/config',
    children: [
      {
        path: '/config/list',
        component: 'config/list'
      }
    ]
  }
]

export default routes
