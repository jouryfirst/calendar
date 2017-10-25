window.onload=function(){
	var h3 = document.querySelector("h3");
	var p = document.querySelector("p");
	var number=document.querySelector(".number");
	var strong=document.querySelector(".time3 strong");
	var btns=document.querySelectorAll(".time3 img");
	//即时时间
	time();
	setInterval(time,1000);
	function time(){
		var d = new Date();
		h3.innerHTML = format(d.getHours()) + ':' + format(d.getMinutes()) + ':' + format(d.getSeconds());		
	}
	function format(v){
			return v<10?'0'+v:v;
		}
	date();
	function weeks(v){
		return ['日','一','二','三','四','五','六'][v];
	}
	function date(){
		var d = new Date();
		p.innerHTML = d.getFullYear() + '年' + format(d.getMonth() + 1) + '月' + format(d.getDate()) +'日' + ' 星期' +weeks(d.getDay());
	}
	//某个月有多少天
	function getEndDay(year,month){
		return new Date(year,month,0).getDate();
	}
				

	function getFirstWeek(year,month){
	    return new Date(year,month-1,1).getDay();
	}
				
				
	//设置日历的内容
	var d=new Date();
	setCalendar(d);
	function setCalendar(d){
		var lastEndDay=getEndDay(d.getFullYear(),d.getMonth());		//取上个月最后一天
		var curEndDay=getEndDay(d.getFullYear(),d.getMonth()+1);	//取这个月最后一天
		var week=getFirstWeek(d.getFullYear(),d.getMonth()+1);		//取这个月第一天的星期
					
		var nextDay=1;			//下个月的起始天数
		var str='';				//存的是所有的span标签
		var endNum=week-1;		//上个月占了几个格子
		var curDay=1;			//这个月的起始天数
					
		//如果这个月的第一天是周一的话，就没有上个月的日期了，我们给他补一行
		if(endNum==0){
			endNum=7;
		}
					
		//如果这个月的第一天是周日的话，就会没有上个月的日期，因为endNum的值为-1
		if(endNum<0){
			endNum=6;
		}
					
		for(var i=0;i<42;i++){
			if(i<endNum){
				//这个条件成立了，说明这里面生成的是上个月的日期
				str='<span class="color">'+lastEndDay--+'</span>'+str;
			}else if(i>=endNum+curEndDay){
				//这个条件成立了，说明这里面生成的是下个月的日期
				str+='<span class="color">'+nextDay+++'</span>';
			}else{			
		        if(new Date().getDate()==curDay && new Date().getMonth()==d.getMonth() && new Date().getFullYear()==d.getFullYear()){
					str+='<span class="active">'+curDay+++'</span>';
				}else{
					str+='<span>'+curDay+++'</span>';
				}
			}
		}
					
					
		number.innerHTML=str;
		strong.innerHTML=d.getFullYear()+'年'+format(d.getMonth()+1)+'月';
	};
				
				
	//上个月点击
	btns[0].onclick=function(){
		d.setMonth(d.getMonth()-1);
		setCalendar(d);
	};
				
	//下个月点击
	btns[1].onclick=function(){
		d.setMonth(d.getMonth()+1);
		setCalendar(d);
	};
	var a = document.querySelector('a');

	a.onclick = function(){
		changemore();
		
	}
	function changemore(){
			var more = document.getElementById('more');
	        var dis = more.style.display;
	        more.style.display=dis == 'block'?'none':'block';
	}

	var selects = document.querySelectorAll('#more select');
	//console.log(inputs[0].value);
	var nowweeks = document.querySelector('#more strong');
	//console.log(parseInt(nowweeks.innerHTML) + 1);
	var n=0;		//用来存储周数
	function calc(){
		nowweeks.innerHTML =cutDown(target1).n
	};
	function cutDown(target){
		var d=new Date();
		var v=Math.abs(d - target);
		return {n:parseInt(v/(24*3600000*7))}
	}
	ty = selects[0].value;
	tm = selects[1].value - 1;
	td = selects[2].value;
	
	var target1 = new Date(ty,tm,td);
	calc();
	setInterval(calc,1000);
	//console.log(nowweeks.innerHTML);
	var workarr = ['王子豪','仇珂','魏士杰','田园','董骞','张家瑞','郭佳佳','李岩','杨明'];
	var working = document.getElementById('working');
	var towork = document.getElementById('towork');
	var inputs = document.querySelectorAll('#more input');
	inputs[0].onclick = function(){
		var i = nowweeks.innerHTML % 9;
	    working.innerHTML = ' ' + workarr[i - 1] + ' ';
	    towork.innerHTML = ' ' + workarr[i] + ' '; 
	}
	inputs[1].onclick = function(){
		var newarr = ['王子豪','王子豪','仇珂','仇珂','魏士杰','魏士杰','田园','田园','董骞','董骞','张家瑞','张家瑞','郭佳佳','郭佳佳','李岩','李岩','杨明','杨明'];
		var i = nowweeks.innerHTML % 18;
	    working.innerHTML = ' ' + newarr[i - 1] + ' ';
	    towork.innerHTML = ' ' + newarr[i] + ' '; 
	}
	
}

