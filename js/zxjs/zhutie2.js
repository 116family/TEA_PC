$(function(){
	var lise=$('li',$('.kong_box')[0]);
	var floor=$('.floor1',$('.floor_box')[0])
	Array.from(lise).forEach(function(val,index){
		val.onclick=function(){
			if(index==5){
				animate(document.body,{scrollTop:0},500);
			}else{
				animate(document.body,{scrollTop:floor[index].offsetTop-100},500)
			}
		}

})

var top=$('.ding')[0];
	top.onclick=function(){
		animate(document.body,{scrollTop:0});
	}


















})

