$(function(){

    //$('.item-price-timer').timeLesser( api.timeLesser );
   // $("#address").addressSelector( !!api.input && !!api.input.address ? api.input.address : {} );
   //// $('.comments').marqueen();
    //$('.order-notes').marqueen();

    //
    
$("#olist").empty();
//fl_zt="|0:�ȴ�ȷ��|1:ȷ�ϼٵ�|2:�ȴ�����|3:�Ѿ�����|4:�Ѿ�ǩ��|5:�Ѿ��˻�|"
var fl_zt= new Array();
fl_zt[0]="�ȴ�ȷ��";
fl_zt[1]="ȷ�ϼٵ�";
fl_zt[2]="�ȴ�����";
fl_zt[3]="�Ѿ�����";
fl_zt[4]="�Ѿ�ǩ��";
fl_zt[5]="�Ѿ��˻�";

//fl_kuaidi="|0:δ����|1:˳����|2:լ����|3:EMS|4:��ͨ���|5:Բͨ���|6:��ͨ���|7:�ϴ���|"
var fl_kuaidi= new Array();
fl_kuaidi[0]="δ����";
fl_kuaidi[1]="˳����";
fl_kuaidi[2]="լ����";
fl_kuaidi[3]="EMS";
fl_kuaidi[4]="��ͨ���";
fl_kuaidi[5]="Բͨ���";
fl_kuaidi[6]="��ͨ���";
fl_kuaidi[7]="�ϴ���";

    //������ѯ��
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
            alert('�������ֻ���');ta.focus();return false;
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
                        msg.after('<div class="warning c-h">�㻹û���µ�Ŷ��<br>����мǴ��������µ���</div>');
                        msg.hide();
                    }else{
						var html_d="";
                        for(var i in rs.data){
                            var v = rs.data[i];
  html_d+='<li>  <div class="m30">  <div class="m20r fl"><span class="c-note">��&nbsp;&nbsp;��&nbsp;&nbsp;�ţ�</span><span class="c-a">'+v.orderid+'</span></div><div class="fl "><div class="c-note fl">����״̬��</div><div style="margin-left:70px;"><span class="c-a">'+fl_zt[v.zt]+'</span></div></div></div>      <div class="m30"><div class=" m20r fl"><span class="c-note">��ݵ��ţ�</span><span class="c-a">'+fl_kuaidi[v.kuaidi]+'&nbsp;&nbsp;'+v.danhao+'</span></div> <div class="fl" style="margin-left:70px;"><a href="http://www.kuaidi100.com/chaxun?com='+encodeURI(fl_kuaidi[v.kuaidi])+'&nu='+v.danhao+'" target="_blank">����鿴�͵��Ķ��ˣ�</a></div>   <div></li>';
                         /*   rs.data[i]['action_view'] = '';
                            rs.data[i]['auto_state'] = '������ȷ�ϣ���������';

                            if(v['out_warehouse_time']>0){
                                rs.data[i]['auto_state'] = '�ѷ������뱣�ֵ绰ͨ���ȴ��ͻ�����';
                                if(v['out_warehouse_time']>0||1){
                                    if(G.uat==''){
                                        var _url = "http://www.kuaidi100.com/chaxun?com="+v['express_company']+"&nu="+v['express_code'];
                                    }else{
                                        var _url = "http://m.kuaidi100.com/result.jsp?nu="+v['express_code'];
                                    }
                                    rs.data[i]['action_view'] = '<a href="'+_url+'" target="_blank">����鿴�͵��Ķ��ˣ�</a>';
                                }
                            }*/

                        }
						msg.html(html_d);
                       // msg.htmlRender(rs.data);
                       // msg.html(msg.html().replaceAll('<div class=" m20r fl"><span class="c-note">��ݵ��ţ�</span>&nbsp;&nbsp;</div>',''));
                        
                    }
                    c.find('._result').removeClass('undis');

                    
                }else{
                    alert(rs.msg);
                }
                
            },  dataType: 'json'
        });
    });


    //�ύ���ۮ�
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
            alert('��������������');ta.focus();return false;
        }

        ta=c.find('input[name=dealcode]');
        if(ta.val().trim()!=''){
            _d.dealcode = ta.val().trim(); 
        }else{
            alert('�����붩����');ta.focus();return false;
        }

        a.addClass('_dis');
        a.html('�����ύ�����Ե�...');

  
       
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