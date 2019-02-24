import http from '@/utils/http';

const post = (data) => {
  const info = JSON.parse(localStorage.getItem('info'));
  data.method = 'POST';
  data.headers = { 'x-access-token': info.data.token };
  return http(data);
};

// 添加收货地址
export const addAddress = (data) => {
  return post({
    url: '/api/shopping-cart-module/save_address',
    data: data
  });
};

// 获取收货地址
export const getAddressList = (uid) => {
  return http({
    url: '/api/shopping-cart-module/get_address_list_by_uid',
    method: 'get',
    params: {
      uid: uid
    }
  });
};

// 删除地址
export const delAddress = (data) => {
  return http({
    url: '/api/shopping-cart-module/delete_address_by_id',
    method: 'get',
    params: {
      id: data
    }
  });
};

// 修改地址
export const editAddress = (data) => {
  return post({
    url: '/api/shopping-cart-module/save_address',
    data: data
  });
};

// 添加购物车
export const addShoppingCart = (data) => {
  return post({
    url: '/api/shopping-cart-module/save_shopping_cart_detail',
    data: data
  });
};

// 获取购物车信息
export const getShoppingCart = (data) => {
  return http({
    url: '/api/shopping-cart-module/get_shopping_cart_detail_info_list_by_uid',
    method: 'get',
    params: {
      uid: data
    }
  });
};

// 生成订单
export const addOrder = (data) => {
  return post({
    url: '/api/transaction-module/save_transaction_order',
    data: data
  });
};

// 保存订单详情
export const addOrderDetail = (data) => {
  return post({
    url: '/api/transaction-module/save_transaction_order_detail',
    data: data
  });
};

// 删除购物车对应商品
export const deleteShoppingCartDetail = (data) => {
  return post({
    url: '/api/shopping-cart-module/delete_shopping_cart_detail_by_id',
    data: data
  });
};

// 获取订单
export const getOrder = (data) => {
  return http({
    url: '/api/transaction-module/get_transaction_order_info_list_by_buyer_id',
    method: 'get',
    params: {
      buyerId: data
    }
  });
};
