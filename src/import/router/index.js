import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '../../components/views/login/login.vue'
import shared from '../../components/views/shared/shared.vue'

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: '/login'
      }
    },
    {
      path: '/login',
      name: '/login',
      component: login
    },
    {
      path: '/shared',
      name: '/shared',
      component: shared
    },
    {
      path: '*',
      redirect: "/"
    }

  ]
})