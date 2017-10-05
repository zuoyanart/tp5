define('site/home/pages/index.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _componentsSwiperBigimgSwiperVue = require('site/home/components/swiper-bigimg/swiper.vue');
  
  var _componentsSwiperBigimgSwiperVue2 = _interopRequireDefault(_componentsSwiperBigimgSwiperVue);
  
  var _componentsBaseBlockBlockVue = require('site/home/components/base-block/block.vue');
  
  var _componentsBaseBlockBlockVue2 = _interopRequireDefault(_componentsBaseBlockBlockVue);
  
  exports['default'] = {
    data: function data() {
      return {
        swiperData: {
          nodeid: 3,
          mp: 5
        }
      };
    },
    methods: {},
    components: {
      'swiper-bigimg': _componentsSwiperBigimgSwiperVue2['default'],
      'base-block': _componentsBaseBlockBlockVue2['default']
    },
    mounted: function mounted() {
      window.map = new BMap.Map("addr");
      var point = new BMap.Point(113.680576, 34.762719);
      map.centerAndZoom(point, 15);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      var top_left_control = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_TOP_LEFT
      }); // 左上角，添加比例尺
      var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
      var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
      }); //右上角
  
      map.addControl(top_left_control);
      map.addControl(top_left_navigation);
      map.addControl(top_right_navigation);
      map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
      map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
    }
  };
  module.exports = exports['default'];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\r\n\r\n<div class=\"\">\r\n    <swiper-bigimg :page=\"swiperData\"  cls=\"swiep-item1\"></swiper-bigimg>\r\n    <div class=\"item-gap\">\r\n          <h2>Services</h2>\r\n          <p>OUR FULL SERVICES RPOJECT</p>\r\n    </div>\r\n    <div class=\"index-service-item\">\r\n          <div class=\"index-service-item-sub\">\r\n              <i class=\"zyitfont zyit-pingtai\"></i>\r\n              <h2>网站应用产品解决方案</h2>\r\n              <p>企业宣传 / 电商平台 / 分销系统 / 视觉设计 / HTML5开发 / 定制化平台</p>\r\n          </div>\r\n          <div class=\"index-service-item-sub\">\r\n            <i class=\"zyitfont zyit-phone\"></i>\r\n            <h2>微信应用产品解决方案</h2>\r\n            <p>微商城 / 微站 / 微分销 / 微活动 / HTML5场景定制 / 微信定制服务</p>\r\n          </div>\r\n          <div class=\"index-service-item-sub\">\r\n            <i class=\"zyitfont zyit-app\"></i>\r\n            <h2>移动应用产品解决方案</h2>\r\n            <p>iOS / Android / APP交互设计、视觉设计、功能定制开发</p>\r\n          </div>\r\n          <div class=\"index-service-item-sub\">\r\n            <i class=\"zyitfont zyit-yunying\"></i>\r\n            <h2>互联网产品运营策划</h2>\r\n            <p>定制化产品运营策略，制定顶层设计，帮助企业降低运营损耗，快速适应市场变化</p>\r\n          </div>\r\n    </div>\r\n    <div class=\"item-gap\">\r\n          <h2>About Us</h2>\r\n          <p>INFORMATION ABOUT ZUOYANIT</p>\r\n    </div>\r\n    <div class=\"index-aboutus\">\r\n      <p>我们是一支拥有政府背景，并且融交互、创新、视觉设计、产品研发于一体的专业品牌策划与制作团队，鼎力为国内外知名企业提供全方位多平台的产品服务解决方案。以专业的交互设计、创新理念、视觉呈现，服务国内外企业多达100余家，成功案例300余例。涉及IT、汽车、教育、房地产、金融等各个行业，拥有包括中国移动、中国电信、百度、新浪、淘宝、索尼、联想、人民网、中国日报等企业在内的成功案例，在国内拥有较高美誉。</p>\r\n      <img src=\"/static/site/home/assets/img/true.jpg\" >\r\n    </div>\r\n    <div class=\"index-kouhao\">\r\n      <div>\r\n        <h3>创新。</h3>\r\n        <h4>Innovate</h4>\r\n        <p>我们通过研究理解用户的思维、行为、和目标，挖掘用户对产品使用的潜在需求，通过我们服务于各行业客户的丰富经验，结合品牌的优势进行分析，让用户在情绪上、行为上感知产品的创新、感受完美的体验。超越品牌的价值。</p>\r\n      </div>\r\n      <div>\r\n        <h3>激情。</h3>\r\n        <h4>Intense</h4>\r\n        <p>我们是一只富有激情的创新团队。我们将设计通过情感的表达把用户和产品很自然的连接在一起，让用户享受使用产品的愉悦，以此来强化对产品、品牌的体验认知！通过自然的交互和生动的设计展现出来，用一个充满情感化的设计打动用户！</p>\r\n      </div>\r\n      <div>\r\n        <h3>未来。</h3>\r\n        <h4>Future</h4>\r\n        <p>为客户提供品牌化、一站式的解决方案。服务涵盖了互联网，掌上移动设备、桌面平台以及电子消费类产品等。为客户提供从品牌设计、概念设计、交互设计、视觉设计、功能研发到最终产品实现。为客户提供真正具有创新价值的产品体验。</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"item-gap\">\r\n          <h2>Contact Us</h2>\r\n          <p>CONTACT US AND JOIN US</p>\r\n    </div>\r\n     <div class=\"index-contact\">\r\n        <div class=\"index-contact-left\" id=\"addr\">\r\n\r\n        </div>\r\n        <div class=\"index-contact-right\">\r\n            <el-button type=\"primary\" style=\"width:100%;margin-bottom:30px;\">发起咨询</el-button>\r\n            <p>XXX省XXX市XXX区XXX大道东88号</p>\r\n            <p>service@zuoyanit.comddd</p>\r\n        </div>\r\n     </div>\r\n</div>\r\n\r\n"
  

});
