(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/carsharing/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e92":function(t,e,n){},1198:function(t,e,n){},"16df":function(t,e,n){},"16e9":function(t,e,n){"use strict";n("16df")},"242f":function(t,e,n){},"274c":function(t,e,n){t.exports=n.p+"img/slide2.47ac8ca2.jpg"},"2fb4":function(t,e,n){},3680:function(t,e,n){"use strict";n("9ce9")},"3c64":function(t,e,n){t.exports=n.p+"e2bc04377b7db164bbf5159b02178996.avif"},"3c97":function(t,e,n){},"416c":function(t,e,n){},4489:function(t,e,n){t.exports=n.p+"5482db7553b20c67ae08f08f88728c91.avif"},4554:function(t,e,n){t.exports=n.p+"img/map.23a28bcc.jpg"},"4a5e":function(t,e,n){t.exports=n.p+"img/slide1.5f0a3429.jpg"},"4fff":function(t,e,n){"use strict";n("b027")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},i=[],r={name:"App"},c=r,o=n("2877"),l=Object(o["a"])(c,s,i,!1,null,null,null),u=l.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{link:t.link}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"page-left-side"},[n("base-sidebar"),n("div",{staticClass:"main-content main-content__wrapper"},[n("the-header"),n("main-content"),n("the-footer")],1)],1),n("div",{staticClass:"page-right-side"},[n("Slider",{attrs:{id:"slider",autoplay:!1}},t._l(t.list,(function(e,a){return n("SliderItem",{key:a},[n("div",{staticClass:"base-slider__info main-content__wrapper"},[n("span",{staticClass:"base-slider__info-service"},[t._v(t._s(e.service))]),n("span",{staticClass:"base-slider__info-slogan"},[t._v(t._s(e.slogan))]),n("div",[n("base-button",{staticClass:"base-slider__info_button",attrs:{theme:e.btnColor}},[t._v("Подробнее")])],1)]),n("picture",{staticClass:"slider-img"},[n("source",{attrs:{srcset:e.srcAvif,type:"image/avif"}}),n("img",{attrs:{src:e.src}})])])})),1)],1)])])},p=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"main-footer"},[n("section",{staticClass:"main-footer__section"},[n("div",{staticClass:"main-footer__copyright"},[t._v("© 2016-2019 «Need for drive»")]),n("div",{staticClass:"main-footer__telephone-link"},[n("base-link",[t._v("8 (495) 234-22-44")])],1)])])},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-link"},[n("a",{staticClass:"base-link__item-regular_blackBg",class:[t.setColor],attrs:{href:""}},[t._t("default")],2)])},b=[],g=(n("caad"),{name:"BaseLink",props:{fontColor:{type:String,validator:function(t){return["light-gray","main-green"].includes(t)},default:"light-gray"}},computed:{setColor:function(){return"base-link__item-regular_blackBg_fontColor-".concat(this.fontColor)}}}),h=g,C=(n("3680"),Object(o["a"])(h,v,b,!1,null,null,null)),k=C.exports,y={name:"MainFooter",components:{BaseLink:k}},x=y,j=(n("7279"),Object(o["a"])(x,_,m,!1,null,"1e76228a",null)),O=j.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"main-header"},[n("div",{staticClass:"main-header__info"},[t._m(0),n("div",{staticClass:"main-header__info-city"},[n("font-awesome-icon",{attrs:{icon:["fas","map-marker-alt"]}}),t._m(1)],1)])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-header__info-logo"},[n("span",[t._v("Need for drive")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("a",{attrs:{href:""}},[t._v("Ульяновск")])])}],E={},$=E,S=(n("5b6c"),Object(o["a"])($,w,B,!1,null,"2d9b0a7a",null)),A=S.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main-page"},[n("div",{staticClass:"main-page__info"},[n("span",{staticClass:"main-page__info-service"},[t._v("Каршеринг")]),n("span",{staticClass:"main-page__info-slogan"},[t._v("Need for drive")]),t._m(0),n("base-button",{attrs:{theme:"main-green",href:"/order/location"}},[t._v("Забронировать")])],1)])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-page__info-slogan_long"},[n("span",[t._v("Поминутная аренда авто твоего города")])])}],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.definedTag.tag,t._b({tag:"component",staticClass:"base-button",class:[t.getTheme]},"component",t.definedTag.atributes,!1),[t._t("default")],2)},P=[],I={name:"BaseButton",props:{theme:{type:String,validator:function(t){return["red","blue","dark-green","violet","main-green"].includes(t)},default:"main-green"},href:{type:String,default:""}},computed:{getTheme:function(){return"base-button_".concat(this.theme)},isDisabled:function(){return!this.term},definedTag:function(){return this.href?{tag:"router-link",atributes:{to:this.href}}:{tag:"button",atributes:{type:"button"}}}}},L=I,N=(n("e000"),Object(o["a"])(L,V,P,!1,null,null,null)),F=N.exports,H={components:{BaseButton:F},name:"MainContent"},J=H,R=(n("8210"),Object(o["a"])(J,M,T,!1,null,"0e57701d",null)),D=R.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-sidebar",class:[t.fullClass]},[n("burger-button",{nativeOn:{click:function(e){return t.classIsActive.apply(null,arguments)}}}),t.isVisible?n("burger-menu",{class:[t.visibleBurgerMenu]}):t._e(),n("lang-button")],1)},q=[],z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toggle-menu"},[n("input",{attrs:{type:"checkbox"}}),n("span"),n("span"),n("span")])}],K={name:"BurgerButton",components:{}},Q=K,U=(n("bd09"),Object(o["a"])(Q,z,G,!1,null,null,null)),X=U.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"burger-menu__background-none"},[n("ul",{staticClass:"toggle-menu__table"},t._l(t.items,(function(e){return n("li",{key:e.service,staticClass:"toggle-menu__table__item"},[n("a",{attrs:{href:""}},[t._v(" "+t._s(e.service)+" ")])])})),0),n("div",{staticClass:"toggle-menu__social-icon"},[n("social-icon",{attrs:{icon:"telegram"}}),n("social-icon",{attrs:{icon:"facebook"}}),n("social-icon",{attrs:{icon:"instagram"}})],1)])},Z=[],tt=[{src:n("4a5e"),srcAvif:n("4489"),slogan:"Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах",service:"Парковка",btnColor:"dark-green"},{src:n("274c"),srcAvif:n("3c64"),slogan:"Полная страховка страховка автомобиля",service:"Страховка",btnColor:"blue"},{src:n("ebc7"),srcAvif:n("89b8"),slogan:"Полный бак на любой заправке города за наш счёт",service:"Бензин",btnColor:"red"},{src:n("5f0c"),srcAvif:n("d57f"),slogan:"Автомобиль проходит еженедельное ТО",service:"Обслуживание",btnColor:"violet"}],et=[{model:"Elantra",price:"12 000 - 25 000",src:n("a8f2"),srcAvif:n("ab43")},{model:"Sonata",price:"10 000 - 32 000",src:n("6ab7"),srcAvif:n("99de")},{model:"i30 N",price:"10 000 - 32 000",src:n("88d1"),srcAvif:n("e10c")},{model:"Creta",price:"12 000 - 25 000",src:n("a85a"),srcAvif:n("92d1")},{model:"Elantra",price:"12 000 - 25 000",src:n("a8f2"),srcAvif:n("ab43")},{model:"Sonata",price:"10 000 - 32 000",src:n("6ab7"),srcAvif:n("99de")}],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"socialIcon"},[n("font-awesome-icon",{attrs:{icon:["fab",t.setSocialIcon]}})],1)},at=[],st={name:"SocialIcon",props:{icon:{type:String,validator:function(t){return["telegram","instagram","facebook"].includes(t)}}},computed:{setSocialIcon:function(){return this.icon}}},it=st,rt=(n("67b6"),Object(o["a"])(it,nt,at,!1,null,null,null)),ct=rt.exports,ot={name:"BurgerMenu",components:{SocialIcon:ct},data:function(){return{items:tt}}},lt=ot,ut=(n("bb03"),Object(o["a"])(lt,Y,Z,!1,null,null,null)),ft=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"lang-button",attrs:{type:"button"}},[t._v("Рус")])},pt=[],_t={name:"LangButton"},mt=_t,vt=(n("d7f8"),Object(o["a"])(mt,dt,pt,!1,null,null,null)),bt=vt.exports,gt={name:"BaseSidebar",components:{BurgerButton:X,BurgerMenu:ft,LangButton:bt},data:function(){return{isVisible:!1}},computed:{fullClass:function(){return this.isVisible?"base-sidebar_visible":" "},visibleBurgerMenu:function(){return this.isVisible?"burger-menu__background":" "}},methods:{classIsActive:function(){this.isVisible=!this.isVisible}}},ht=gt,Ct=(n("abe1"),Object(o["a"])(ht,W,q,!1,null,"110874ca",null)),kt=Ct.exports,yt={name:"MainViews",components:{BaseSidebar:kt,TheHeader:A,MainContent:D,TheFooter:O,BaseButton:F},data:function(){return{list:tt}},computed:{link:function(){return"/main"}}},xt=yt,jt=(n("c869"),Object(o["a"])(xt,d,p,!1,null,null,null)),Ot=jt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"page-full"},[n("base-sidebar"),n("div",{staticClass:"main-content"},[n("div",{staticClass:"main-content__wrapper"},[n("the-header")],1),n("nav",{staticClass:"order-panel"},[n("div",{staticClass:"order-panel__content main-content__wrapper_nonPaddingBot"},[n("div",{staticClass:"order-panel__content-item"},[n("router-link",{attrs:{to:"/order/location"}},[t._v("Местоположение")])],1),n("div",{staticClass:"order-panel__content-item"},[n("router-link",{attrs:{to:"/order/models"}},[t._v("Модель")])],1),t._m(0),t._m(1)])]),n("div",{staticClass:"main-content__wrapper_nonPaddingBot"},[n("div",{staticClass:"order-info"},[n("div",{staticClass:"order-info__option"},[n("router-view")],1),n("div",{staticClass:"order-info__results"},[n("div",{staticClass:"order-info__results-final-order"},[t._v("Ваш заказ:")]),t._m(2),t._m(3),n("div",{staticClass:"order-info__results-final-offer"},[n("base-button",{staticClass:"temporaryVisual fullWidth",attrs:{href:"/order/models"}},[t._v(" Выбрать модель ")])],1)])])])])],1)])])},Bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-panel__content-item"},[n("a",{attrs:{href:""}},[t._v("Дополнительно")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-panel__content-item"},[n("a",{attrs:{href:""}},[t._v("Итого")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-info__results-pick-point"},[n("div",{staticClass:"order-info__results-pick-point-item_1"},[t._v(" Пункт выдачи ")]),n("div",{staticClass:"order-info__results-pick-point-item_2"}),n("div",{staticClass:"order-info__results-pick-point-item_3"},[n("div",[t._v("Ульяновск")]),n("div",[t._v("Нариманова")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-info__results-final-price"},[n("span",[t._v("Цена:")]),t._v(" от 8 000 до 12 000 ₽ ")])}],Et={name:"OrderViews",components:{BaseSidebar:kt,TheHeader:A,BaseButton:F},computed:{link:function(){return"/order"}}},$t=Et,St=(n("4fff"),Object(o["a"])($t,wt,Bt,!1,null,"e91b8d6e",null)),At=St.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"order-check",attrs:{link:t.link}},[t._m(0),t._m(1),a("div",{staticClass:"order-check_right"})]),a("div",{staticClass:"order-info__option-map"},[a("div",{staticClass:"order-info__option-map-choose"},[t._v("Выбрать на карте:")]),a("div",{staticClass:"order-info__option-img"},[a("img",{attrs:{src:n("4554")}})])])])},Tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-check-title"},[n("div",{staticClass:"order-check-title-city"},[t._v("Город")]),n("div",{staticClass:"order-check-title-pick-point"},[t._v("Пункт выдачи")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-check-city"},[n("input",{staticClass:"order-check-city-handler",attrs:{type:"search",placeholder:"Начните вводить город выдачи"}}),n("input",{staticClass:"order-check-city-handler-pick",attrs:{type:"search",placeholder:"Начните вводить адрес пункта выдачи"}})])}],Vt={name:"OrderLocationViews",components:{},computed:{link:function(){return"location"}}},Pt=Vt,It=(n("16e9"),Object(o["a"])(Pt,Mt,Tt,!1,null,"2f9106b2",null)),Lt=It.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"order-models__navigation"},[n("base-radio-button",[t._v("Все модели")]),n("base-radio-button",[t._v("Эконом")]),n("base-radio-button",[t._v("Премиум")])],1),n("div",{staticClass:"order-models__wrapper"},[n("div",{staticClass:"order-models__item-wrapper"},t._l(t.lists,(function(e,a){return n("div",{key:a,staticClass:"order-models__item"},[n("div",{staticClass:"order-models__item-info"},[n("div",{staticClass:"order-models__item-info-model"},[t._v(" "+t._s(e.model)+" ")]),n("div",{staticClass:"order-models__item-info-price"},[t._v(" "+t._s(e.price)+" ")])]),n("div",{staticClass:"order-models__item-img"},[n("picture",{staticClass:"slider-img"},[n("source",{attrs:{srcset:e.srcAvif,type:"image/avif"}}),n("img",{attrs:{src:e.src}})])])])})),0)])])},Ft=[],Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"base-radio radio-styled"},[n("input",{staticClass:"base-radio__input",attrs:{type:"radio",name:"models"}}),n("span",{staticClass:"base-radio__button"}),t._t("default")],2)},Jt=[],Rt={name:"BaseRadioButton"},Dt=Rt,Wt=(n("fad6"),Object(o["a"])(Dt,Ht,Jt,!1,null,null,null)),qt=Wt.exports,zt={components:{BaseRadioButton:qt},name:"OrderModelsViews",data:function(){return{lists:et}}},Gt=zt,Kt=(n("5b6f"),Object(o["a"])(Gt,Nt,Ft,!1,null,"4f26f8c7",null)),Qt=Kt.exports;a["a"].use(f["a"]);var Ut=[{path:"/",name:"Main",component:Ot},{path:"/order",name:"Order",component:At,children:[{path:"location",component:Lt},{path:"models",component:Qt}]}],Xt=new f["a"]({mode:"history",base:"/carsharing/",routes:Ut}),Yt=Xt,Zt=n("2f62");a["a"].use(Zt["a"]);var te=new Zt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ee=(n("2fb4"),n("ecee")),ne=n("c074"),ae=n("ad3d"),se=n("f2d1"),ie=n("cd9a");ee["c"].add(ne["b"]),ee["c"].add(se["c"]),ee["c"].add(se["a"]),ee["c"].add(se["b"]),ee["c"].add(ne["a"]),a["a"].use(ie["a"]),a["a"].component("font-awesome-icon",ae["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Yt,store:te,render:function(t){return t(u)}}).$mount("#app")},"5b6c":function(t,e,n){"use strict";n("c561")},"5b6f":function(t,e,n){"use strict";n("0e92")},"5f0c":function(t,e,n){t.exports=n.p+"img/slide4.4f5091f3.jpg"},"63fc":function(t,e,n){},"67b6":function(t,e,n){"use strict";n("1198")},"699e":function(t,e,n){},"6ab7":function(t,e,n){t.exports=n.p+"img/car2.13911cc8.jpg"},7279:function(t,e,n){"use strict";n("416c")},8210:function(t,e,n){"use strict";n("63fc")},8321:function(t,e,n){},"88d1":function(t,e,n){t.exports=n.p+"img/car3.3c7f987d.jpg"},"89b8":function(t,e,n){t.exports=n.p+"7fc3ae5fdd9e2448925e3eb8daba3032.avif"},"92d1":function(t,e,n){t.exports=n.p+"14ce89e624055de75d9d351619c4cc1d.avif"},"99de":function(t,e,n){t.exports=n.p+"55dd4fddad6f5d7d8989a8001f8bb817.avif"},"9ce9":function(t,e,n){},"9ef1":function(t,e,n){},a85a:function(t,e,n){t.exports=n.p+"img/car4.7b8b91ef.jpg"},a8f2:function(t,e,n){t.exports=n.p+"img/car1.4e31c406.jpg"},ab43:function(t,e,n){t.exports=n.p+"e029a6c8b94570066bd5dfe406ce290f.avif"},abe1:function(t,e,n){"use strict";n("3c97")},b027:function(t,e,n){},b878:function(t,e,n){},bb03:function(t,e,n){"use strict";n("242f")},bd09:function(t,e,n){"use strict";n("699e")},c561:function(t,e,n){},c869:function(t,e,n){"use strict";n("da98")},d57f:function(t,e,n){t.exports=n.p+"362db2df28303f88669e57efae7e078c.avif"},d7f8:function(t,e,n){"use strict";n("8321")},da98:function(t,e,n){},e000:function(t,e,n){"use strict";n("9ef1")},e10c:function(t,e,n){t.exports=n.p+"1437eafa7bb14cbfc58332aaa3751961.avif"},ebc7:function(t,e,n){t.exports=n.p+"img/slide3.fbd40a17.jpg"},fad6:function(t,e,n){"use strict";n("b878")}});
//# sourceMappingURL=app.172b66f9.js.map