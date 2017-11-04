window.onload=function(){
	var obtn = document.getElementById("btnlogin");
	obtn.onclick = function(){
		//遮罩层
	var height = document.body.scrollHeight;
	var width = document.body.scrollWidth;
	var mask = document.createElement("div");
	mask.id ="mask";
	mask.style.height = height+"px";
	mask.style.width = width+"px";
	mask.style.backgroundColor="black";
	document.body.appendChild(mask);
	//登录
	var login = document.createElement("div");
	login.id = "login"; 
	//可视区域
	var wheight = document.documentElement.clientHeight;
	var wwidth = document.documentElement.clientWidth;
	login.innerHTML="<div class='head'>登录账号<div id='close'>×</div></div><div class='contain'><div class='user'>用户名：<span><input type='text' placeholder='用户名/手机/邮箱'></span></div><div class='password'>密码： &nbsp; &nbsp;<input type='password'></div><div class='submit'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type='submit' value='登录'></div></div>"
	document.body.appendChild(login);
	//本身
	var dheight = login.offsetHeight;
	var dwidth = login.offsetWidth;
	login.style.left = (wwidth-dwidth)/2+"px";
	//login.style.top = (wheight-dheight)/2+"px";



	var oclose=document.getElementById("close");
	mask.onclick=oclose.onclick=function(){
		document.body.removeChild(mask);
		document.body.removeChild(login);
	}



	/*拖拽动能*/
	var mouseoffsetx = 0;//偏移
	var mouseofsety = 0;

	var isdraging = false;//是否可以拖拽
	//事件1计算左上角的坐标，标记元素为可拖动
	document.onmousedown = function(e){
		mouseoffsetx = e.pageX-login.offsetLeft;
		mouseoffsety = e.pageY-login.offsetTop;
		isdraging = true;
		//事件2,检测是否标记为移动，是的话更新元素位置到当前位置
	document.onmousemove = function(e){
		var login1 = document.getElementById("login");
		var mousex = e.pageX;
		var mousey = e.pageY;//当前位置
		var movex = 0;
		var movey = 0;
		if (isdraging===true) {

			movex = mousex - mouseoffsetx;
			movey = mousey - mouseoffsety;
			//界限
			var maxX = wwidth - dwidth;
			var maxY = wheight - dheight;
			movex=(maxX,Math.max(0,movex));
			movey=(maxY,Math.max(0,movey));
			login1.style.left = movex + "px";
			login1.style.top = movey + "px";
		}

	}
	//事件3，鼠标松开显示不可拖拽
	document.onmouseup=function(){
		isdraging = false;
	}
	}
	






























	}

	
	


}