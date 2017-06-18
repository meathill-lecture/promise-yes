/**
 * Created by Meathill on 2017/6/18.
 */

// 比较常见的有 ajax
$.ajax('http://baidu.com', {
  success: function (res) {
    // 这里就是回调函数了
  }
});

// 或者在页面加载完毕后回调
$(function () {
  // 这里也是回调函数
});