export default {
<<<<<<< HEAD
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
    hotSearch: '/api/home/public/hotwords?token=1ec949a15fb709370f', //热门搜索
    searchKeyGoods: '/api/home/goods/param?kwords='+
        localStorage.getItem('keys')+'&token=1ec949a15fb709370f',//搜索关键词
    goodsLeft:'/api/home/category/menu?token=1ec949a15fb709370f',//分类左侧列表
    goodsRight:'/api/home/category/show?token=1ec949a15fb709370f',//分类右侧列表
=======
    login: '/api/home/user/pwdlogin?token=1ec949a15fb709370f',
    swiperImgs: '/api/home/index/slide?token=1ec949a15fb709370f',
    fiveNavs: '/api/home/index/nav?token=1ec949a15fb709370f',
    reg: '/api/home/user/reg?token=1ec949a15fb709370f',
    code: '/api/vcode/chkcode?token=1ec949a15fb709370f',
    recomGoods: '/api/home/index/goodsLevel?token=1ec949a15fb709370f', //首页标题推荐
    detailsOne: 'api/home/goods/info?type=details&token=1ec949a15fb709370f',
    detailsThrpage: 'api/home/reviews/index?token=1ec949a15fb709370f', //第一页评价
    detailsThrpages: 'api/home/reviews/index?token=1ec949a15fb709370f&pageFrom=goods_classify', //所有评价
>>>>>>> fff
}