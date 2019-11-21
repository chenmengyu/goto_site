//根em尺寸
$(document).ready(function() {
	//设置fontsize
	var deviceHeight = document.documentElement.clientHeight;
	document.documentElement.style.fontSize = deviceHeight / 80 + 'px';
	window.onresize = function() {
		document.documentElement.style.fontSize = document.documentElement.clientHeight / 80 + 'px';
	}
//导航交互
var whichpage = $("body").attr("data-page");
$("#nav .li[data-type=" + whichpage + "]").addClass("s");
$("#nav .li").hover(
  function () {
	$("#nav .li").removeClass("s");
    $(this).addClass("s");
	var whichhover = $(this).attr("data-type");
	$(".subnavin").removeClass("s");
	$(".subnavin[data-type=" + whichhover + "]").addClass("s");
  }
);
$(".subnavin").hover(
  function () {
  },
  function () {
    $("#nav .li").removeClass("s");
	$(".subnavin").removeClass("s");
	$("#nav .li[data-type=" + whichpage + "]").addClass("s");
  }
);
//子导航交互
$(".subnavin .r1 a").hover(
  function () {
	$(this).siblings().removeClass("s");
    $(this).addClass("s");
	$(this).parent().siblings(".r2").eq($(this).index()).addClass("s").siblings().removeClass("s");
  }
);
$(".subnavin .r2 a").hover(
  function () {
    $(this).addClass("s");
  },
  function () {
    $(this).removeClass("s");
  }
);
//首页产品悬浮
$("#featured .li").hover(
  function () {
    $(this).addClass("s");
  },function (){
	$("#featured .li").removeClass("s"); 
  }
);
//首页产品切换
$("#featured .title .r a").hover(
  function () {
	$(this).siblings().removeClass("s");
    $(this).addClass("s");
	$(this).parent().parent().siblings(".list").eq($(this).index()).addClass("s").siblings().removeClass("s");
  }
);
//首页产品小圆点切换
$("#featured .dot a:eq(0)").hover(
  function () {
	$(this).siblings().removeClass("s");
    $(this).addClass("s");
	$(".listin .li").hide();
	$(this).parents().siblings(".listin").find(".li:lt(4)").show();
  }
);
$("#featured .dot a:eq(1)").hover(
  function () {
	$(this).siblings().removeClass("s");
    $(this).addClass("s");
	$(".listin .li").hide();
	$(this).parents().siblings(".listin").find(".li:eq(4)").show();
	$(this).parents().siblings(".listin").find(".li:eq(5)").show();
	$(this).parents().siblings(".listin").find(".li:eq(6)").show();
	$(this).parents().siblings(".listin").find(".li:eq(7)").show();
  }
);
$("#featured .dot a:eq(2)").hover(
  function () {
	$(this).siblings().removeClass("s");
    $(this).addClass("s");
	$(".listin .li").hide();
	$(this).parents().siblings(".listin").find(".li:gt(6)").show();
  }
);
//room
$("#room .li").hover(
  function () {
    $(this).addClass("s");
  },function (){
	$("#room .li").removeClass("s"); 
  }
);
//产品页鼠标悬浮
$("#Plist .list .li").hover(
  function () {
    $(this).addClass("s");
  },function (){
	$("#Plist .list .li").removeClass("s"); 
  }
);
//产品页筛选
$(".agroup.radio a").click(
  function () {
	$(this).siblings().removeClass("s");
    $(this).addClass("s");
  }
);
$(".agroup.multiselect a").toggle(
  function () {
    $(this).addClass("s");
  },
  function () {
	$(this).removeClass("s");
  }
);
//列表页伸缩
$(".filter .li .tt img").toggle(
  function () {
    $(this).addClass("s");
	$(this).parents().siblings(".agroup").addClass("s")
  },
  function () {
	$(this).removeClass("s");
    $(this).parents().siblings(".agroup").removeClass("s")
  }
);
//详情页画册
$("#detail .gallery .l .prev").click(
	function () {
		imgnum = $('.picboxin img').length - 3;
		h = -imgnum*113;
		currentPos = parseInt($('.picboxin').css('top'));
		if (currentPos > h) {
			$(".picboxin").animate({top:"-="+113}, 50);
		}
	}
);

$("#detail .gallery .l .next").click(
	function () {
		currentPos = parseInt($('.picboxin').css('top'));
		if (currentPos < 0) {
			$(".picboxin").animate({top:"+="+113}, 50);
		}
	}
);
$("#detail .gallery .l .picboxin img").click(
  function () {
	var src = $(this).attr("src");
	$(this).siblings().removeClass("s");
    $(this).addClass("s");
	$(".mainpic").attr("src",src);
  }
);
//详情页弹计算器
$("#cacl").click(
	function () {
		type = $(this).attr("data-type");
		$("#mask").show();
		$(".pop[data-type=" + type + "]").show();
	}
);
$(".shut a").click(
	function () {
		$(this).parents(".pop").hide();
		$("#mask").hide();
	}
);
//详情页切换内容底部
$(".detailmenu .dli").click(
	function () {
		$(this).addClass("s");
		$(this).siblings().removeClass("s");
	}
);
});