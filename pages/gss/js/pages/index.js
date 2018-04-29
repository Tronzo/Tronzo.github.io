$(window).load(function(){
	$(".loading").addClass("loader-chanage");
	$(".loading").fadeOut(300);
})

$(function(){
	$(".banner img").load(function(){
		var ht = $(".banner").height();
		$(".productList").css({"top":ht+"px"});
	})
	
	mui.init({
	  pullRefresh : {
	    container:"#productList",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
	    up : {
	      offset:'0px',
	      height:50,//可选.默认50.触发上拉加载拖动距离
	      range:100,
	      auto:true,//可选,默认false.自动上拉加载一次
	      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
	      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
	      callback : pullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	    }
	  }
	});

	var count = 0;
	/**
	 * 上拉加载具体业务实现
	 */
	function pullupRefresh() {
		setTimeout(function() {
			mui('#productList').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
			var table = document.body.querySelector('.mui-table-view');
			var cells = document.body.querySelectorAll('.mui-table-view-cell');
			var li = document.createElement('li');
				li.className = 'mui-table-view-cell';
				li.innerHTML = '<span class="pic"><img src="images/pro.png"></span> <div class="prosite"> <span class="title"> <h1>新希望香蕉牛奶200ml*4</h1> <p>一款打败经典的新经典酸奶</p> </span> <div class="handle"> <a href="confirm.html" class="buynow" ><em>立即购买</em><i>&yen; 5.9</i></a> <a href="javascript:void(0)" class="shopcart" ><i class="iconfont gss-gouwuche"></i></a> </div> </div>';
			table.append(li);
		}, 1500);
	}

	if (mui.os.plus) {
		mui.plusReady(function() {
			setTimeout(function() {
				mui('#productList').pullRefresh().pullupLoading();
			}, 1000);

		});
	} else {
		mui.ready(function() {
			mui('#productList').pullRefresh().pullupLoading();
		});
	}

	$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000
	});

	mui('body').on('tap','a',function(){document.location.href=this.href;});
	mui(".productList").on("tap","li",function(){
		var type = $(this).attr("type");
		if(type == "package"){
			location.href = "packageDetail.html";
		}else{
			location.href = "detail.html";	
		}
	    
	});
})