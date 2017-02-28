import Vue from 'vue'
import Router from 'vue-router'
import menuModule from '../store/modules/menu'
Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: require('../views/Dashboard'),
      children: [
        {path: '/', component: require('../views/Home')},
        ...generateRoutesFromMenu(menuModule.state.items)
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: require('../views/Login')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

// Menu should have 2 levels.
function generateRoutesFromMenu (menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}
