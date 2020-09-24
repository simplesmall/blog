import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SkillIndex from '../views/Skill/SkillIndex'
import LifeIndex from '../views/Life/LifeIndex'
import StudyIndex from '../views/Study/StudyIndex'
import GossipIndex from '../views/Gossip/GossipIndex'

import ArticleDetail from '../views/components/ArticleDetail'

Vue.use(Router)

// 获取原型对象上的push函数
const originalPush = Router.prototype.push
// 修改原型对象中的push方法
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
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
      component: SkillIndex,
      children: [
        {
          path: 'detail/:id',
          name: 'ArticleDetail',
          component: ArticleDetail
        },
        {
          path: 'test',
          name: 'LifeIndex',
          component: LifeIndex
        }
      ]
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
