/*
 * @Author: Gavin
 * @Date: 2018-06-11 11:27:10
 * @Last Modified by: Gavin
 * @Last Modified time: 2018-06-11 12:23:40
 * @Describe: 搜索商品导航标签
 */
<template>
  <div class="item-class-show">
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ items.tagName }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '品牌',
          tags: [ '三只松鼠', '百草味', '雀巢', '徐福记', '费列罗', '康师傅', '寿桃牌', '双汇', '港荣', '蒙牛', '伊利' ]
        },
        {
          tagName: '热卖食品',
          tags: [ '猪肉脯', '薯片', '芒果干', '巧克力', '奶粉', '速溶咖啡', '早餐面包' ]
        },
        {
          tagName: '配送地区',
          tags: [ '香港', '北京', '上海', '广州', '深圳', '成都', '杭州', '厦门', '东莞', '其他' ]
        },
        {
          tagName: '规格',
          tags: [ '整箱', '整包', '散装', '称重', ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid #ccc;
}
.item-class-group:first-child {
  border-top: 1px solid #ccc;
}
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: #666;
  font-weight: bold;
  background-color: #f3f3f3;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #005aa0;
  line-height: 45px;
  cursor: pointer;
}
</style>
