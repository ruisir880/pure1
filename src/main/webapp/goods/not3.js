
//window.onerror = function(){return true;}
//function $(id){return document.getElementById(id);}  
//function getHeight(){$("fahuo").style.height=$("forml").offsetHeight-85+"px";}  
//window.onload = function(){getHeight();}  
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function postcheck(){ 	
 try{
     var product = document.getElementsByName("product");
     if (product.length != 0){
     var numa=0;
     for (var i=0; i<product.length; i++){
      if(product[i].checked) {
      numa++;
      }
     }
     if(numa==0) {
      alert("��ѡ��Ҫ�������Ʒ�����ײ�");
      return false;
      }
      }
 }
 catch(ex){
 }

 try{
     var yanse = document.getElementsByName("yanse");
     if (yanse.length != 0){
     var numa=0;
     for (var i=0; i<yanse.length; i++){
      if(yanse[i].checked) {
      numa++;
      }
     }
     if(numa==0) {
      alert("��ѡ��Ҫ�Ĺ�����ɫ");
      return false;
      }
      }
 }
 catch(ex){
 }

 try{
     var chicun = document.getElementsByName("chicun");
     if (chicun.length != 0){
     var numb=0;
     for (var i=0; i<chicun.length; i++){
      if(chicun[i].checked) {
      numb++;
      }
     }
     if(numb==0) {
      alert("��ѡ��Ҫ�Ĺ������");
      return false;
      }
      }
 }
 catch(ex){
 }
 
 try{
	// alert($(".zengsong").css("display"));
     var productzp = document.getElementsByName("productzp");
     if (productzp.length != 0 && $(".zengsong").css("display")!="none"){
     var numa=0;
     for (var i=0; i<productzp.length; i++){
      if(productzp[i].checked) {
      numa++;
      }
     }
     if(numa==0) {
      alert("��ѡ��Ҫ����Ʒ");
      return false;
      }
      }
 }
 catch(ex){
 }

 try{
     var yansezp = document.getElementsByName("yansezp");
     if (yansezp.length != 0 && $(".zengsong").css("display")!="none"){
     var numa=0;
     for (var i=0; i<yansezp.length; i++){
      if(yansezp[i].checked) {
      numa++;
      }
     }
     if(numa==0) {
      alert("��ѡ��Ҫ����Ʒ��ɫ");
      return false;
      }
      }
 }
 catch(ex){
 }

 try{
     var chicunzp = document.getElementsByName("chicunzp");
     if (chicunzp.length != 0 && $(".zengsong").css("display")!="none"){
     var numb=0;
     for (var i=0; i<chicunzp.length; i++){
      if(chicunzp[i].checked) {
      numb++;
      }
     }
     if(numb==0) {
      alert("��ѡ��Ҫ����Ʒ����");
      return false;
      }
      }
 }
 catch(ex){
 }
try{
		if (document.form.name.value==""){
			alert('����д������');
			document.form.name.focus();
			return false;
		}
		var name = /^[\u4e00-\u9fa5]{2,6}$/;
		if (!name.test(document.form.name.value)){
			alert('������ʽ����ȷ����������д��');
			document.form.name.focus();
			return false;
		}
    }
    catch(ex){
    }
    try{
		if (document.form.mob.value==""){
			alert('����д�ֻ����룡');
			document.form.mob.focus();
			return false;
		}
		var form = /^1[3,4,5,6,7,8]\d{9}$/;
		if (!form.test(document.form.mob.value)){
			alert('�ֻ������ʽ����ȷ����������д��');
			document.form.mob.focus();
			return false;
		}
    }
    catch(ex){
    } 	
    try{
		if (document.form.province.value==""){
			alert('��ѡ�����ڵ�����');
			document.form.province.focus();
			return false;
		}
    }
    catch(ex){
    } 	
    try{
		if (document.form.address.value==""){
			alert('����д��ϸ��ַ��');
			document.form.address.focus();
			return false;
		}
    }
    catch(ex){
    } 	
		
	
   // document.form.submit.disabled = true;
   // document.form.submit.value="�����ύ�����Ե� >>";
    return true;
}
try{	
new PCAS("province","city","area");
}
catch(ex){
} 	
try{	
	var thissrc = document.getElementById("yzm").src;
	function refreshCode(){
		document.getElementById("yzm").src=thissrc+"?"+Math.random(); 
	}
}
catch(ex){
} 	
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/

function lg_num(n,f)
{
	if(document.form.mun.value=="" || document.form.mun.value==0){	
		var mun=1;
	}else{
		
		mun=document.form.mun.value;
	}
	  if(f=="-")
		mun=parseInt(mun)-n;
	else
		mun=parseInt(mun)+n;
		
		if (mun<=0) mun=1;
	document.form.mun.value=mun;
	
	pricea();
}

function pricea(){
	var product = $("li.mouon input[name=product]").attr("alt");
	
/*	for(var i=0;i<document.form.product.length;i++){
		if(document.form.product[i].checked==true){
			var product = document.form.product[i].alt;
			break;
		}
	}*/
	//alert(product);
	//alert(typeof(product));
	if(typeof(product)=="undefined"){alert('��ѡ���Ʒ ��');return false;};
    if(document.form.mun.value=="" || document.form.mun.value==0){	
		var mun=1;
	}
	else{
		var mun=document.form.mun.value;
	}	
	var price=product*mun;
        document.getElementById("b1").checked='checked';
	document.form.price.value=price;
	document.form.zfbprice.value=price;
	//document.getElementById("showprice").innerHTML=price;
	document.getElementById("zfbyh").innerHTML='';
}
function priceb(){
    var cpxljg = document.getElementById("product");
    var product = cpxljg.options[document.getElementById("product").options.selectedIndex].title; 
    if(document.form.mun.value=="" || document.form.mun.value==0){	
		var mun=1;
	}
	else{
		var mun=document.form.mun.value;
	}	
	var price=product*mun;
	document.getElementById("b1").checked='checked';
	document.form.price.value=price;
	document.form.zfbprice.value=price;
	//document.getElementById("showprice").innerHTML=price;
	document.getElementById("zfbyh").innerHTML='';
}

//***************************  ֧�����۸�  ***************************
function zfbprize(){
         sprice=document.form.zfbprice.value;
		// alert(sprice);
         document.form.price.value=(sprice*notzfbzk*0.1).toFixed(0)
}
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function changeItem(i){

if (i==1) {
//document.getElementById("paydiv1").style.display = "block";
//document.getElementById("paydiv0").style.display = "none";
  if (notzfbzk != 0){
     zfbprize();
     document.getElementById("zfbyh").innerHTML='<font color=red><b><s>&nbsp;ԭ�ۣ�'+document.form.zfbprice.value+'Ԫ&nbsp;</s>&nbsp;'+notzfbzk+'��</b></font>';
  }
}else{
//oprize1();
//document.getElementById("paydiv0").style.display = "block";
//document.getElementById("paydiv1").style.display = "none";
document.getElementById("zfbyh").innerHTML='';
document.form.price.value=document.form.zfbprice.value;
}
}


/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
var llref = '';
if (document.referrer.length > 0){
	llref = document.referrer;
}
try{
	if (llref.length == 0 && opener.location.href.length > 0){
    llref = opener.location.href;
	}
}
catch (e){}

/*///////////////////////////////////////// ORDERJSEND /////////////////////////////////////////*/