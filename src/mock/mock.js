import Mock from 'mockjs';
import home_data from './home_data.json'
import optimize_data from './optimize_data.json'
import category_data from './category_data.json'
Mock.mock('/home_data',{
  code:0,data:home_data
});
Mock.mock('/optimize_data',{
  code:0,data:optimize_data
});
Mock.mock('/category_data',{
  code:0,data:category_data
});
