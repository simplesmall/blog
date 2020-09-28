<template>
    <div>
      <ArticleContent>
        <p>{{sourceId}}</p>
        <h2>{{articleObj.title}}</h2>
        <div class="tags">
          <div class="tag" v-for="(tag,index) in articleObj.tags" :key="index">
            <i :class="tag.icon"></i>
            {{tag.name}}
          </div>
        </div>
        <span>{{articleObj.author}}==>{{articleObj.createTime}}</span>
        <span>字数: {{articleObj.counter}} 阅读数: {{articleObj.readCounter}}</span>
        <p>{{articleObj.content}}</p>
        <ArticleContent>
        <p>评论数: {{articleData.commentCounter}} ==> 点赞数:{{articleData.admireCounter}}</p>
          评论内容:
          <el-input
            placeholder="请输入评论内容"
            v-model="articleData.comment"
            type="textarea"
            rows="5"
            clearable>
          </el-input>
          <el-row>
            <el-button>取 消</el-button>
            <el-button>发 布</el-button>
          </el-row>
        </ArticleContent>
      </ArticleContent>
      <div class="article-footer">
        文章底部
      </div>
    </div>
</template>

<script>
import ArticleContent from '../../components/article/ArticleContent'
export default {
  name: 'ArticleDetail',
  data () {
    return {
      sourceId: this.$route.params.id,
      articleObj: {
        tags: [
          {
            name: '后端',
            icon: 'el-icon-goods'
          },
          {
            name: '数据库',
            icon: 'el-icon-printer'
          }
        ],
        title: '产品经理完整的工作流程',
        author: 'jiandan',
        createTime: '2020-7-12',
        counter: 2330,
        readCounter: 34,
        content: '产品经理完整的工作流程，分为三个阶段、十二个步骤。\n' +
          '\n' +
          '1. 产品规划：规划做一个什么样的产品。\n' +
          '\n' +
          '(1) 发现需求痛点：发现没被满足的需求、没被解决的痛点，是所有产品的第一\n' +
          '\n' +
          '步。\n' +
          '\n' +
          '(2) 找到目标用户：找到有这个需求痛点的人群。\n' +
          '\n' +
          '(3) 用户调研：设计调研问卷，调查研究真实的用户。\n' +
          '\n' +
          '(4) 用户画像：根据用户调研结果，总结出用户画像，包括人物特征、需求场景\n' +
          '\n' +
          '等等。\n' +
          '\n' +
          '(5) 竞品分析：找对手产品的前几名，分析它们的优缺点，学习优点，改进缺点，\n' +
          '\n' +
          '超过竞品。\n' +
          '\n' +
          '2. 产品设计：设计产品应该怎么做。\n' +
          '\n' +
          '(6) 业务流程图：用户用这个产品做什么事情，和做事情的顺序，画成流程图。\n' +
          '\n' +
          '(7) 功能结构图：产品有哪些功能，功能结构什么样，画成思维导图。\n' +
          '\n' +
          '(8) 产品原型：产品页面做出来是什么样子，用产品设计软件做好原型。\n' +
          '\n' +
          '(9) 需求文档：每个细节的实现要求，需要怎样的效果，在需求文档中写清楚。\n' +
          '\n' +
          '3. 产品交付：做出产品，推向市场，持续迭代。\n' +
          '\n' +
          '(10)项目管理：管理整个产品的进度，保证按时上线。\n' +
          '\n' +
          '(11)数据分析：分析上线后产生的数据，发现问题和优化点。\n' +
          '\n' +
          '(12)需求迭代：根据用户、市场、对手的变化，改进产品，持续更新。\n' +
          '\n' +
          '作者：羊仙仙\n' +
          '链接：https://www.jianshu.com/p/e70aa602b8f0\n' +
          '来源：简书\n' +
          '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
      },
      articleData: {
        commentCounter: 12,
        admireCounter: 9,
        comment: ''
      }
    }
  },
  components: {
    ArticleContent
  }
}
</script>

<style scoped>
  .tags {
    float: right;
    width: 300px;
    height: 22px;
    background: white;
    display: flex;
    flex-direction: row-reverse;
  }
  .tag {
    font-size: 14px;
    width: 66px;
    background: springgreen;
    border-radius: 5px;
    margin: 0 3px;
    cursor: pointer;
  }
  .article-footer{
    width: 100%;
    height: 50px;
    background: gray;
  }
</style>
