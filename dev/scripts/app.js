/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const model={
    find(url){
      return fetch(url)
        .then(response=>response.json())
        .then(result=>{
            return result;  
        })
    }
}
module.exports=model;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div class=\"contain\"></div>"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<header class=\"head\">    <div class=\"head-top\">        <div class=\"head-top-left\">            <a href=\"#\">登录/注册</a>        </div>        <div class=\"head-top-right\">            <a href=\"#\">购物车（0）</a>        </div>    </div>    <table class=\"head-tab\">        <tr>            <td class=\"mobile-menu\">                <a href=\"#\" id=\"down-menu\">                    <span></span>                    <span></span>                    <span></span>                </a>            </td>            <td class=\"mobile-logo\">                <a href=\"#\">                    <img src=\"http://img.tadashishoji.cn/skin/frontend/tadashishoji/responsive_v1/img/logo_2016.png?v=1472699791\" />                </a>            </td>            <td class=\"mobile-search\">                <a href=\"#\">                    <span></span>                </a>            </td>        </tr>    </table></header>"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<main>    </main>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll-div\"><div class=\"header-down\">    <div class=\"res-menu\">        <ul>            <li>                <div id=\"index\">                    <a href=\"#\">                        <span>首页</span>                    </a>                </div>            </li>            <li>                <div class=\"inactive\">                    <a href=\"#\">                        <span>在线商城</span>                    </a>                </div>                <ul>                    <li>                        <div class=\"inactive\">                            <a href=\"#\">                                <span>新品上市</span>                            </a>                        </div>                        <ul>                            <li>                                <div class=\"subm first-subm\">                                    <a href=\"#\">                                        <span>女士</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>儿童</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>婚纱</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>配饰</span>                                    </a>                                </div>                            </li>                        </ul>                    </li>                    <li>                        <div class=\"inactive\">                            <a href=\"#\">                                <span>连衣裙</span>                            </a>                        </div>                        <ul>                            <li>                                <div class=\"subm first-subm\">                                    <a href=\"#\">                                        <span>晚礼服</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>小礼服</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>斗篷</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>小黑裙系列</span>                                    </a>                                </div>                            </li>                        </ul>                    </li>                    <li>                        <div class=\"inactive\">                            <a href=\"#\">                                <span>上装</span>                            </a>                        </div>                        <ul>                            <li>                                <div class=\"subm first-subm\">                                    <a href=\"#\">                                        <span>外套</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>上衣</span>                                    </a>                                </div>                            </li>                                            </ul>                    </li>                    <li>                        <div class=\"inactive\">                            <a href=\"#\">                                <span>下装</span>                            </a>                        </div>                        <ul>                            <li>                                <div class=\"subm first-subm\">                                    <a href=\"#\">                                        <span>半身裙</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>裤装</span>                                    </a>                                </div>                            </li>                                                    </ul>                    </li>                    <li>                        <div class=\"inactive\">                            <a href=\"#\">                                <span>童梦奇缘</span>                            </a>                        </div>                        <ul>                            <li>                                <div class=\"subm first-subm\">                                    <a href=\"#\">                                        <span>童装</span>                                    </a>                                </div>                            </li>                            <li>                                <div class=\"subm\">                                    <a href=\"#\">                                        <span>玩偶</span>                                    </a>                                </div>                            </li>                          </ul>                    </li>                    <li>                            <div class=\"inactive\">                                <a href=\"#\">                                    <span>婚礼</span>                                </a>                            </div>                            <ul>                                <li>                                    <div class=\"subm first-subm\">                                        <a href=\"#\">                                            <span>新娘礼服</span>                                        </a>                                    </div>                                </li>                                <li>                                    <div class=\"subm\">                                        <a href=\"#\">                                            <span>伴娘礼服</span>                                        </a>                                    </div>                                </li>                                <li>                                        <div class=\"subm\">                                            <a href=\"#\">                                                <span>亲友礼服</span>                                            </a>                                        </div>                                </li>                                <li>                                        <div class=\"subm\">                                            <a href=\"#\">                                                <span>花童礼服</span>                                            </a>                                        </div>                                </li>                              </ul>                        </li>                        <li>                                <div class=\"inactive\">                                    <a href=\"#\">                                        <span>配饰</span>                                    </a>                                </div>                                <ul>                                    <li>                                        <div class=\"subm first-subm\">                                            <a href=\"#\">                                                <span>手袋</span>                                            </a>                                        </div>                                    </li>                                    <li>                                        <div class=\"subm\">                                            <a href=\"#\">                                                <span>手包</span>                                            </a>                                        </div>                                    </li>                                    <li>                                            <div class=\"subm\">                                                <a href=\"#\">                                                    <span>饰品</span>                                                </a>                                            </div>                                    </li>                                    <li>                                            <div class=\"subm\">                                                <a href=\"#\">                                                    <span>丝巾</span>                                                </a>                                            </div>                                    </li>                                    <li>                                            <div class=\"subm\">                                                <a href=\"#\">                                                    <span>太阳镜</span>                                                </a>                                            </div>                                    </li>                                    <li>                                            <div class=\"subm\">                                                <a href=\"#\">                                                    <span>香氛</span>                                                </a>                                            </div>                                    </li>                                  </ul>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>套装</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>经典款</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>亲子款</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>母女款</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>2018春夏系列</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>2018早春新品</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>2017秋冬系列</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>2017早秋系列</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>2017包袋系列</span>                                        </a>                                    </div>                            </li>                            <li>                                    <div>                                        <a href=\"#\">                                            <span>全部商品</span>                                        </a>                                    </div>                            </li>                </ul>            </li>            <li>                <div>                    <a href=\"#\">                        <span>尊享定制</span>                    </a>                </div>            </li>            <li>                <div>                    <a href=\"#\">                        <span>婚纱礼服</span>                    </a>                </div>            </li>            <li>                <div class=\"inactive\">                    <a href=\"#\">                        <span>TADASHI SHOJI 世界</span>                    </a>                </div>                <ul>                    <li>                        <div>                            <a href=\"#\">                                <span>品牌故事</span>                            </a>                        </div>                </li>                <li>                        <div>                            <a href=\"#\">                                <span>品牌动态</span>                            </a>                        </div>                </li>                <li>                        <div>                            <a href=\"#\">                                <span>精品动态</span>                            </a>                        </div>                </li>                </ul>            </li>            <li>                <div>                    <a href=\"#\">                        <span>明星演绎</span>                    </a>                </div>            </li>            <li>                <div class=\"inactive\">                    <a href=\"#\">                        <span>风尚秀场</span>                    </a>                </div>                <ul>                    <li>                        <div>                            <a href=\"#\">                                <span>2018秋冬</span>                            </a>                        </div>                    </li>                    <li>                        <div>                            <a href=\"#\">                                <span>2018早秋</span>                            </a>                        </div>                    </li>                    <li>                        <div>                            <a href=\"#\">                                <span>2018春夏</span>                            </a>                        </div>                    </li>                    <li>                        <div>                            <a href=\"#\">                                <span>2018早春</span>                            </a>                        </div>                    </li>                </ul>            </li>        </ul>    </div></div>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">    <div class=\"footer-service\">        <div class=\"footer-online\">客服热线</div>        <div class=\"footer-number\">4001-666-299</div>        <div class=\"footer-time\">(周一至周日9:00-21:00)</div>        <a href=\"#\" class=\"free-fixed\">免费修改衣长</a>        <div class=\"footer-list\">            <div class=\"footer-item\">关于我们</div>        </div>        <div class=\"footer-list\">            <div class=\"footer-item\">新手上路</div>        </div>        <div class=\"footer-list\">            <div class=\"footer-item\">支付配送</div>        </div>        <div class=\"footer-list\">            <div class=\"footer-item\">订单及售后</div>        </div>        <div class=\"footer-msg\">            <div class=\"footer-zx\">第一时间获取最新资讯</div>            <form>                <div class=\"form-div\">                    <input type=\"text\" class=\"form-div-input\" placeholder=\"请输入邮箱地址\"/>                    <span class=\"empty-span\"></span>                    <span class=\"input-span-btn\">邮件订阅</span>                </div>            </form>            <div class=\"footer-copy\">                <span class=\"copy-text\">© 2017 TADASHI SHOJI. ALL RIGHTS RESERVED</span>                <span class=\"copy-text\">TADASHISHOJI.COM</span>                <span class=\"copy-text\"><a href=\"#\">沪公网安备 31010502002888号</a></span>                <span class=\"copy-text\">沪ICP备14002310号-4</span>            </div>        </div>    </div></div></div>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

