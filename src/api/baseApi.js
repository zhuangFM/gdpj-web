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
    data: user
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
export const goodsList = (goodsName,orderBy, merchantId, pageSize, pageNum) => {
  let param = '';
  const page = pageSize || 1;
  const num = pageNum || 16;
  if (merchantId) param += `merchantId=${merchantId}&`;
  if (goodsName) param += `foodstuffName=${goodsName}&`;
  param += `currentPage=${page}&pageSize=${num}&orderBy=${orderBy}`;
  console.log(param);
  return http({
    url: `/api/foodstuff-module/get_foodstuff_by_name?${param}`,
    method: 'GET'
  });
};

// 查找商家商品
export const goodsListByOrigin = (origin,orderBy, merchantId, pageSize, pageNum) => {
  let param = '';
  const page = pageSize || 1;
  const num = pageNum || 16;
  console.log(param);
  return http({
    url: `/api/foodstuff-module/get_foodstuff_by_origin`,
    method: 'GET',
    params:{
      'origin':origin,
      'pageSize':num,
      'currentPage':page,
    },
  });
};


// 根据商品ID 查询商品
export const getOneGoods = (goodsId) => {
  return http({
    url: `/api/foodstuff-module/get_foodstuff_by_id`,
    method: 'get',
    params: {
      id: goodsId
    }
  });
};
