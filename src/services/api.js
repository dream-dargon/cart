export default {
<<<<<<< HEAD
    login: '/api/home/user/pwdlogin?token=1ec949a15fb709370f',
    swiperImgs: '/api/home/index/slide?token=1ec949a15fb709370f',
    fiveNavs: '/api/home/index/nav?token=1ec949a15fb709370f',
    reg: '/api/home/user/reg?token=1ec949a15fb709370f',
    code: '/api/vcode/chkcode?token=1ec949a15fb709370f',
    recommend: '/api/home/index/recom?token=1ec949a15fb709370f',
=======
    login: '/api/home/user/pwdlogin?token=1ec949a15fb709370f',//登录
    swiperImgs: '/api/home/index/slide?token=1ec949a15fb709370f',//轮播
    fiveNavs: '/api/home/index/nav?token=1ec949a15fb709370f',//搜索
    reg: '/api/home/user/reg?token=1ec949a15fb709370f',//注册
    code: '/api/vcode/chkcode?token=1ec949a15fb709370f',//验证码
    userinfo:'api/user/myinfo/userinfo/uid/'+
    localStorage.getItem('uid')+'?token=1ec949a15fb709370f',//用户信息
    out:'api/home/user/safeout?token=1ec949a15fb709370f',//退出
>>>>>>> origin/dev
    recomGoods: '/api/home/index/goodsLevel?token=1ec949a15fb709370f' //首页标题推荐
}