const actionController={
    headAction(){
        $('#down-menu').on('click',function(){
            $('.header-down').toggle();
        });
        $(".inactive").on('click',function(){
            $(this)
            .toggleClass("inactive")
            .toggleClass("nowactive")
            .next()
            .toggle();
            $(this)
            .parent()
            .siblings()
            .find(".nowactive")
            .attr("class","inactive");
            $(this)
            .parent()
            .siblings()
            .find("ul")
            .css("display","none");
           
        });
        
    },
    routeAction(){
        const pagelist=['tadashi.html','list.html','detail.html','shopCar.html'];
        $("#online-shop").on('click',function(){
            location.href=pagelist[1];
        });
        $("#index").on('click',function(){
            location.href=pagelist[0];
        })
        $('.more').on('click',function(){
            location.href=pagelist[1];
        })
        $('.pro-li').on('click',function(){
            location.href=pagelist[2]+`?id=${$(this).attr("data-id")}`;
        })
        $('.add-car-btn').on('click',function(){
            var val=storage.get("detail");
            if(!val){
                storage.set("detail",[{'id':$(this).attr("data-id"),'num':1}]);
            }else{
                var falg=false;
                val.forEach((item,index)=>{
                   if(item['id']==$(this).attr("data-id")){
                       val[index]['num']=item['num']+1;
                       storage.replace("detail",val);
                       falg=true;
                       return;
                   }
                });
                if(!falg){
                    val.push({'id':$(this).attr("data-id"),'num':1});
                    storage.replace("detail",val);
                }
            }
            location.href=pagelist[3];
        })
    }
}
module.exports=actionController;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "{{each list}}    <li class=\"pro-li\" data-id=\"{{$value.id}}\">        <a href=\"#\">            <img src=\"{{$value.list_img}}\" />        </a>            <div class=\"home-name\">{{$value.name}}</div>            <div class=\"home-price\">{{$value.price}}</div>    </li>{{/each}}"

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_list__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__models_list__);

