$(function(){
	function banner(){
		var images=$('.photo_11',$('.banner')[0]);
		var lise=$('ol',$('.dianbox')[0]);
		var banner=$('.banner')[0];	
		var leftbtn=$('.leftbtn')[0];
		var rightbtn=$('.rightbtn')[0];
		var num=0;
		function move(type='r'){
			if(type=='r'){
				num++;
				if(num>=images.length){
					num=0;
				}
			}else if(type=='l'){
				num--;
				if(num<0){
					num=images.length-1;
				}
			}
			
			for(var i=0;i<images.length;i++){
				images[i].style.zIndex='3';
				lise[i].style.background='#fff';
			}
			images[num].style.zIndex='5';
			lise[num].style.background='#c77c51';
		}
		var t=setInterval(function(){
			move();
		},2000);

		banner.onmouseenter=function(){
			clearInterval(t);
		}
		banner.onmouseleave=function(){
			t=setInterval(function(){
				move();
			},2000);
		}

		Array.from(lise).forEach(function(val,index){
			val.onmouseenter=function(){
				num=index-1;
				move();
			}
		})
		leftbtn.onclick=function(){
			move('l');
		}
		rightbtn.onclick=function(){
			move();
		}
	}
	banner();


	// 楼层返回顶部
	var top=$('.ding')[0];
	top.onclick=function(){
		animate(document.body,{scrollTop:0});
	}


})