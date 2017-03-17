function jsonp(config) {
  var _options = config || {};
  var _callback = ('jsonp_' + Math.random()).replace(".", "");
  var _head = document.getElementsByTagName('head')[0];
  var _script = document.createElement('script');
  // 添加script标签
  _head.appendChild(_script);

  window[_callback] = function (json) {
    // 创建jsonp回调函数
    _head.removeChild(_script);
    clearTimeout(_script.timer);
    window[_callback] = null;
    options.success && options.success(json);
  };
  _script.src = options.url + '?' + _callback;
  // 发送请求
  if (options.time) {
    // 设置超时处理
    _script.timer = setTimeout(function () {
      window[_callback] = null;
      _head.removeChild(_script);
      options.fail && options.fail({ message: "超时" });
    }, options.time);
  }
};

jsonp({
  url: 'b.com/b.json',
  success: function (d) {
    // 数据处理
  },
  time: 5000,
  fail: function () {
    // 错误处理
  }
});