const scroll=__webpack_require__(9);
const render_listTpl=__webpack_require__(7);
const listController={
    async render(){
        let data=await __WEBPACK_IMPORTED_MODULE_0__models_list___default.a.find('/api/list');
        let html=template.render(render_listTpl,data);
        $('#render').html(html); 
        scroll();  
    }
}
/* harmony default export */ __webpack_exports__["a"] = (listController);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const model=__webpack_require__(0);
const render_listTpl=__webpack_require__(7);
module.exports=function(){
    let listScroll=new IScroll('main',{
        probeType:3,
        mouseWheel: true  
    });
    listScroll.on('scroll',async function(){
        if(this.y<this.maxScrollY+500){
        $('.down-refresh').show();
        let data=await model.find('/api/list');
        let html=template.render(render_listTpl,data);
        $('#render').prepend(html);
        this.refresh();
        $('.down-refresh').hide();
        }
    });

}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_controllers_index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_controllers_list__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_controllers_action__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_controllers_action___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scripts_controllers_action__);
const indexTpl=__webpack_require__(1);
const headerTpl=__webpack_require__(2);
const mainTpl=__webpack_require__(3);
const header_downTpl=__webpack_require__(4);
const navTpl=__webpack_require__(11);
const bannerTpl=__webpack_require__(12);
const contentTpl=__webpack_require__(13);
const footerTpl=__webpack_require__(5);



$('#root').html(indexTpl);
$('.contain').html(headerTpl+mainTpl);
$('main').html(header_downTpl+navTpl+bannerTpl+contentTpl+footerTpl);
__WEBPACK_IMPORTED_MODULE_0__scripts_controllers_index__["a" /* default */].render();
__WEBPACK_IMPORTED_MODULE_2__scripts_controllers_action___default.a.headAction();
__WEBPACK_IMPORTED_MODULE_2__scripts_controllers_action___default.a.routeAction();


;


