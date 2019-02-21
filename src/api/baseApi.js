import http from '@/utils/http';

export const login = (data) => {
  return http({
    url: '/api/base-module/login',
    method: 'POST',
    data: data
  });
};

export const signUp = (user) => {
  return http({
    url: '/api/base-module/register',
    method: 'POST',
    data: user,
  });
};

// 判断用户手机是否注册过
export const isExist = (phone) => {
  return http({
    url: '/api/base-module/checkPhoneExist',
    method: 'get',
    params: {
      phone: phone
    }
  });
};

// 查找商品
export const goodsList = (goodsName, merchantId, pageSize, pageNum) => {
  let param = '';
  const page = pageSize || 1;
  const num = pageNum || 16;
  if (merchantId) param += `merchantId=${merchantId}&`;
  if (goodsName) param += `goodsName=${goodsName}&`;
  param += `page=${page}&pageSize=${num}`;
  console.log(param);
  return http({
    url: `/uGoods_list?${param}`,
    method: 'POST'
  });
};

// 根据商品ID 查询商品
export const getOneGoods = (goodsId) => {
  return http({
    url: `/uGoods_one`,
    method: 'POST',
    data: {
      goodsId: goodsId
    }
  });
};
