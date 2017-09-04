// 'use strict';


// 获取样式的兼容性函数
// obj 哪一个对象  attr 获取的样式

function getStyle(obj,attr){
	if(obj.currentStyle){
		return  obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

//***************************************************************
// 获取或者设置某一元素中的内容
//函数名 getText
//obj 哪一个对象  con 设置的内容 

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



//************************************************************************************
//获取元素的兼容性函数

//select  筛选什么类型的元素    obj  
//select  '.box'  '#aa'  'span ' 'li'
//函数的名称$


function $(select,obj=document){	
	if(typeof select==='string'){  //判断传入的字符串是否为字符串
		select=select.trim();   //去除字符串两端的空格
		if(select.charAt(0)==='.'){  //判断传入的字符串是否为类名
			return obj.getElementsByClassName(select.substring(1));  //返回相应对象中类名为select.substring(1)截取的字符串
		}else if((select.charAt(0)==='#')){ //判断传入的字符串是否为id
			return obj.getElementById(select.slice(1));
		}else if(/^[a-z|1-6]{1,10}/.test(select)){  //判断传入的字符串是否为标签名     //正则表达式 以a-z字母开头，有1-6的数字，数量1-10
			return obj.getElementsByTagName(select);
		}
	}else if(typeof select==='function'){  //判断select是否为函数
		window.onload=function(){
			select(); 
		}
	}
}

// ***************************************************************************
// 获取某一对象中的所有元素节点
// 函数的名称：getChild
// 形参 obj
function getChilds(obj){
	var arr=[];		//保存筛选出来的子元素
	var childs=obj.childNodes;  //获取obj对象中所有的子节点
	childs.forEach(function(val,index){
		if(val.nodeType===1){   //节点类型为1的是元素节点
			arr.push(val);
		}
	})
	return arr;
}
// ***************************************************************************
// 获取某一对象中第一个元素节点
// 函数的名称：getFirst
// 形参 obj
function getFirst(obj){
	return getChilds(obj)[0];
}
// ***************************************************************************
// 获取某一对象中最后一个元素节点
// 函数的名称：getLast
// 形参 obj
function getLast(obj){
	return getChilds(obj)[getChilds(obj).length-1];
}
// ***************************************************************************
// 获取某一对象中某一个元素节点
// 函数的名称：getEvery
// 形参 obj
function getEvery(obj,index){
	return getChilds(obj)[index];
}
// ***************************************************************************
// 获取某一对象中的上一个兄弟元素节点
// 函数的名称：get
// 形参 obj
function getup(obj,index){
	up=obj.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType!=1){
		up=up.previousSibling;
		if(up==null){
			return false;
		}
	}
	return up;
}
// ***************************************************************************
// 获取某一对象中的下一个兄弟元素节点
// 函数的名称：get
// 形参 obj
function getnext(obj,index){
	up=obj.nextSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType!=1){
		up=up.nextSibling;
		if(up==null){
			return false;
		}
	}
	return up;
}
// ***************************************************************************
// appendTo  某一节点(obj)添加到父对象(father)之后
			// obj.appendTo(father)
Object.prototype.appendTo= function(parent) {
		parent.appendChild(this);
};
// var p=document.createElement('p');
// p.innerText='999';
// p.appendTo($('div')[0]);