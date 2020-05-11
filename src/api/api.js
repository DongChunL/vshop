/*包含N个接口请求函数的模块
* 函数返回值promise
* */
//暴露多个不用default
import ajax from './ajax'
// 1、根据经纬度获取位置详情<br/>
/*因为router路由器采用的是path，所以query(get参数格式；如果用name，就用params（post格式*/
export const reqAddress = (geohash) =>ajax(`/position/${geohash}`);

// 2、获取食品分类列表<br/>
export const reqFoodTypes = () =>ajax('/index_category')
// 3、根据经纬度获取商铺列表<br/>
export const reqShops = (longitude,latitude) =>ajax('/shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表<br/>

// 5、获取一次性验证码<br/>
// 6、用户名密码登陆<br/>
// 7、发送短信验证码<br/>
// 8、手机号验证码登陆<br/>
// 9、根据会话获取用户信息<br/>
// 10、用户登出<br/>
