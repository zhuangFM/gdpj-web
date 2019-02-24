import * as baseApi from '@/api/baseApi';
import * as userApi from '@/api/userApi';
// 判断手机是否存在
export const isExist = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    baseApi.isExist(data).then(res => {
      const data = res.data;
      const result = {isExist: data.isExist};
      if (!data.isExist) {
        const checkNum = Math.floor(Math.random() * 9000 + 1000);
        commit('SET_CHECK_NUM', checkNum);
        result.checkNum = checkNum;
      }
      resolve(result);
    });
  });
};

// 注册
export const signUp = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    baseApi.signUp(data).then(res => {
      if (res.data.code === 1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

// 登陆
export const login = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    baseApi.login(data).then(res => {
      const data = res.data;
      if (data.code === 1) {
        commit('SET_USER_LOGIN_INFO', data.user);
        resolve(true);
      } else {
        resolve(false);
      }
    }).catch(error => {
      reject(error);
    });
  });
};

// 判断登陆有没有过期
export const isExp = () => {
  return new Promise((resolve, reject) => {
    let info = localStorage.getItem('info');
    if (!info) {
      resolve(false);
      return;
    }
    info = JSON.parse(info);
    const now = new Date().getTime();
    if (info.exp > now) {
      resolve(true);
      return;
    }
    resolve(false);
  });
};

// 获取秒杀数据
export const loadSeckillsInfo = ({commit}) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '柔风黄油曲奇',
        img: 'static/img/index/seckill/1.jpg',
        price: 98.0,
        realPrice: 121.0
      },
      {
        intro: '绿茶蛋黄酥 50克*4枚',
        img: 'static/img/index/seckill/2.jpg',
        price: 28.0,
        realPrice: 38.0
      },
      {
        intro: '奶油鸡蛋卷 150克（5袋入）',
        img: 'static/img/index/seckill/3.jpg',
        price: 17.1,
        realPrice: 19.8
      },
      {
        intro: '炭火烤肠 150克',
        img: 'static/img/index/seckill/4.jpg',
        price:18.0,
        realPrice: 26.0
      },
      {
        intro: '半甜型黄酒 720毫升',
        img: 'static/img/index/seckill/5.jpg',
        price: 589.9,
        realPrice: 759.9
      }
    ];
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log([hours, minute, seconds]);
    // 距离开始秒杀时间
    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    };
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({commit}) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/n1.jpg',
        'static/img/nav/n2.jpg',
        'static/img/nav/n3.jpg',
        // 'static/img/nav/4.jpg',
        // 'static/img/nav/5.jpg'
      ],
      activity: [
        'static/img/nav/nav_showimg-n1.jpg',
        'static/img/nav/nav_showimg-n2.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载电脑专栏数据
export const loadComputer = ({commit}) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '全球工厂店',
      link: ['考拉工厂店', '日本美食', '美国美食', '意大利美食', '东南亚美食'],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemFour: [
            {
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemFour: [
            {
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({commit}) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '爱吃',
      link: ['休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃'],
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({commit}, data) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    baseApi.getOneGoods(data).then(res => {
      console.log(res.data);
      commit('SET_GOODS_DETAIL', res.data.foodstuff);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({commit}, data) => {
  const item = {
    uid: data.uid,
    foodstuffId: data.goods_id,
    merchantId: data.merchant_id,
    // attrId: data.package.id,
    amount: data.count,
    // img: data.package.attrImgUrl,
    // attrTitle: data.package.attrTitle,
    // price: data.package.attrPrice,
    title: data.title,
    // goodsCode: data.package.goodsCode
  };
  return new Promise((resolve, reject) => {
    userApi.addShoppingCart(item).then(res => {
      if (res.data.code === 1) {
        commit('ADD_SHOPPING_CART', res.data.result);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

// 获取用户推荐
export const loadRecommend = ({commit}) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: '绿茶蛋黄酥 50克*4枚',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '黄山烧饼 21克*8枚',
          price: 12.80
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '绿豆糕 240克（12枚入）',
          price: 26.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: '芝心寿司 90克',
          price: 15.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '和风鱿鱼卷 90克',
          price: 7.90
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: '黑芝麻酥 158克',
          price: 14.90
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '手工巧克力',
          price: 288.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: '猪肉脯 150克',
          price: 26.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

// 加载收货地址
export const loadAddress = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    console.log("get user address where uid is " + data);
    userApi.getAddressList(data).then(res => {
      if (res.data.code === 1) {
        commit('SET_USER_ADDRESS', res.data.addressList);
      }
    });
  });
};

// 删除收货地址
export const delAddress = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    userApi.delAddress(data).then(res => {
      if (res.data.code === 1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

// 修改收货地址
export const editAddress = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    userApi.editAddress(data).then(res => {
      if (res.data.code === 1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

// 加载购物车
export const loadShoppingCart = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    userApi.getShoppingCart(data).then(res => {
      console.log(res.data);
      commit('SET_SHOPPING_CART', res.data.list);
    });
  });
};

// 添加收货地址
export const addAddress = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    userApi.addAddress(data).then(res => {
      if (res.data.code === 1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

// 按标签获取商品
export const getGoodsByName = ({commit}, data) => {
  commit('SET_LOAD_STATUS', true);
  console.log(data);
  return new Promise((resolve, reject) => {
    baseApi.goodsList(data.foodstuffName, data.orderBy).then(res => {
      console.log(res);
      commit('SET_GOODS_INFO_BY_NAME', res.data.foodstuffList.list);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 获取商家的商品
export const getGoodsByMerchantId = ({commit}, data) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    baseApi.goodsListByOrigin(data).then(res => {
      console.log(res);
      commit('SET_GOODS_INFO_BY_MERCHANT_ID', res.data.foodstuffList.list);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 生成订单
export const addOrder = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    userApi.addOrder(data).then(res => {
      if (res.data.code === 1) {
        resolve({'result': true, 'data': res.data.result});
      } else {
        resolve({'result': false});
      }
    });
  });
};
//保存订单详情
export const addOrderDetail = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    userApi.addOrderDetail(data).then(res => {
      console.log(res);
      if (res.data.code === 1) {
        resolve({'result': true, 'scdIdArr':res.data.shoppingCartDetailIdList});
        commit('REMOVE_SHOPPING_CART', res.data.shoppingCartDetailIdList);
      } else {
        resolve({'result': false});
      }
    });
  });
};

//删除购物车对应商品
export const deleteShoppingCartDetail = ({commit}, data) => {
  return new Promise((resolve, reject) => {
    userApi.deleteShoppingCartDetail(data).then(res => {
      if (res.data.code === 1) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

// 获取订单
export const getOrder = ({commit},data) => {
  return new Promise((resolve, reject) => {
    userApi.getOrder(data).then(res => {
      if (res.data.code === 1) {
        commit('SET_USER_ORDER_INFO', res.data.transactionOrderInfoList);
        console.log(res.data);
      }
    });
  });
};
