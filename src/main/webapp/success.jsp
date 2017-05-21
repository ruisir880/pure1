<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>您的订单正在提交中，请耐心等待……</title>
    <meta name="Author" Content="goingta,QQ285681298">
    <meta name="Copyright" Content="zzfhw.taobao.com,yun.not3.com,All Rights Reserved">
    <meta name="viewport" content="width=device-width,initial-scale=0.4,minimum-scale=0.3,maximum-scale=1.0">
    <link href="images/main.css" rel="stylesheet" type="text/css" />
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
    <script type="text/javascript">loading('20%');</script>
    <div class="top">
        <div class="chenggong">
            <div id="t0">订单处理中，请耐心等待……</div>
            <div id="t1" style="display:none">恭喜<span style="color:#FF8000;">${user}</span>，提交成功!!</div>
            <div id="t2" style="display:none">我们将马上安排发货，很快将可以送到你的手上。祝您生活愉快！</div>
        </div>
    </div>
    <div class="content">
        <!-- 返回订单信息 -->
        <script type="text/javascript">loading('40%');</script>
        订单号：no.201752122954484<br />
        姓名：钱风<br />
        电话：15365458972<br />
        产品：生肖金镶玉178元、子鼠 <font color='red'>(  赠品：国家宝石检测证书+开光证书+十帝钱+2017化太岁锦囊+礼品包装袋+礼品盒+精美挂绳 )</font><br />

        付款方式：
        <img src="images/payb.gif" border=0>
        <br />

        地址：湖北省黄石市市辖区阿来得及法律的<br />
    </div>
    <div class="bottom">
        <!-- 返回支付方式 -->
        <script type="text/javascript">loading('60%');</script>

        <div class="btnDiv">

            <a href="http://dinghai.paipaiwg.com/index.htm?from=singlemessage"><img src="images/btn5.gif" alt=""  border=0/></a>

        </div>
        <script>document.title="您的订单已经提交成功，感谢你的支持！";</script>

    </div>
</div>

<script type="text/javascript">
    var t=65;
    var kaishi;
    kaishi=setInterval("testTime()",500);
    function testTime() {
        if(t < 101){
            loading(t+'%');
            t=t+5;   //   计数器
        }
    }
</script>


<!-- 返回邮箱发送 -->
<div style="display:none">
    <script type="text/javascript" src="moban/inc/ordermail.asp?mob=15365458972&hs=&chanpin=生肖金镶玉178元、子鼠 <font color='red'>(  赠品：国家宝石检测证书+开光证书+十帝钱+2017化太岁锦囊+礼品包装袋+礼品盒+精美挂绳 )</font>&cname=&orderid=no.201752122954484" charset=utf-8></script>
</div>

</body>
</html>