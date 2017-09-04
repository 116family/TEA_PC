$(function(){
	function show(){
	var show_top=$('.show_top')[0];
	var show_lise=$('li',show_top);
	var choose_box=$('.choose_box')[0];
	var choose_divs=$('.choose',choose_box);

	Array.from(show_lise).forEach(function(val,index){
		val.onclick=function(){
			for(var i=0;i<show_lise.length;i++){
				choose_divs[i].style.zIndex='100';
				show_lise[i].style.color='#999'
			}
				choose_divs[index].style.zIndex='300';
				show_lise[index].style.color='#462327';
		}
	})
}
show();
	

	//轮播
	function diaoyong(obj){
		var choose=obj;
		var gun_box=$('.gun_box',obj)[0];
		console.log(gun_box);
		var gun_lise=$('li',gun_box);
		var dian_box=$('.dian_box',obj)[0];
		var dians= $('li',dian_box);
		var left=$('.left',obj)[0];
		var right=$('.right',obj)[0];
		var num=0;
		function move(type='r'){
			if(type=='r'){
				num++;
				if(num>=gun_lise.length){
					num=0;
				}
			}else if(type=='l'){
				num--;
				if(num<0){
					num=gun_lise.length-1;
				}
			}
			for(i=0;i<dians.length;i++){
				gun_lise[i].style.zIndex='2';
				dians[i].style.background='black';
			}
			gun_lise[num].style.zIndex='20';
			dians[num].style.background='#41A6ED';

		}
		Array.from(dians).forEach(function(val,index){
			val.onclick=function(){
				num=index-1;
				move();
			}
		})
		right.onclick=function(){
			move();
		}
		left.onclick=function(){
			move('l');
		}

}
var choose1=$('.choose')
  diaoyong(choose1[0]);
  diaoyong(choose1[1]);
  diaoyong(choose1[2]);
  diaoyong(choose1[3]);

})