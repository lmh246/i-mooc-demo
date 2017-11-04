window.onload=function(){
	var username = document.getElementById("username");
	var password1 = document.getElementById("password1");
	var password2 = document.getElementById("password2");
	var tijiao = document.getElementById("tijiao");
	var count = document.getElementById("count");
	var count2 = document.getElementById("count2");
	var biaoshu1 = document.getElementById("biaoshu1");
		var biaoshu2 = document.getElementById("biaoshu2");

	var biaoshu3 = document.getElementById("biaoshu3");


function getlength(str){
	return str.replace(/[^\x00-xff]/gi,"xx").length;
}
function findStr(str, n){
  	var tmp = 0;
  	for (var i = 0; i < str.length; i++){
    if(str.charAt(i)==n){
      tmp++;
    }
  }
  	return tmp;
}



	//用户名验证
	username.onkeyup=function(){
		count.style.display="block";
		var username_length = getlength(this.value);
		count.innerHTML="有"+username_length+"个字符";
	}



	username.onblur=function(){
		var reg = /[^\w\u4e00-\u9fa5]/g;
		var username_length = getlength(this.value);
		//小于4字符
		if (username_length<4) {
			biaoshu1.innerHTML="用户名小于4字符";
			username.style.borderColor="red";
		}

		//大于16字符
		else if(username_length>16){
			biaoshu1.innerHTML="用户名大于16字符";
			username.style.borderColor="red";
		}
		//不是大小写字母或中文汉字
		else if(reg.test(this.value)){
			biaoshu1.innerHTML="用户名不符合规范";
			username.style.borderColor="red";
      	}

		//ok
		else{
			biaoshu1.innerHTML="用户名符合规范";
			username.style.borderColor="green";
			count.style.display="none";
		}

	}



	//密码验证
	password1.onkeyup=function(){
		count2.style.display="block";
		var password1_length = getlength(this.value);
		count2.innerHTML="有"+password1_length+"个字符";

	}


	password1.onblur=function(){
		var password1_length = getlength(this.value);
		var m = findStr(password1.value, password1.value[0]);
   	 	var reg_n = /[^\d]/g;
    	var reg_c = /[^a-zA-Z]/g;
		//小于4字符
		if (password1_length<4) {
			biaoshu2.innerHTML="密码小于4字符";
			password1.style.borderColor="red";
		}

		//大于16字符
		else if(password1_length>16){
			biaoshu2.innerHTML="密码大于16字符";
			password1.style.borderColor="red";
		}
		//不是同一个类型
		else if(m == this.value.length){
			biaoshu2.innerHTML="密码不符合规范，不能使用同一类型";
			password1.style.borderColor="red";
      	}

		//ok
		else{
			biaoshu2.innerHTML="密码符合规范";
			password1.style.borderColor="green";
			count2.style.display="none";
		}

	}

	//确认密码
	password2.onblur=function(){
		if(this.value != password1.value){
      	biaoshu2.innerHTML="两次输入的密码不一致！";
      	password2.style.borderColor='red';
    }else{
      password2.style.borderColor='green';
    }
	}




//提交
	tijiao.onclick=function(){
		if (password1.value == password2.value) {
			window.alert("提交成功");
		}else{
			window.alert("提交失败");
		}
	}



























}
