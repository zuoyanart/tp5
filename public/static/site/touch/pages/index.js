define('site/touch/pages/index.vue', function(require, exports, module) {

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
  //
  //
  //
  //
  //
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    data: function data() {
      return {
        swiperList: []
      };
    },
    components: {},
    methods: {
      getSwipper: function getSwipper() {
        var docs;
        return regeneratorRuntime.async(function getSwipper$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$tools.httpAgent("/ajax/article/page", 'post', {
                cp: 1,
                nodeid: 3,
                mp: 5
              }));
  
            case 2:
              docs = context$1$0.sent;
  
              this.swiperList = docs.msg;
  
            case 4:
            case "end":
              return context$1$0.stop();
          }
        }, null, this);
      }
    },
    mounted: function mounted() {
      this.getSwipper();
    }
  };
  module.exports = exports["default"];
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.template = "\n<div id=\"main\">\n  <yd-slider autoplay=\"3000\">\n    <yd-slider-item v-for=\"spr in swiperList\">\n        <a href=\"#\">\n            <img :src=\"spr.timg\">\n        </a>\n    </yd-slider-item>\n</yd-slider>\n<div class=\"gap-item\">\n  <h2>Services</h2>\n  <p>OUR FULL SERVICES RPOJECT</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-pingtai\"></i>\n  <h2>网站应用产品解决方案</h2>\n  <p>企业宣传 / 电商平台 / 分销系统 / 视觉设计 / HTML5开发 / 定制化平台</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-phone\"></i>\n  <h2>微信应用产品解决方案</h2>\n  <p>微商城 / 微站 / 微分销 / 微活动 / HTML5场景定制 / 微信定制服务</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-app\"></i>\n  <h2>移动应用产品解决方案</h2>\n  <p>iOS / Android / APP交互设计、视觉设计、功能定制开发</p>\n</div>\n<div class=\"index-application\">\n  <i class=\"zyitfont zyit-yunying\"></i>\n  <h2>互联网产品运营策划</h2>\n  <p>定制化产品运营策略，制定顶层设计，帮助企业降低运营损耗，快速适应市场变化</p>\n</div>\n<div class=\"gap-item\">\n      <h2>About Us</h2>\n      <p>INFORMATION ABOUT ZUOYANIT</p>\n</div>\n<div class=\"index-aboutus\">\n  <p>我们是一支拥有政府背景，并且融交互、创新、视觉设计、产品研发于一体的专业品牌策划与制作团队，鼎力为国内外知名企业提供全方位多平台的产品服务解决方案。以专业的交互设计、创新理念、视觉呈现，服务国内外企业多达100余家，成功案例300余例。涉及IT、汽车、教育、房地产、金融等各个行业，拥有包括中国移动、中国电信、百度、新浪、淘宝、索尼、联想、人民网、中国日报等企业在内的成功案例，在国内拥有较高美誉。</p>\n  <img src=\"/static/site/home/assets/img/true.jpg\" >\n</div>\n<div class=\"index-kouhao\">\n  <div>\n    <h3>创新。</h3>\n    <h4>Innovate</h4>\n    <p>我们通过研究理解用户的思维、行为、和目标，挖掘用户对产品使用的潜在需求，通过我们服务于各行业客户的丰富经验，结合品牌的优势进行分析，让用户在情绪上、行为上感知产品的创新、感受完美的体验。超越品牌的价值。</p>\n  </div>\n  <div>\n    <h3>激情。</h3>\n    <h4>Intense</h4>\n    <p>我们是一只富有激情的创新团队。我们将设计通过情感的表达把用户和产品很自然的连接在一起，让用户享受使用产品的愉悦，以此来强化对产品、品牌的体验认知！通过自然的交互和生动的设计展现出来，用一个充满情感化的设计打动用户！</p>\n  </div>\n  <div>\n    <h3>未来。</h3>\n    <h4>Future</h4>\n    <p>为客户提供品牌化、一站式的解决方案。服务涵盖了互联网，掌上移动设备、桌面平台以及电子消费类产品等。为客户提供从品牌设计、概念设计、交互设计、视觉设计、功能研发到最终产品实现。为客户提供真正具有创新价值的产品体验。</p>\n  </div>\n</div>\n<div class=\"gap-item\">\n      <h2>Contact Us</h2>\n      <p>CONTACT US AND JOIN US</p>\n</div>\n <div class=\"index-contact\">\n    <div class=\"index-contact-left\" id=\"addr\">\n\n    </div>\n    <div class=\"index-contact-right\">\n        <el-button type=\"primary\" style=\"width:100%;margin-bottom:30px;\">发起咨询</el-button>\n        <p>XXX省XXX市XXX区XXX大道东88号</p>\n        <p>service@zuoyanit.com</p>\n    </div>\n </div>\n\n\n\n</div>\n"
  

});
