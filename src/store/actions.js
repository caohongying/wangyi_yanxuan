import {
  reqHomeData,
  reqCategoryData,
  reqOptimizeData
} from '../api';

import {GET_CATEGORY_DATA,GET_HOME_DATA,GET_OPTIMIZE_DATA} from './mutation-type';


export default {
  async getHomeData({commit},cb){
    const result=await reqHomeData();
    if(result.code===0){
      commit(GET_HOME_DATA,result.data)
    }
    cb&&cb()
  },
  async getOptimizeData({commit},cb){
    const result=await reqOptimizeData();
    if(result.code===0){
      commit(GET_OPTIMIZE_DATA,result.data)
    }
    cb&&cb()
  },
  async getCategoryData({commit},cb){
    const result=await reqCategoryData();
    if(result.code===0){
      commit(GET_CATEGORY_DATA,result.data)
    }
    cb&&cb()
  }
}
