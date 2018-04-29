//header 菜单
$(function () {
    var banner = new Swiper('.banner',{
        autoplay: 5000,
        pagination : '.swiper-pagination',
        paginationClickable: true,
        lazyLoading : true,
        loop:true
    });

     $('a.slide-menu').on('click', function(e){
		var wh = $('div.wrapper').height();
		$('div.slide-mask').css('height', wh).show();
		$('aside.slide-wrapper').css('height', wh).addClass('moved');
	});
	
	$('div.slide-mask').on('click', function(){
		$('div.slide-mask').hide();
		$('aside.slide-wrapper').removeClass('moved');
	});
    
	countNum();

});

(function($, doc) {
	$.init();
	$.plusReady(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '支付宝'
		}, {
			value: '',
			text: '微信'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPicker');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

(function($, doc) {
	$.init();
	$.plusReady(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '现金'
		}, {
			value: '',
			text: '现金+积分'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPickerthree');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);


(function($, doc) {
	$.init();
	$.plusReady(function() {
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '',
			text: '安徽'
		}, {
			value: '',
			text: '湖南'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPickertwo');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText = JSON.stringify(items[0]);
			});
		}, false);
	
	
	});
})(mui, document);

function countNum(){	
	$(".you").on("tap",".plus",function(){
		var that = $(this);
		var n = Number(that.prev(".num").html());
		n++;		
		that.prev(".num").html(n);
	})

	$(".you").on("tap",".minus",function(){
		var that = $(this);
		var n = Number(that.next(".num").html());
		if(n>1){			
			n--;
			that.next(".num").html(n);
		}		
	})
}