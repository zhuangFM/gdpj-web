<template>
  <div>
    <div class="nav-item">
      <ul>
        <li v-for="(item,index) in nav" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
    <div class="nav-body">
      <!-- 侧边导航 -->
      <div class="nav-side" ref="navSide">
        <ul>
          <li @mouseenter="showDetail(0)" @mouseleave="hideDetail()">
            <span class="nav-side-item">休闲零食</span> /
            <span class="nav-side-item">饼干糕点</span>
          </li>
          <li @mouseenter="showDetail(1)" @mouseleave="hideDetail()">
            <span class="nav-side-item">小食糖巧</span> /
            <span class="nav-side-item">肉类零食</span>
          </li>
          <li @mouseenter="showDetail(2)" @mouseleave="hideDetail()">
            <span class="nav-side-item">坚果炒货</span> /
            <span class="nav-side-item">蜜饯果干</span>
          </li>
          <li @mouseenter="showDetail(3)" @mouseleave="hideDetail()">
            <span class="nav-side-item">冲调饮品</span> /
            <span class="nav-side-item">传统茗茶</span>
          </li>
          <li @mouseenter="showDetail(4)" @mouseleave="hideDetail()">
            <span class="nav-side-item">茶包花茶</span> /
            <span class="nav-side-item">滋补食材</span>
          </li>
          <li @mouseenter="showDetail(5)" @mouseleave="hideDetail()">
            <span class="nav-side-item">保健品</span> /
            <span class="nav-side-item">酒类</span>
          </li>
          <li @mouseenter="showDetail(6)" @mouseleave="hideDetail()">
            <span class="nav-side-item">乳品饮料</span> /
            <span class="nav-side-item">方便食品</span>
          </li>
          <li @mouseenter="showDetail(7)" @mouseleave="hideDetail()">
            <span class="nav-side-item">米面粮油</span> /
            <span class="nav-side-item">米面粮油</span>
          </li>
          <li @mouseenter="showDetail(8)" @mouseleave="hideDetail()">
            <span class="nav-side-item">南北干货</span> /
            <span class="nav-side-item">调味酱菜</span>
          </li>
          <li @mouseenter="showDetail(9)" @mouseleave="hideDetail()">
            <span class="nav-side-item">果鲜肉蛋</span> /
            <span class="nav-side-item">网易黑猪</span>
          </li>
          <li @mouseenter="showDetail(10)" @mouseleave="hideDetail()">
            <span class="nav-side-item">海外美食</span> /
            <span class="nav-side-item">海外美食</span>
          </li>
          <li @mouseenter="showDetail(11)" @mouseleave="hideDetail()">
            <span class="nav-side-item">果鲜肉蛋</span> /
            <span class="nav-side-item">酒类</span>
          </li>
          <li @mouseenter="showDetail(12)" @mouseleave="hideDetail()">
            <span class="nav-side-item">调味酱菜</span> /
            <span class="nav-side-item">饼干糕点</span>
          </li>
          <!--<li @mouseenter="showDetail(13)" @mouseleave="hideDetail()">-->
            <!--<span class="nav-side-item">调味酱菜</span> /-->
            <!--<span class="nav-side-item">果鲜肉蛋</span>-->
          <!--</li>-->
        </ul>
      </div>
      <div class="nav-content">
        <!-- 幻灯片 -->
        <div>
          <Carousel autoplay loop>
            <CarouselItem v-for="(item, index) in marketing.CarouselItems" :key="index">
              <router-link :to="{path: '/goodsList', query: { searchData: '网易'}}">
                <img :src="item">
              </router-link>
            </CarouselItem>
          </Carousel>
        </div>
        <div class="nav-show">
          <div class="nav-show-img" v-for="(item, index) in marketing.activity" :key="index">
            <router-link :to="{path: '/goodsList', query: { searchData: '网易'}}">
              <img :src="item">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 菜单栏 -->
    <transition name="fade" v-for="(item, index) in panelData" :key="index">
      <div class="detail-item-panel" :duration="{ enter: 100, leave: 100 }" v-show="actionNav === index"
           @mouseenter="showDetail(index)" :ref="index" :style="{left: left + 'px', top: top + 'px'}"
           @mouseleave="hideDetail(index)">
        <div class="nav-detail-item">
          <span v-for="(item, index) in item.navTags" :key="index">{{item}} > </span>
        </div>
        <ul>
          <li v-for="(items, index) in item.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link :to="{path: '/goodsList', query: { searchData: item }}" v-for="(item, subIndex) in items.tags"
                         :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
          <li v-for="(items, index) in item.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link :to="{path: '/goodsList', query: { searchData: item }}" v-for="(item, subIndex) in items.tags"
                         :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
          <li v-for="(items, index) in item.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link :to="{path: '/goodsList', query: { searchData: item }}" v-for="(item, subIndex) in items.tags"
                         :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
          <li v-for="(items, index) in item.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link :to="{path: '/goodsList', query: { searchData: item }}" v-for="(item, subIndex) in items.tags"
                         :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
          <li v-for="(items, index) in item.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
            <router-link :to="{path: '/goodsList', query: { searchData: item }}" v-for="(item, subIndex) in items.tags"
                         :key="subIndex">
              <span class="detail-item">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState} from 'vuex';

  export default {
    name: 'HomeNav',
    data() {
      return {
        left: 0,
        top: 0,
        actionNav: 99,
        nav: [
          '秒杀',
          '优惠券',
          '闪购',
          '特价',
          '工厂店',
          '便捷超市',
          '生鲜',
          '全球购',
          '肉类'
        ],
        panelData: [
          {
            navTags: ['休闲零食', '饼干糕点', '小食糖巧', '肉类零食'],
            classNav: [
              {
                title: '休闲零食',
                tags: ['薯片', '棉花糖', '脆脆鲨', '巧克力', '花生酥', '士力架', '香菇肥牛', '小熊饼干', '好多鱼']
              },
              {
                title: '肉类零食',
                tags: ['猪肉脯', '牛肉脯', '新疆牛肉干', '黑椒肉干', '蜜汁肉干', '网易黑猪肉脯', '炭火烤肠']
              }
            ]
          },
          {
            navTags: ['休闲零食', '饼干糕点', '小食糖巧', '肉类零食'],
            classNav: [
              {
                title: '小食糖巧',
                tags: ['泰式蟹片', '爱的诗意 黑巧克力', '芝心寿司', '和风鱿鱼卷', '金南瓜薄脆']
              },
              {
                title: '饼干糕点',
                tags: ['柔风黄油曲奇', '蔬菜风味牛奶面包', '绿茶蛋黄酥', '黄山烧饼', '雪麸蛋糕']
              }
            ]
          },
          {
            navTags: ['坚果蜜饯', '坚果炒货', '蜜饯果干'],
            classNav: [
              {
                title: '坚果炒货',
                tags: ['每日坚果', '混合果仁', '开心果', '什锦果仁', '原香巴旦木', '碧根果']
              },
              {
                title: '蜜饯果干',
                tags: ['爽脆青梅', '蔓越莓干', '金萱番茄', '茶香金桔', '芒果干', '红杏干', '草莓干', '蓝莓果干', '黄桃干', '百香果干']
              }
            ]
          },
          {
            navTags: ['冲饮茗茶', '冲调饮品', '传统茗茶', '茶包花茶'],
            classNav: [
              {
                title: '冲调饮品',
                tags: ['每日坚果藜麦谷物燕麦片', '冻干银耳汤', '魔芋代餐粥', '红豆薏仁粉', '茯苓红枣阿胶粉', '西湖藕粉']
              },
              {
                title: '传统茗茶',
                tags: ['武夷大红袍礼盒', '玲珑柠红茶', '玲珑柑普茶', '诸事如意一壶一茶礼盒', '正山小种红茶', '江南四茗茶叶礼盒']
              }
            ]
          },
          {
            navTags: ['滋补保健', '滋补食材', '保健品'],
            classNav: [
              {
                title: '滋补食材',
                tags: ['洁净燕窝', '浓缩即食燕窝', '阿胶糕私享装', '即食燕窝', '鲜炖低糖燕窝', '黑芝麻丸', '胶原蛋白肽果味饮料']
              },
              {
                title: '保健品',
                tags: ['东阿阿胶片', '破壁灵芝孢子粉胶囊', '破壁灵芝孢子粉', '铁皮枫斗晶', '阿胶当归浆', '皇乳营养液']
              }
            ]
          },
          {
            navTags: ['酒水饮料', '酒类', '乳品饮料'],
            classNav: [
              {
                title: '酒类',
                tags: [ '茅台镇的酒', '半甜型黄酒', '泸州产 浓香窖酒', '青稞酒', '特型黄酒', '泸州产 浓香窖酒', '泸州产 浓香窖酒']
              },
              {
                title: '乳品饮料',
                tags: ['酸牛奶', '纯牛奶', '青梅绿茶康普茶饮料', '椰子水', '酸梅汤', '菊花雪梨茶']
              }
            ]
          },
          {
            navTags: ['粮油速食', '米面粮油', '方便食品'],
            classNav: [
              {
                title: '方便食品',
                tags: ['白果炖鸡汤', '麻辣方便火锅', '大丈夫冻干牛肉面', '北海道风味大虾面', '桂林鲜米粉', '螺蛳粉', '咸鸭蛋']
              },
              {
                title: '米面粮油',
                tags: ['祺宴 有机杂粮礼盒', '山茶油', '压榨葵花籽油', '五常有机稻花香米', '长粒香大米', '眷村酱面']
              }
            ]
          },
          {
            navTags: ['食材调味', '南北干货', '调味酱菜'],
            classNav: [
              {
                title: '南北干货',
                tags: ['广式汤料包', '姬松茸', '竹荪', '香菇', '楼兰灰枣', '桂圆干', '雪耳']
              },
              {
                title: '调味酱菜',
                tags: ['川味牛肉辣椒酱', '川味果蔬辣椒酱', '酸豆角']
              }
            ]
          },
          {
            navTags: ['生鲜特色', '果鲜肉蛋', '网易黑猪', '海外美食'],
            classNav: [
              {
                title: '果鲜肉蛋',
                tags: ['马来西亚猫山王榴莲', '板栗薯2.5KG', '熟醉蟹', '满满蟹粉', '河田飞鸡125日龄鸡块', '牛排家庭礼盒装']
              },
              {
                title: '网易黑猪',
                tags: ['网易味央黑猪肉黑卡',  '网易味央黑猪肉4份装提货卡', '网易味央黑猪肉 3份装提货卡 1050克']
              }
            ]
          },
          {
            navTags: ['粮油速食', '米面粮油', '方便食品'],
            classNav: [
              {
                title: '方便食品',
                tags: ['白果炖鸡汤', '麻辣方便火锅', '大丈夫冻干牛肉面', '北海道风味大虾面', '桂林鲜米粉', '螺蛳粉', '咸鸭蛋']
              },
              {
                title: '米面粮油',
                tags: ['祺宴 有机杂粮礼盒', '山茶油', '压榨葵花籽油', '五常有机稻花香米', '长粒香大米', '眷村酱面']
              }
            ]
          },
          {
            navTags: ['滋补保健', '滋补食材', '保健品'],
            classNav: [
              {
                title: '滋补食材',
                tags: ['洁净燕窝', '浓缩即食燕窝', '阿胶糕私享装', '即食燕窝', '鲜炖低糖燕窝', '黑芝麻丸', '胶原蛋白肽果味饮料']
              },
              {
                title: '保健品',
                tags: ['东阿阿胶片', '破壁灵芝孢子粉胶囊', '破壁灵芝孢子粉', '铁皮枫斗晶', '阿胶当归浆', '皇乳营养液']
              }
            ]
          },
          {
            navTags: ['坚果蜜饯', '坚果炒货', '蜜饯果干'],
            classNav: [
              {
                title: '坚果炒货',
                tags: ['每日坚果', '混合果仁', '开心果', '什锦果仁', '原香巴旦木', '碧根果']
              },
              {
                title: '蜜饯果干',
                tags: ['爽脆青梅', '蔓越莓干', '金萱番茄', '茶香金桔', '芒果干', '红杏干', '草莓干', '蓝莓果干', '黄桃干', '百香果干']
              }
            ]
          },
          {
            navTags: ['生鲜特色', '果鲜肉蛋', '网易黑猪', '海外美食'],
            classNav: [
              {
                title: '果鲜肉蛋',
                tags: ['马来西亚猫山王榴莲', '板栗薯2.5KG', '熟醉蟹', '满满蟹粉', '河田飞鸡125日龄鸡块', '牛排家庭礼盒装']
              },
              {
                title: '网易黑猪',
                tags: ['网易味央黑猪肉黑卡',  '网易味央黑猪肉4份装提货卡', '网易味央黑猪肉 3份装提货卡 1050克']
              }
            ]
          },
          {
            navTags: ['坚果蜜饯', '坚果炒货', '蜜饯果干'],
            classNav: [
              {
                title: '坚果炒货',
                tags: ['每日坚果', '混合果仁', '开心果', '什锦果仁', '原香巴旦木', '碧根果']
              },
              {
                title: '蜜饯果干',
                tags: ['爽脆青梅', '蔓越莓干', '金萱番茄', '茶香金桔', '芒果干', '红杏干', '草莓干', '蓝莓果干', '黄桃干', '百香果干']
              }
            ]
          }
        ]
      };
    },
    created() {
    },
    computed: {
      ...mapState(['marketing'])
    },
    methods: {
      showDetail(index) {
        this.actionNav = index;
      },
      hideDetail() {
        this.actionNav = 99;
      }
    },
    updated() {
      this.left = this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth;
      this.top = this.$refs.navSide.offsetTop;
    },
    store
  };
