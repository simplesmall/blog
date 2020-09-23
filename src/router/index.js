import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SkillIndex from '../views/Skill/SkillIndex'
import LifeIndex from '../views/Life/LifeIndex'
import StudyIndex from '../views/Study/StudyIndex'
import GossipIndex from '../views/Gossip/GossipIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/skill',
      name: 'SkillIndex',
      component: SkillIndex
    },
    {
      path: '/life',
      name: 'LifeIndex',
      component: LifeIndex
    },
    {
      path: '/study',
      name: 'StudyIndex',
      component: StudyIndex
    },
    {
      path: '/gossip',
      name: 'GossipIndex',
      component: GossipIndex
    }
  ]
})
