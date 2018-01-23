import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import author from '../components/author'
import label from '../components/label'
import messageboard from '../components/messageboard'
import skill from '../components/skill'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    },
  	{
      path: '/label',
      name: 'label',
      component: label
    },
    {
      path: '/messageboard',
      name: 'messageboard',
      component: messageboard
    },
    {
      path: '/author',
      name: 'author',
      component: author
    },
    {
      path:'*',
      redirect:'/home'
    }, 
  ]
})
