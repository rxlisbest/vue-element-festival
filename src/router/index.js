import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/preview',
      name: 'preview',
      component: require('@/pages/preview').default
    },
    {
      path: '/',
      name: 'index',
      component: require('@/pages/index').default
    },
    {
      path: '/image',
      name: 'image',
      component: require('@/pages/image').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
