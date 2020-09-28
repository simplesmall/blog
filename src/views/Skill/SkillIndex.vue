<template>
  <div>
    <ArticleContent v-for="(item,index) in itemList" :key="index">
      <!-- 行内显示消息简介卡片-->
      <div class="inline">
        <!--  缩略图   -->
        <div class="snap-img" :style="setBgImg(item.snapImg)" @click="openDetail(item.id)"></div>
        <!--   右侧内容展示     -->
        <div class="content">
          <!-- 文字简介-->
          <div class="summary">
          <span style="display: block;text-align: left;font-size: 20px;font-weight: bold">
            {{item.article}}
            <div class="tags">
              <div class="tag" v-for="(tag,index) in item.tags" :key="index">
                <i :class="tag.icon"></i>
                {{tag.name}}
              </div>
            </div>
          </span>
            {{item.summary}}
          </div>
          <!--评论点赞收藏数据展示-->
          <div class="show-data">评论:{{item.comment}} 点赞:{{item.admire}} 收藏 : {{item.collection}}</div>
        </div>
      </div>
    </ArticleContent>
    <div class="footer"></div>
  </div>
</template>

<script>
import ArticleContent from '../../components/article/ArticleContent'

export default {
  name: 'SkillIndex',
  data () {
    return {
      itemList: [
        {
          id: 2,
          snapImg: 'https://dpic.tiankong.com/su/2b/QJ9102388384.jpg',
          article: '自带简历的一般都不太靠谱',
          summary: '首先，提前要求自带简历的一般都不太靠谱，特别是小公司要求自带简历，一般都是hr不专业，不想提前把你的简历打印出来，或者说不想为了你浪费几张A4纸，所以这种公司可以直接pass了，除非你特别缺offer，生存都成困难了。\n' +
              '其次，可以提前问一下hr面试流程是什么样的，现在很多公司都取消笔试了。众所周知笔试没有人监督你，所以可以掏出手机(虽然我没做过，但是面试看见其他人这样做过)，所以我觉得笔试作用其实没多少。如果有公司是明确要先笔试，笔试通过再进行面试，而你面试的不是应届生岗位，就要小心了，先考虑一下那家公司过去面试距离远不远，提前去看准网看一下相关的评价，再考虑要不要去面试的事。我之前面过两家都是需要笔试的，笔试没通过是直接没有后面的面试的（有的面试题非常脑残，下面上图），来回也比较远，浪费了我一个上午的时间。\n' +
              '\n' +
              '\n' +
              '作者：靓仔凌霄\n' +
              '链接：https://juejin.im/post/6875244112317317128\n' +
              '来源：掘金\n' +
              '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。',
          comment: 12,
          admire: 22,
          collection: 4,
          tags: [
            {
              name: '后端',
              icon: 'el-icon-goods'
            },
            {
              name: '数据库',
              icon: 'el-icon-printer'
            }
          ]
        },
        {
          id: 5,
          snapImg: 'https://dpic.tiankong.com/ur/x7/QJ8718285477.jpg',
          article: '文章标题',
          summary: '这是一段简单的文章叙述',
          comment: 12,
          admire: 22,
          collection: 4,
          tags: [
            {
              name: '生活',
              icon: 'el-icon-goods'
            },
            {
              name: '随意',
              icon: 'el-icon-printer'
            }
          ]
        },
        {
          id: 6,
          snapImg: '',
          article: '文章标题',
          summary: '这是一段简单的文章叙述',
          comment: 12,
          admire: 22,
          collection: 4,
          tags: [
            {
              name: '后端',
              icon: 'el-icon-goods'
            },
            {
              name: '数据库',
              icon: 'el-icon-printer'
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 打开文章详情页
    openDetail (id) {
      console.log('id is:', id)
      this.$router.push('/skill/detail/' + id)
      // this.$router.push('/skill/test')
    },
    // 设置缩略图背景
    setBgImg (img) {
      const commonCSS = ');background-repeat: no-repeat;\n' +
          '    background-size: 100% 100%;\n' +
          '    -moz-background-size: 100% 100%;cursor:pointer;'
      const imgUrl = img || 'https://dpic.tiankong.com/sg/jd/QJ6411220960.jpg'
      return 'background:url(' + imgUrl + commonCSS
    }
  },
  components: {
    ArticleContent
  }
}
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 100px;
    /*position: fixed;*/
    margin-bottom: 2px;
    background: cyan;
  }
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

  .summary {
    height: 200px;
    background: deeppink;
    padding: 10px;
  }

  .show-data {
    width: 100%;
    height: 90px;
    background: orangered;
    margin-top: 10px;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .snap-img {
    width: 500px;
    background: #ebebeb;
    margin-right: 10px;
  }

  .inline {
    display: flex;
    flex-direction: row;
  }
</style>
