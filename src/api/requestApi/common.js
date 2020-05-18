import { get, post } from "../../libs/axios";
const common = {
  getproject(params){
    return get(`project/queryProjectByUid/${params}`);
  },//获取用户的所有项目
  deplist(params) {
    return post("/project/unit/getDepList", params);
  },//获取项目下的部门列表
};
export default common;
