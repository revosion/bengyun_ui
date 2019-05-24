import { stringify } from 'qs';
import request from '@/utils/request';
import { getToken } from '@/utils/authority';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    body: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  //return request('/api/fake_chart_data');
  return JSON.parse('{"visitData":[{"x":"2019-05-20","y":7},{"x":"2019-05-21","y":5},{"x":"2019-05-22","y":4},{"x":"2019-05-23","y":2},{"x":"2019-05-24","y":4},{"x":"2019-05-25","y":7},{"x":"2019-05-26","y":5},{"x":"2019-05-27","y":6},{"x":"2019-05-28","y":5},{"x":"2019-05-29","y":9},{"x":"2019-05-30","y":6},{"x":"2019-05-31","y":3},{"x":"2019-06-01","y":1},{"x":"2019-06-02","y":5},{"x":"2019-06-03","y":3},{"x":"2019-06-04","y":6},{"x":"2019-06-05","y":5}],"visitData2":[{"x":"2019-05-20","y":1},{"x":"2019-05-21","y":6},{"x":"2019-05-22","y":4},{"x":"2019-05-23","y":8},{"x":"2019-05-24","y":3},{"x":"2019-05-25","y":7},{"x":"2019-05-26","y":2}],"salesData":[{"x":"1月","y":380},{"x":"2月","y":1130},{"x":"3月","y":1172},{"x":"4月","y":905},{"x":"5月","y":852},{"x":"6月","y":533},{"x":"7月","y":1102},{"x":"8月","y":202},{"x":"9月","y":852},{"x":"10月","y":1001},{"x":"11月","y":1064},{"x":"12月","y":206}],"searchData":[{"index":1,"keyword":"搜索关键词-0","count":602,"range":49,"status":0},{"index":2,"keyword":"搜索关键词-1","count":447,"range":22,"status":0},{"index":3,"keyword":"搜索关键词-2","count":70,"range":53,"status":0},{"index":4,"keyword":"搜索关键词-3","count":601,"range":90,"status":1},{"index":5,"keyword":"搜索关键词-4","count":282,"range":46,"status":1},{"index":6,"keyword":"搜索关键词-5","count":976,"range":62,"status":1},{"index":7,"keyword":"搜索关键词-6","count":746,"range":56,"status":0},{"index":8,"keyword":"搜索关键词-7","count":892,"range":78,"status":0},{"index":9,"keyword":"搜索关键词-8","count":885,"range":79,"status":0},{"index":10,"keyword":"搜索关键词-9","count":1,"range":64,"status":0},{"index":11,"keyword":"搜索关键词-10","count":690,"range":21,"status":1},{"index":12,"keyword":"搜索关键词-11","count":434,"range":2,"status":1},{"index":13,"keyword":"搜索关键词-12","count":735,"range":45,"status":0},{"index":14,"keyword":"搜索关键词-13","count":588,"range":98,"status":0},{"index":15,"keyword":"搜索关键词-14","count":246,"range":82,"status":0},{"index":16,"keyword":"搜索关键词-15","count":392,"range":31,"status":1},{"index":17,"keyword":"搜索关键词-16","count":663,"range":21,"status":0},{"index":18,"keyword":"搜索关键词-17","count":420,"range":93,"status":1},{"index":19,"keyword":"搜索关键词-18","count":771,"range":29,"status":0},{"index":20,"keyword":"搜索关键词-19","count":687,"range":95,"status":0},{"index":21,"keyword":"搜索关键词-20","count":388,"range":37,"status":0},{"index":22,"keyword":"搜索关键词-21","count":757,"range":81,"status":0},{"index":23,"keyword":"搜索关键词-22","count":772,"range":25,"status":1},{"index":24,"keyword":"搜索关键词-23","count":832,"range":29,"status":1},{"index":25,"keyword":"搜索关键词-24","count":200,"range":41,"status":1},{"index":26,"keyword":"搜索关键词-25","count":343,"range":29,"status":0},{"index":27,"keyword":"搜索关键词-26","count":888,"range":62,"status":0},{"index":28,"keyword":"搜索关键词-27","count":704,"range":65,"status":0},{"index":29,"keyword":"搜索关键词-28","count":7,"range":74,"status":1},{"index":30,"keyword":"搜索关键词-29","count":733,"range":96,"status":1},{"index":31,"keyword":"搜索关键词-30","count":951,"range":4,"status":1},{"index":32,"keyword":"搜索关键词-31","count":791,"range":31,"status":1},{"index":33,"keyword":"搜索关键词-32","count":4,"range":0,"status":0},{"index":34,"keyword":"搜索关键词-33","count":852,"range":72,"status":1},{"index":35,"keyword":"搜索关键词-34","count":204,"range":32,"status":1},{"index":36,"keyword":"搜索关键词-35","count":245,"range":58,"status":1},{"index":37,"keyword":"搜索关键词-36","count":0,"range":16,"status":1},{"index":38,"keyword":"搜索关键词-37","count":868,"range":11,"status":1},{"index":39,"keyword":"搜索关键词-38","count":187,"range":84,"status":1},{"index":40,"keyword":"搜索关键词-39","count":787,"range":14,"status":1},{"index":41,"keyword":"搜索关键词-40","count":198,"range":80,"status":0},{"index":42,"keyword":"搜索关键词-41","count":512,"range":97,"status":1},{"index":43,"keyword":"搜索关键词-42","count":162,"range":61,"status":1},{"index":44,"keyword":"搜索关键词-43","count":297,"range":78,"status":1},{"index":45,"keyword":"搜索关键词-44","count":706,"range":34,"status":0},{"index":46,"keyword":"搜索关键词-45","count":436,"range":73,"status":0},{"index":47,"keyword":"搜索关键词-46","count":62,"range":65,"status":1},{"index":48,"keyword":"搜索关键词-47","count":551,"range":88,"status":0},{"index":49,"keyword":"搜索关键词-48","count":193,"range":75,"status":0},{"index":50,"keyword":"搜索关键词-49","count":200,"range":94,"status":1}],"offlineData":[{"name":"Stores 0","cvr":0.6},{"name":"Stores 1","cvr":0.6},{"name":"Stores 2","cvr":0.6},{"name":"Stores 3","cvr":0.1},{"name":"Stores 4","cvr":0.8},{"name":"Stores 5","cvr":0.2},{"name":"Stores 6","cvr":0.4},{"name":"Stores 7","cvr":0.2},{"name":"Stores 8","cvr":0.5},{"name":"Stores 9","cvr":0.2}],"offlineChartData":[{"x":1558393981316,"y1":32,"y2":42},{"x":1558395781316,"y1":89,"y2":102},{"x":1558397581316,"y1":63,"y2":15},{"x":1558399381316,"y1":16,"y2":41},{"x":1558401181316,"y1":59,"y2":56},{"x":1558402981316,"y1":94,"y2":96},{"x":1558404781316,"y1":90,"y2":17},{"x":1558406581316,"y1":23,"y2":26},{"x":1558408381316,"y1":94,"y2":100},{"x":1558410181316,"y1":70,"y2":26},{"x":1558411981316,"y1":14,"y2":73},{"x":1558413781316,"y1":82,"y2":95},{"x":1558415581316,"y1":26,"y2":57},{"x":1558417381316,"y1":44,"y2":48},{"x":1558419181316,"y1":67,"y2":63},{"x":1558420981316,"y1":14,"y2":37},{"x":1558422781316,"y1":107,"y2":96},{"x":1558424581316,"y1":67,"y2":38},{"x":1558426381316,"y1":98,"y2":62},{"x":1558428181316,"y1":78,"y2":42}],"salesTypeData":[{"x":"家用电器","y":4544},{"x":"食用酒水","y":3321},{"x":"个护健康","y":3113},{"x":"服饰箱包","y":2341},{"x":"母婴产品","y":1231},{"x":"其他","y":1231}],"salesTypeDataOnline":[{"x":"家用电器","y":244},{"x":"食用酒水","y":321},{"x":"个护健康","y":311},{"x":"服饰箱包","y":41},{"x":"母婴产品","y":121},{"x":"其他","y":111}],"salesTypeDataOffline":[{"x":"家用电器","y":99},{"x":"食用酒水","y":188},{"x":"个护健康","y":344},{"x":"服饰箱包","y":255},{"x":"其他","y":65}],"radarData":[{"name":"个人","label":"引用","value":10},{"name":"个人","label":"口碑","value":8},{"name":"个人","label":"产量","value":4},{"name":"个人","label":"贡献","value":5},{"name":"个人","label":"热度","value":7},{"name":"团队","label":"引用","value":3},{"name":"团队","label":"口碑","value":9},{"name":"团队","label":"产量","value":6},{"name":"团队","label":"贡献","value":3},{"name":"团队","label":"热度","value":1},{"name":"部门","label":"引用","value":4},{"name":"部门","label":"口碑","value":1},{"name":"部门","label":"产量","value":6},{"name":"部门","label":"贡献","value":5},{"name":"部门","label":"热度","value":7}]}');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile(id) {
  return request(`/api/profile/basic?id=${id}`);
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

export async function accountLogin(params) {
  return request('/tokens', {
    method: 'POST',
    body: params,
  });
}

export async function getThings() {
  const token = getToken();
  return request('/things', {
    headers: {
      Authorization: token,
    }
  });
}

export async function getChannels() {
  const token = getToken();
  return request('/channels', {
    headers: {
      Authorization: token,
    }
  });
}