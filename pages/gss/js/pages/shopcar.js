$(".allcheck .option").on("tap",function(e){
	setTimeout(function(){
		var flag = $("#allcheck").prop("checked");	
		if(flag){
			$(".xuan").find("input[name='checkod']").prop("checked",true);
			var n = $(".xuan").length;
			$(".total .num").html(n);
		}else{
			$(".xuan").find("input[name='checkod']").prop("checked",false);
			$(".total .num").html(0);
		}
	},200)
	
})