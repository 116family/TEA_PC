// function cengji(){
// 	var imgBox=document.getElementsByClassName('imgBox')[a];
// 	var imges=imgBox.getElementsByTagName('li');
// 	var btnBox=document.getElementsByClassName('btnBox')[a];
// 	var lise=btnBox.getElementsByTagName('li');
// 	var banner=document.getElementsByClassName('banner')[a];
// 	var leftBtn=document.getElementsByClassName('leftBtn')[a];
// 	var rightBtn=document.getElementsByClassName('rightBtn')[a];
// 	var num=0;
// 	function move(type='r'){
// 		if(type=='r'){
// 			num++;
// 			if(num>=imges.length){
// 				num=0;
// 			}
// 		}else if(type=='l'){
// 			if(num<=0){
// 				num=imges.length;
// 			}
// 			num--;
// 		}
		
// 		for(var i=0;i<imges.length;i++){
// 			imges[i].style.zIndex=3;
// 			lise[i].style.background='cyan';
// 		}
// 		imges[num].style.zIndex=10;
// 		lise[num].style.background='lime';
// 	}
// 	var t=setInterval(function(){
// 		move();
// 	},1000);
// 	banner.onmouseenter=function(){
// 		leftBtn.style.display='block';
// 		rightBtn.style.display='block';
// 		clearInterval(t);
// 	}
// 	banner.onmouseleave=function(){
// 		leftBtn.style.display='none';
// 		rightBtn.style.display='none';
// 		t=setInterval(function(){
// 			move();
// 		},1000);
// 	}
// }
// cengji();