// const router = new Router();
// router.route('/index', indexController.render)
// router.route('/list', listController.render)
// router.init()



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"home-menu\">    <div class=\"box-nav\">        <div class=\"home-menu-item\">            <div class=\"home-menu-text\" id=\"online-shop\">                <a href=\"#\">在线商城</a>            </div>            <div class=\"item-line\"></div>        </div>        <div class=\"home-menu-item\">            <div class=\"home-menu-text\">                <a href=\"#\">风尚秀场</a>            </div>            <div class=\"item-line\"></div>        </div>        <div class=\"home-menu-item\">            <div class=\"home-menu-text\">                <a href=\"#\">塔达希世界</a>            </div>        </div>        </div></nav>"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner swiper-container\">    <div class=\"banner-img swiper-wrapper\">        <div class=\"banner-img-item swiper-slide\">            <a href=\"#\">                <img src=\"http://www.tadashishoji.cn/media/magentothem/banner7/61818b_CAROUSEL_MOBILE.jpg\" />            </a>        </div>        <div class=\"banner-img-item swiper-slide\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/banner7/MYTS_CAROUSEL_MOBILE.jpg\" />                </a>        </div>        <div class=\"banner-img-item swiper-slide\">                    <a href=\"#\">                        <img src=\"http://www.tadashishoji.cn/media/magentothem/banner7/SS18NA_CAROUSEL_MOBILE.jpg\" />                    </a>        </div>        <div class=\"banner-img-item swiper-slide\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/banner7/TSKIDSRW18_CAROUSEL_MOBILE.jpg\" />                </a>        </div>        <div class=\"banner-img-item swiper-slide\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/banner7/NH17_CAROUSEL_MOBILE-1.jpg\" />                </a>        </div>        <div class=\"banner-img-item swiper-slide\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/banner7/BSS18NA_CAROUSEL_MOBILE.jpg\" />                </a>        </div>    </div>    <div class=\"swiper-pagination\"></div>    <!-- <div class=\"banner-page\">        <span class=\"banner-page-active\"></span>        <span></span>        <span></span>        <span></span>        <span></span>        <span></span>    </div> --></div>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">    <div class=\"row\">        <div class=\"row-col-1\">            <div class=\"home-block\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20170922_1.jpg\" />                </a>            </div>            <div class=\"home-block\" style=\"padding-right: 10%;\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20170922_3.jpg\" />                </a>            </div>        </div>        <div class=\"row-col-1\">            <div class=\"home-block\" style=\"padding-left: 10%;padding-top: .30rem;\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20170922_2.jpg\" />                </a>            </div>            <div class=\"home-block\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20170922_4.jpg\" />                </a>            </div>        </div>    </div>    <div class=\"row\">        <div class=\"row-col-1\">            <div class=\"home-block\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20170922_5.jpg\" />                </a>            </div>            <div class=\"home-block\" style=\"margin-top: .10rem;\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20170922_7.jpg\" />                </a>            </div>        </div>        <div class=\"row-col-1\">            <div class=\"home-block\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20170922_6.jpg\" />                </a>            </div>            <div class=\"home-block\" style=\"margin-top: .10rem;\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20170922_8.jpg\" />                </a>            </div>        </div>    </div>    <div class=\"row\">        <div class=\"row-col-2\">            <div class=\"home-block\">                <div class=\"home-title-en\">Fashion show</div>                <div class=\"home-title-cn\">风尚秀场</div>                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20180329_6-4-1.jpg\" />                </a>            </div>        </div>    </div>    <div class=\"row\">        <div class=\"row-col-1\">            <div class=\"home-block\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20180329_6-5-1.jpg\" />                </a>            </div>        </div>        <div class=\"row-col-1\">            <div class=\"home-block\">                <a href=\"#\">                    <img src=\"http://www.tadashishoji.cn/media/magentothem/homepage/weixin_20180329_6-6-1.jpg\" />                </a>            </div>        </div>    </div>    <div class=\"row\">        <div class=\"row-col-2\">            <div class=\"home-block\">                <div class=\"home-title-en\">HOT SALE</div>                <div class=\"home-title-cn\">最热单品</div>                <ul id=\"hot-render\">                </ul>            </div>        </div>    </div>    <div class=\"more\">        <a href=\"#\">查看所有商品</a>    </div></div>"

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_list__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__models_list__);

const renderTpl=__webpack_require__(15);
const indexController={
    async render(){
            let data=await __WEBPACK_IMPORTED_MODULE_0__models_list___default.a.find('/api/index');
            let html=template.render(renderTpl,data);
            $('#hot-render').html(html);    
    }
}
/* harmony default export */ __webpack_exports__["a"] = (indexController);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "{{each list}}    <li>        <a href=\"#\">            <img src=\"{{$value.index_img}}\" />        </a>            <div class=\"home-name\">{{$value.name}}</div>            <div class=\"home-price\">{{$value.price}}</div>    </li>{{/each}}"

/***/ })
/******/ ]);