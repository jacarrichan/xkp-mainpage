
    $(function () {
		$(".Content ul li").each(function() {
				$(this).css("display","none");
			});//隐藏全部
		$(".Content ul li").eq(1).css("display","block"); //显示点击的内容
		
		$(".title ul li").click(function(){
			var t=$(this).index(); //点击的位置
	       
			$(".Content ul li").each(function() {
				$(this).css("display","none");
			});//隐藏全部
			
			$(this).addClass("lion").siblings().removeClass("lion")
			$(".Content ul li").eq(t).css("display","block"); //显示点击的内容
	     } )
		 
		 $("#cdjv").css("display","none");
		 $("#cdj").click(function(){ $("#cdjv").css("display","block");});
		 $("#zcj").click(function(){ $("#cdjv").css("display","none");});
		 
		  $("#kyjv").css("display","none");
		 $("#chao").click(function(){ $("#kyjv").css("display","block");});
		 $("#ccj").click(function(){ $("#kyjv").css("display","none");});
		
		
	  })
	  
	  $(function () {
		$(".tab_box li").each(function() {
				$(this).css("display","none");
			});//隐藏全部
		$(".tab_box li").eq(0).css("display","block"); //显示点击的内容
		
		$(".tab-choose dt").click(function(){
			var n=$(this).index(); //点击的位置
	       
			$(".tab_box li").each(function() {
				$(this).css("display","none");
			});//隐藏全部
			
			$(this).addClass("choose_on").siblings().removeClass("choose_on")
			$(".tab_box li").eq(n).css("display","block"); //显示点击的内容
	     } )
		 
		 
		
	  })    