$(function(){

    //$('.item-price-timer').timeLesser( api.timeLesser );
   // $("#address").addressSelector( !!api.input && !!api.input.address ? api.input.address : {} );
   //// $('.comments').marqueen();
    //$('.order-notes').marqueen();

    //
    
$("#olist").empty();
//fl_zt="|0:等待确认|1:确认假单|2:等待发货|3:已经发货|4:已经签收|5:已经退货|"
var fl_zt= new Array();
fl_zt[0]="等待确认";
fl_zt[1]="确认假单";
fl_zt[2]="等待发货";
fl_zt[3]="已经发货";
fl_zt[4]="已经签收";
fl_zt[5]="已经退货";

//fl_kuaidi="|0:未安排|1:顺丰快递|2:宅急送|3:EMS|4:申通快递|5:圆通快递|6:中通快递|7:韵达快递|"
var fl_kuaidi= new Array();
fl_kuaidi[0]="未安排";
fl_kuaidi[1]="顺丰快递";
fl_kuaidi[2]="宅急送";
fl_kuaidi[3]="EMS";
fl_kuaidi[4]="申通快递";
fl_kuaidi[5]="圆通快递";
fl_kuaidi[6]="中通快递";
fl_kuaidi[7]="韵达快递";

    //订单查询
    $('#form_order_search').find('._btn_submit').on('click',function(){
		//alert('dd');
        var a=$(this);
        var c = $('#form_order_search');
        var msg = c.find('.form-msg');

        var _d = {};
            _d.act = 'query';

        var ta = c.find('input[name=mobile]');
        if(ta.val().trim()!=''){
            _d.mobile = ta.val().trim();

        }else{
            alert('请输入手机号');ta.focus();return false;
        }

        $('._result').find('.warning').remove();


        //if(G.debug){
            // console.log(_d);
            // return false;
        //}

        $.ajax({
            ta:a,
            url:'../ajax.asp',
            data:_d,
            success:function(rs){
                
				//alert(rs.code);
                if(rs.code==0){

                    if(rs.data.length == 0){
                        msg.after('<div class="warning c-h">你还没有下单哦，<br>如过有记错，可以再下单。</div>');
                        msg.hide();
                    }else{
						var html_d="";
                        for(var i in rs.data){
                            var v = rs.data[i];
  html_d+='<li>  <div class="m30">  <div class="m20r fl"><span class="c-note">订&nbsp;&nbsp;单&nbsp;&nbsp;号：</span><span class="c-a">'+v.orderid+'</span></div><div class="fl "><div class="c-note fl">订单状态：</div><div style="margin-left:70px;"><span class="c-a">'+fl_zt[v.zt]+'</span></div></div></div>      <div class="m30"><div class=" m20r fl"><span class="c-note">快递单号：</span><span class="c-a">'+fl_kuaidi[v.kuaidi]+'&nbsp;&nbsp;'+v.danhao+'</span></div> <div class="fl" style="margin-left:70px;"><a href="http://www.kuaidi100.com/chaxun?com='+encodeURI(fl_kuaidi[v.kuaidi])+'&nu='+v.danhao+'" target="_blank">点击查看送到哪儿了？</a></div>   <div></li>';
                         /*   rs.data[i]['action_view'] = '';
                            rs.data[i]['auto_state'] = '订单已确认，即将发货';

                            if(v['out_warehouse_time']>0){
                                rs.data[i]['auto_state'] = '已发货，请保持电话通畅等待送货上门';
                                if(v['out_warehouse_time']>0||1){
                                    if(G.uat==''){
                                        var _url = "http://www.kuaidi100.com/chaxun?com="+v['express_company']+"&nu="+v['express_code'];
                                    }else{
                                        var _url = "http://m.kuaidi100.com/result.jsp?nu="+v['express_code'];
                                    }
                                    rs.data[i]['action_view'] = '<a href="'+_url+'" target="_blank">点击查看送到哪儿了？</a>';
                                }
                            }*/

                        }
						msg.html(html_d);
                       // msg.htmlRender(rs.data);
                       // msg.html(msg.html().replaceAll('<div class=" m20r fl"><span class="c-note">快递单号：</span>&nbsp;&nbsp;</div>',''));
                        
                    }
                    c.find('._result').removeClass('undis');

                    
                }else{
                    alert(rs.msg);
                }
                
            },  dataType: 'json'
        });
    });


    //提交评论
    $('#form_comments').find('._btn_submit').on('click',function(){
        var a=$(this);
        if(a.hasClass('_dis')){
            return false;
        }

        a.attr('data-text',a.html());

        var c=$('#form_comments');
        var _d={};
        var ta='';

        ta=c.find('textarea[name=content]');
        if(ta.val().trim()!=''){
            _d.content = ta.val().trim(); 
        }else{
            alert('请输入评论内容');ta.focus();return false;
        }

        ta=c.find('input[name=dealcode]');
        if(ta.val().trim()!=''){
            _d.dealcode = ta.val().trim(); 
        }else{
            alert('请输入订单号');ta.focus();return false;
        }

        a.addClass('_dis');
        a.html('正在提交，请稍等...');

  
       
        $.ajaxPost({
            ta:a,
            url:'../comment/ajax.php',
            data:_d,
            success:function(rs){
                if(G.debug){
                    console.log(rs);
                }
                if(rs.code==0){
                    c.find('.comments-form').fadeOut(function(){
                        c.find('.comments-form-result').fadeIn();
                    });

                }else{
                    alert(rs.msg);
                    if(rs.code=='DEALCODE_ERR'){
                        c.find('input[name=dealcode]').select();
                    }
                }
                
            }
        });
    });

    



})