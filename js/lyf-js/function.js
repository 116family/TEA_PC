// 获取样式的兼容性函数
// obj(哪一个对象) attr(获取的样式)
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj,null)[attr];
		}
	}
//*************************************************************************************
//获取或者设置某一元素中的内容
//函数名 getText
//obj(哪一个对象) con(设置的内容)
function getText(obj,con){
	if(con==undefined){
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
	}else{
		if(obj.innerText){
			obj.innerText=con;
		}else{
			obj.textContent=con;
		}
	}
}
//*************************************************************************************
//获取元素的兼容性函数
//select(需要筛选的类型)  obj(属于哪个父元素中的元素)
// select '.box'(类名)  '#aa'(id名)  'span'(标签名)
//函数的名称$
function $(select,obj=document){
	if(typeof select==='string'){ //判断传入的实参是否为字符串
		select=select.trim(); //去除字符串两端的空格
		if(select.charAt(0)==='.'){ //判断传入的实参是否为类名
			return obj.getElementsByClassName(select.substring(1));
		}else if(select.charAt(0)==='#'){ //判断传入的实参是否为id名
			return obj.getElementById(select.substring(1));
		}else if(/^[a-z]|[1-6]{1,10}/.test(select)){ //正则
			return obj.getElementsByTagName(select);
		}
	}else if(typeof select==='function'){
		window.onload=function(){
			select();
		}
	}
}


//*********************************************************************************************
// 获取某一对象中所有的元素节点
// 函数的名称   getChilds
// 形参 obj
function getChilds(obj){
	var childs=obj.childNodes; //获取obj中所有的子节点
	var arr=[];  //用arr来保存筛选出来的元素节点
	childs.forEach(function(val,index){  //将obj中的所有节点进行遍历
		if(val.nodeType===1){  //如果该元素的节点类型为元素节点
			arr.push(val);  //则将该节点添加到空数组中
		}
	})
	return arr; //返回处理好的数组
}

//***********************************************************************************************
// 获取某一对象中的第一个元素节点
// 函数名 getFirst
function getFirst(obj){
	return getChilds(obj)[0];
}

//***********************************************************************************************
// 获取某一对象中的最后一个元素节点
// 函数名 getLast
function getLast(obj){
	return getChilds(obj)[getChilds(obj).length-1];
}

//***********************************************************************************************
// 获取某一对象中的某一个元素节点
// 函数名 getOne
function getOne(obj,index){
	return getChilds(obj)[index]; //获取下标为index的元素
}

//***********************************************************************************************
//获取某一对象的上一个兄弟元素节点
// 函数名  getUp
function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType!==1){
		up=up.previousSibling;
		if(up==null){
			return false;
		}
	}
	return up;
}

//***********************************************************************************************
//获取某一对象的下一个兄弟元素节点
// 函数名  getNext
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType!==1){
		next=next.nextSibling;
		if(next==null){
			return false;
		}
	}
	return next;
}

//*******************************************************************************************
// 将某一标签添加到某一标签中（把子元素添加到父元素里面）
//appendTo 某一节点（obj）添加到父对象（father）的最后 
//使用方式：obj.appendTo(father)
Object.prototype.appendTo=function(parent){
	parent.appendChild(this);  //this：指所要添加到那个里面，this就指的那个
}