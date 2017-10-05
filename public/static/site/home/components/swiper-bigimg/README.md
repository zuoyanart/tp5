## 大图轮转
### 参数
```js
cls: {//可以添加一个class
    type: String,
    default: ''
},
page: {//请求数据的参数
    type: Object,
    default () {
        return {
            islink: false,
            nodeid: 0,
            mp: 3
        }
    }
},
options: {//swiper的参数
    type: Object,
    default () {
        return {

        }
    }
}
```

### swiper默认参数

```js
const swiperOptionDefault = {
  direction: 'horizontal',
  autoplay: 3500,
  autoplayDisableOnInteraction: false,
  loop: true,
  pagination: '.swiper-pagination',
  grabCursor: true,
};
```
