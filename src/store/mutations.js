import {GET_CATEGORY_DATA,GET_HOME_DATA,GET_OPTIMIZE_DATA} from './mutation-type';
export default {
  [GET_HOME_DATA](state,home_data){
    state.home_data=home_data
  },
  [GET_OPTIMIZE_DATA](state,optimize_data){
    state.optimize_data=optimize_data
  },
  [GET_CATEGORY_DATA](state,category_data){
    state.category_data=category_data.categoryL1List
  }
}
