export default {
    recommend: '/api/home/index/recom?token=1ec949a15fb709370f',
    login: '/api/home/user/pwdlogin?token=1ec949a15fb709370f',//登录
    swiperImgs: '/api/home/index/slide?token=1ec949a15fb709370f',//轮播
    fiveNavs: '/api/home/index/nav?token=1ec949a15fb709370f',//搜索
    reg: '/api/home/user/reg?token=1ec949a15fb709370f',//注册
    code: '/api/vcode/chkcode?token=1ec949a15fb709370f',//验证码
    userinfo:'api/user/myinfo/userinfo/uid/'+
    	localStorage.getItem('uid')+'?token=1ec949a15fb709370f',//用户信息
    out:'api/home/user/safeout?token=1ec949a15fb709370f',//退出
    recomGoods: '/api/home/index/goodsLevel?token=1ec949a15fb709370f', //首页标题推荐
    goodsLeft:'/api/home/category/menu?token=1ec949a15fb709370f',//分类左侧列表
    goodsRight:'/api/home/category/show?token=1ec949a15fb709370f',//分类右侧列表
}