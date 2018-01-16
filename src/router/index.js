import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import authorpage from '../components/authorpage'
import moodpage from '../components/moodpage'
import FAQpage from '../components/FAQpage'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
      	{
	      path: 'moodpage/:id=3',
	      name: 'moodpage',
	      component: moodpage
	    },
      	{
	      path: 'authorpage',
	      name: 'authorpage',
	      component: authorpage
	    },
	    {
	      path: 'FAQpage',
	      name: 'FAQpage',
	      component: FAQpage
	    }
      ]
    },
    {
      path:'*',
      redirect:'/home'
    },
    {  
      path: '',  
      name: 'home',  
      component: home  
	},  
  ]
})
