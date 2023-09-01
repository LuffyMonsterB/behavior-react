import mockjs from "mockjs";

export default {
  'GET /api/login': mockjs.mock({
    'token': '@guid'
  }),
};

