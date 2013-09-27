$(function(){
	initContain();
	initFooter();
	initOpacity();
    initshowLights();
	handle = setInterval("light();",2500);
});

function initContain(){
	$(".casew").mouseover(function(){
		$(this).stop().animate({"bottom":"30px"},"slow");
		$(this).find("div").show();
		$(this).children(".x").show();
		$(this).children(".x").stop().animate({"left":"80px"},"normal");
		$(this).children(".y").show();
		$(this).children(".y").stop().animate({"right":"80px"},"normal");
	});
	$(".casew").mouseout(function(){
		$(this).stop().animate({"bottom":"14px"},"slow");
		$(this).find("div").hide();
		$(this).children(".x").hide();
		$(this).children(".x").stop().animate({"left":"50px"},"fast");
		$(this).children(".y").hide();
		$(this).children(".y").stop().animate({"right":"50px"},"fast");
	});



	$(".readspan").hover(function(){
		$(this).fadeIn("slow");
	},function(){
		$(this).fadeOut("slow");
	});
}


function initFooter(){
	$(window).scroll(function(){
		var s = $(this).scrollTop();
		if (s >= 1200) {
			$(".footer").stop().animate({"bottom":"0px"},1500);
		}else{
			$(".footer").stop().animate({"bottom":"-267px"},1000);
		}
	});
}


function initOpacity(){
	$(".showopacity").hover(function(){
	    $(this).animate({"opacity":"1"},1000);
	},function(){
		$(this).animate({"opacity":"0"},1000);
	});
}


var curIndex = 1;
function light(){
	//alert(".btns"+curIndex);
	var w = $(window).width();
	for (var i = 1; i <= 9; i++) {
		var ele1 = ".btns"+i;
	    $(ele1).removeClass("btnfire"+i);
        
        var clas = ".btns" + i;
         var wid = $(clas).attr("id");
         var left = w * (i-1);
         var show1 = "#shows" + i;
         //$(show1).css({"left":left});


	    var show = "#shows" + i;
        $(show).fadeOut("slow");
	}
	var ele = ".btns"+curIndex;
	$(ele).addClass("btnfire"+curIndex);
    
    var show = "#shows" + curIndex;
    $(show).fadeIn("slow");
    //var w = $(window).width();
    
    //$(".shows").stop().animate({"left":(curIndex -1)-w});
     // left  =  left - w
	curIndex = curIndex % 9 +1;
}



function initshowLights(){
    var w = $(window).width();
    for (var i = 1; i <= 9; i++) {
         var clas = ".btns" + i;
         var wid = $(clas).attr("id");
         var left = w * (i-1);
         var show1 = "#shows" + i;
         //$(show1).css({"left":left});
    }
    
	$(".btnsf").click(function(){
		//clearInterval(handle);
		var index = $(this).attr("id");
		for (var i = 1; i <= 9; i++) {
		   var ele2 = ".btns"+i;
	       $(ele2).removeClass("btnfire"+i);
	    }
    	var ele3 = ".btns"+index;
    	$(ele3).addClass("btnfire"+index);
    	curIndex = index;
    	//handle = setInterval("light();",2500);
	});
}