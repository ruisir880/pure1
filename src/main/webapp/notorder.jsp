<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=7">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>您的订单正在提交中，请耐心等待……</title>
<meta name="Author" Content="goingta,QQ285681298"> 
<meta name="Copyright" Content="zzfhw.taobao.com,yun.not3.com,All Rights Reserved"> 
<meta name="viewport" content="width=device-width,initial-scale=0.4,minimum-scale=0.3,maximum-scale=1.0">
<link href="http://dinghai.paipaiwg.com/images/main.css" rel="stylesheet" type="text/css" />
<link href="images/index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="images/notorder.js"></script>
<link rel="stylesheet" href="app/jdt/images/progressbar.css">
<script src='images/jquery-1.9.1.min.js'></script>
</head>

<body>
<div class="okDiv">
<span id="jdt">
<section class="container">
<div class="progress"><span class="orange" style="width:0%;"><span>0%</span></span> </div>
</section>
</span>
<script type='text/javascript'>
	function loading(percent){
		$('.progress span').animate({width:percent},1000,function(){
			$(this).children().html(percent);
            if(percent=='100%'){
                $(this).children().html('订单已经处理成功&nbsp;&nbsp;&nbsp;&nbsp;');
                $('.container').fadeOut();
                document.getElementById("jdt").style.display='none';
                document.getElementById("t0").style.display='none';
                document.getElementById("t1").style.display='block';
                document.getElementById("t2").style.display='block';
            }
		})
	}
</script>

      <script type="text/javascript">loading('100%');</script> 
      <div class="top">
      <div class="shibai">
      <div id="t1">抱歉，提交失败</div>
      <div id="t2">如遇到提交问题，请立即与客服取得联系！</div>
      </div>
      </div>
      <div class="content">
可能的原因：<br>
1、你是直接打开的本页面？<br>
2、你点击了浏览器的【转到】或者键入了回车键导致该页重新打开。<br>
3、程序出现了意外，请过一会再提交，或者直接拨打我们的客服热线或者联系在线客服。
      </div>
      <div class="bottom">
      <div class="btnDiv">
      
      <a href="javascript:CloseWebPage();"><img src="images/close.gif" alt="" border=0/></a>
      
      </div>
      </div>
</div>
<script>document.title="订单提交失败，请联系在线客服";</script>

</body>
</html>