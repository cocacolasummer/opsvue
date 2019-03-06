/**
 * 域名接口设置
 * @type {{basehostUrl: string}}
 */
let apiUrl = {
    demoHost:'http://apidemo.ryaims.com/',
    demoHostUrl: 'http://apidemo.ryaims.com/api/',
    opsHostUrl:'http://opsapi.ryaims.com/api/'
  };

  export default {
      //登录
      yzmimg:apiUrl.demoHost+'Home/VerifyCode',
      loginUrl:apiUrl.demoHostUrl+'Account/LoginForOPS'
  }