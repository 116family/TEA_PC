$(function(){
	// 楼层返回顶部
	var top=$('.ding')[0];
	top.onclick=function(){
		animate(document.body,{scrollTop:0});
	}

	// 铁府布袋选项卡
	function tiefu(){
		var boxright=$('.boxright')[0];
		var select_top=$('ul',$('.boxright')[0])[1];
		var divs=$('li',select_top);
		var select_bottom=$('ul',$('.boxright')[0])[0];
		var lises=$('li',select_bottom);
		Array.from(divs).forEach(function(val,index){
			val.onclick=function(){
				for( var i=0;i<divs.length;i++){
					divs[i].classList.remove('active');
					lises[i].style.zIndex='2';	
				}
				this.classList.add('active');
				lises[index].style.zIndex='3';
			}
		});
	}
	tiefu();










})