</script>

<style scoped>
  .nav-item {
    width: 680px;
    height: 36px;
    margin: 0px auto;
  }

  .nav-item ul {
    list-style: none;
    margin-left: 15px;
  }

  .nav-item li {
    float: left;
    font-size: 16px;
    font-weight: bold;

    margin-left: 30px;
  }

  .nav-item a {
    text-decoration: none;
    color: #555555;
  }

  .nav-item a:hover {
    color: #d9534f;
  }

  /*大的导航信息，包含导航，幻灯片等*/
  .nav-body {
    width: 1020px;
    height: 455px;
    margin: 0px auto;
  }

  .nav-side {
    width: 200px;
    height: 100%;
    padding: 0px;
    color: #fff;
    float: left;
    background-color: #6e6568;
  }

  .nav-side ul {
    width: 100%;
    padding: 0px;
    padding-top: 15px;
    list-style: none;
  }

  .nav-side li {
    padding: 7.5px;
    padding-left: 15px;
    font-size: 14px;
    line-height: 18px;
  }

  .nav-side li:hover {
    background: #999395;
  }

  .nav-side-item:hover {
    cursor: pointer;
    color: #c81623;
  }

  /*导航内容*/
  .nav-content {
    width: 792px;
    margin-left: 15px;
    overflow: hidden;
    float: left;
  }

  /*导航图片*/
  .nav-show-img {
    margin-top: 10px;
    float: left;
  }

  .nav-show-img:nth-child(2) {
    margin-left: 12px;
  }

  /*显示商品*/
  .content {
    width: 100%;
  }

  /*显示商品详细信息*/
  .detail-item-panel {
    width: 815px;
    height: 485px;
    background-color: #fff;
    position: absolute;
    top: 168px;
    left: 389px;
    z-index: 999;
  }

  .nav-detail-item {
    margin-left: 26px;
    margin-top: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    color: #eee;
  }

  .nav-detail-item span {
    padding: 6px;
    padding-left: 12px;
    margin-left: 15px;
    font-size: 12px;
    background-color: #6e6568;
  }

  .nav-detail-item span:hover {
    margin-left: 15px;
    background-color: #f44336;
  }

  .detail-item-panel ul {
    list-style: none;
  }

  .detail-item-panel li {
    line-height: 38px;
    margin-left: 40px;
  }

  .detail-item-title {
    padding-right: 6px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    color: #555555;
  }

  .detail-item-title:hover {
    color: #d9534f;
  }

  .detail-item-row a {
    color: #555555;
  }

  .detail-item {
    font-size: 14px;
    padding-left: 12px;
    padding-right: 8px;
    cursor: pointer;
    border-left: 1px solid #ccc;
  }

  .detail-item:hover {
    color: #d9534f;
  }
</style>
