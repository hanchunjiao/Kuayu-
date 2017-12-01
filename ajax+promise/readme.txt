注意 <1.php>要放在c盘-PHPnow-htdocs下才能模拟跨域效果

* index(jq).html -------使用ES6新语法promise+jq(ajax),实现点击按钮请求放在本地服务器下的1.php文件,因为是跨域,
所以要在被请求的php文件里加上这句代码:header('Access-Control-Allow-Origin:*');
同时为了在php文件里有汉字时不报错要在头部加上这句代码:header('content-type:text/html;charset="utf-8"');

* index(yuansheng).html-------原生ajax请求放在本地服务器下的1.php文件

* index(ajax_yuanxheng_jianrong).html------原生ajax的兼容写法,请求放在本地服务器下的1.php文件