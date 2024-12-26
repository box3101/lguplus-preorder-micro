const MoveT = (function () {
  return {
    preorder: function () {
      var hiddenUrl;
      const urlParams = new URL(location.href).search;
      console.log(urlParams);
      hiddenUrl = "https://www.lguplus.com/mypage/prebook" + urlParams;
      console.log(hiddenUrl);
      $("#btnStep3").attr({
        "data-gtm-click-url": hiddenUrl,
      });

      window.open(hiddenUrl, "_blank");
    },

    iPhone16Pro: function () {
      var hiddenUrl;
      const urlParams = new URL(location.href).search;
      console.log(urlParams);
      hiddenUrl =
        "https://www.lguplus.com/mobile/device/apple/iphone-16-pro-256gb/UIP16PR-256" +
        urlParams;
      console.log(hiddenUrl);
      $("#btnStep3").attr({
        "data-gtm-click-url": hiddenUrl,
      });

      window.open(hiddenUrl, "_blank");
    },

    iPhone16ProMax: function () {
      var hiddenUrl;
      const urlParams = new URL(location.href).search;
      console.log(urlParams);
      hiddenUrl =
        "https://www.lguplus.com/mobile/device/apple/iphone-16-promax-256gb/UIP16PM-256" +
        urlParams;
      console.log(hiddenUrl);
      $("#btnStep3").attr({
        "data-gtm-click-url": hiddenUrl,
      });

      window.open(hiddenUrl, "_blank");
    },

    iPhone16: function () {
      var hiddenUrl;
      const urlParams = new URL(location.href).search;
      console.log(urlParams);
      hiddenUrl =
        "https://www.lguplus.com/mobile/device/apple/iphone-16-256gb/UIP16-256" +
        urlParams;
      console.log(hiddenUrl);
      $("#btnStep3").attr({
        "data-gtm-click-url": hiddenUrl,
      });

      window.open(hiddenUrl, "_blank");
    },

    iPhone16Plus: function () {
      var hiddenUrl;
      const urlParams = new URL(location.href).search;
      console.log(urlParams);
      hiddenUrl =
        "https://www.lguplus.com/mobile/device/apple/iphone-16-plus-256gb/UIP16PL-256" +
        urlParams;
      console.log(hiddenUrl);
      $("#btnStep3").attr({
        "data-gtm-click-url": hiddenUrl,
      });

      window.open(hiddenUrl, "_blank");
    },
  };
})();

/* modalAlertPop open 공통 */
function modalAlertPop(mId) {
  // backdrop();
  var openPopId = "#" + mId;
  // console.log(openPopId);
  $(openPopId).modal({ keyboard: false, backdrop: "static" });
  $(openPopId).modal("show");
  function backdrop() {
    $(".modal-backdrop.in").addClass("over", function () {
      $("body").css("overflow", "hidden");
    });
    $(".close-over").on("click", function () {
      //,'.confirm'
      $(openPopId).modal("hide");
      $(".modal-backdrop.in").removeClass("over");
      $("body").attr("style", "");
    });
  }

  var mIdList = new Array();
  mIdList[0] = "myModalaler_order_stop3";

  if (mIdList.includes(mId)) {
    backdrop();
    /*$(openPopId).removeClass('in');
		$(openPopId).modal("show");*/
  }
}

function modalAlertClose(mId) {
  var openPopId = "#" + mId;

  var mIdList = new Array();
  mIdList[0] = "myModalaler_alarm_stop";
  mIdList[1] = "myModalalert_marketAgree";
  mIdList[2] = "myModalalert_reserve";
  //mIdList[3] = "myModalaler_order_stop";
  //mIdList[4] = "myModalaler_order_stop2";
  mIdList[5] = "myModalaler_order_stop3";
  //mIdList[6] = "myModalaler_order_stop4";
  mIdList[7] = "policyModal";
  mIdList[8] = "myModalalert_benefit_summary";
  //mIdList[4] = "myModal01";

  //myModal01
  if (mIdList.includes(mId)) {
    $("#" + mId).removeClass("in");
    if (openPopId == "#myModalaler_order_stop3") {
      $(openPopId).closest(".modal.in").removeClass("in");
      $("body").attr("style", "");
    }
  } else {
    $(".modal.in").removeClass("in");
  }

  setTimeout(function () {
    var openPopId = "#" + mId;
    $(openPopId).modal("hide");
    $(".modal-backdrop.in").removeClass("over");
    if (mIdList.includes(mId)) {
    } else {
      $("html").removeAttr("style");
      $("body").removeAttr("style");
    }
  }, 300);
}
function closeVideo(videoId) {
  console.log(videoId);
  var iframe = $("#" + videoId).find("iframe")[0];
  var src = $(iframe).attr("src");
  $(iframe).attr("src", src);
}

function changeReqPreCnt() {
  console.log("call__changeReqPreCnt");
  $.ajax({
    url: "/presale/changeReqPreCnt",
    data: "",
    type: "POST",
    cache: false,
    success: function (data) {
      var d_start = data.data3;
      var d_gap = data.data2 - d_start;
      var d_min = data.data2 - 50;
      if (d_min > d_gap) {
        $("#reqPReCnt").attr("data-start", d_min);
      } else {
        $("#reqPReCnt").attr("data-start", d_start);
      }
      //$("#reqPReCnt").attr('data-start', data.data3);
      $("#reqPReCnt").attr("data-end", data.data2);
      //$("#reqPReCnt").html(data.data2);
    },
    error: function () {
      alert("오류가 발생하였습니다.");
    },
  });
}

/* Medialog : prototype set [S] */

/* 문자열 공백 검사 */
String.prototype.isEmpty = function () {
  return !this.match(/\S/);
};

//오늘날짜 가져오기
$(document).ready(function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"; // 스크롤 복원 기능 비활성화
  }
  window.scrollTo(0, 0); // 새로고침 시 스크롤을 최상단으로 이동

  var now = new Date();

  //    var month=now.getMonth()+1;//월
  $(".kv_info_box .month").text(month);

  var date = now.getDate(); //일
  $(".kv_info_box .date").text(date);

  var days = ["일", "월", "화", "수", "목", "금", "토"];
  var d = new Date(); //요일
  var day = days[d.getDay()];
  $(".kv_info_box .day").text(day);

  var now = new Date();

  var month = now.getMonth() + 1; //월
  $(".bottom-txt .month").text(month);

  var date = now.getDate(); //일
  $(".bottom-txt .date").text(date);

  var days = ["일", "월", "화", "수", "목", "금", "토"];
  var d = new Date(); //요일
  var day = days[d.getDay()];
  $(".bottom-txt .day").text(day);

  var audio = document.getElementById("edition_audio");
  var isPlaying = false;

  $(".sound-btn").click(function () {
    console.log("before audio check == ", isPlaying);
    var targetEl = $(this);

    if (isPlaying) {
      targetEl.removeClass("off");
      targetEl.addClass("on");
      audio.pause();
    } else {
      targetEl.removeClass("on");
      targetEl.addClass("off");
      audio.play();
    }
    isPlaying = !isPlaying;

    console.log("after audio check == ", isPlaying);

    audio.addEventListener("ended", function () {
      targetEl.removeClass("off");
      targetEl.addClass("on");
      isPlaying = false;
    });
  });
});

$(function () {
  //전체 동의
  $(".allchk").on("click", function () {
    console.log("comm---ch;");
    if ($(this).is(":checked")) {
      $(".allchk").hasClass("allchk on");
      $(".chkBx").prop("checked", true);
      $(".step-complete").addClass("is-checked");
      $("#btnStep4").attr("disabled", false);
    } else {
      $(".allchk").hasClass("allchk");
      $(".chkBx").prop("checked", false);
      $(".step-complete").removeClass("is-checked");
      $("#btnStep4").attr("disabled", true);
    }
  });

  $(".chkBx").on("click", function () {
    var targetId = $(this).attr("id");
    //선택약관 4번 선택 시 1번 2번 해지 불가
    if (targetId == "alram_agree03" || targetId == "alram_agree04") {
      if ($("#alram_agree06").is(":checked")) {
        $("#alram_agree06").prop("checked", false);
      }
    }

    //약관 > 필수 약관 클릭 시 상단 약관 동의 시 사전 알람 신청 완료 버튼 활성화
    if (targetId == "alram_agree01") {
      if ($(this).is(":checked")) {
        $(".step-complete").addClass("is-checked");
        $("#btnStep4").attr("disabled", false);
      } else {
        $(".step-complete").removeClass("is-checked");
        $("#btnStep4").attr("disabled", true);
      }
    }

    if (targetId == "alram_agree06") {
      if ($(this).is(":checked")) {
        $("#alram_agree03").prop("checked", true);
        $("#alram_agree05").prop("checked", true);
      }
    }

    var is_checked = true;
    $(".chkBx").each(function () {
      is_checked = is_checked && $(this).is(":checked");
    });
    $(".allchk").prop("checked", is_checked);
  });

  $(".chkBx2").on("click", function () {
    var targetId = $(this).attr("id");
    console.log(targetId);
    if (targetId == "alram_lglrps_agree01") {
      if ($(this).is(":checked")) {
        $("#certificationUnder14Btn").removeAttr("disabled");
      } else {
        $("#certificationUnder14Btn").attr("disabled", "disabled");
      }
    }
    ///사전예약
    if (targetId == "preorder_lglrps_agree01") {
      if ($(this).is(":checked")) {
        $("#preorder_footer_btn4").removeAttr("disabled");
      } else {
        $("#preorder_footer_btn4").attr("disabled", "disabled");
      }
    }
  });
});

/* 챗봇 */
function ubotStat() {
  var tip = $(".ubot_area .bg_tooltip");

  if (tip.hasClass("show")) {
    tip.hide();
    tip.removeClass("show");
    setTimeout(function () {
      ubotStat();
    }, 5000);
  } else {
    tip.show();
    tip.addClass("show");
    setTimeout(function () {
      ubotStat();
    }, 3000);
  }
}
function pageCall(str, str2) {
  dataLayer.push({
    event: "page_view",
    behavior_channel_type: "마이크로사이트",
    behavior_host_type: "PC",
    site_category: "PC|마이크로사이트|기기예약",
    site_type: "기기예약",
    content_group: str,
    mkt_event_name: str2,
  });
  console.log(dataLayer);
}
/*function modalScroll(){
	var cont = $('.modal.fullSize .modal-dialog');
	var contW = $(window).width();
	var contH = $(window).height();
	
	console.log(contW, contH);
	
	if(contW < 1280 || contH < 1000){
		cont.attr('style','overflow:scroll');
	}else {
		cont.attr('style','');
	}
}*/

/*아이폰14 사전알람 탑버튼*/
$(window).on("scroll", function () {
  var nowScroll = $(this).scrollTop();

  if (nowScroll >= 100) {
    $(".ip283_top").addClass("on");
  } else {
    $(".ip283_top").removeClass("on");
  }
});

$(window).resize(function () {
  //modalScroll();
});

/* document ready */
$(document).ready(function () {
  header_fixed();

  //modalScroll();
  //float버튼에 의한 page하단 padding조절
  //	$("footer").css("paddingBottom","98px");

  /* gnb */
  $(".preGnb")
    .on("mouseenter", function () {
      //$("header .bottom-area").stop().animate({"height":340},50,'easeInOutExpo');
      $("header .bottom-area").addClass("active");
      $(".subCty").stop(true, true).animate({ height: 250 }, 200).show();
      $(".preGnb li, .subCty").removeClass("active");
    })
    .on(" mouseleave", function () {
      $(".subCty").hide();
      //$("header .bottom-area").removeClass("active").stop(true,true).animate({"height":90}, 100);
      $("header .bottom-area").removeClass("active");
    });
  $(".preGnb li")
    .on("mouseenter", function () {
      $(this).find(".mainCty").addClass("on");
    })
    .on(" mouseleave", function () {
      $(this).find(".mainCty").removeClass("on");
    });

  /* header scroll effect*/
  //현재 스크롤값 초기화 변수
  var lastScrollTop = 0;
  $(window).scroll(function () {
    /* 스크롤 위아래 감지 */
    var currentScrollTop = $(this).scrollTop();

    /* copied fromd contBox 240913 s */
    if (currentScrollTop >= 100) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
    /* copied fromd contBox 240913 e */
    var header_vi = $(".header_preOrder.ip283_header_type2");
    if (currentScrollTop > lastScrollTop) {
      /* 아래로 스크롤 할 때 */
      header_vi.addClass("on");
      $(".subCty").css("display", "none");
      if ($(".ip283_cnt4 #save").hasClass("ready")) {
        header_vi.addClass("on");
      } else {
        header_vi.removeClass("on");
      }
    } else {
      /* 위로 스크롤 할 때 */
      header_vi.removeClass("on");
      if ("#deviceInfo li.active".length < 0) {
        //alert('h');
        $("#deviceInfo > li:first").trigger("click");
      }
      if ($(".nav_st").hasClass("sticky")) {
        header_vi.addClass("on");
      } else {
        if ($("#deviceInfo > li.active").length < 1) {
          $("#deviceInfo > li:first").trigger("click");
        }
        if ($(".ip283_cnt3 #save").hasClass("ready")) {
          //console.log('stickymode');
          header_vi.addClass("on");
        }
      }
      //console.log('222')
    }
    lastScrollTop = currentScrollTop;
  });
  /* Quick menu Replace for 240913*/
  $("#topBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });

  /* label, checkbox in modal */
  $(".pre_tit input").on("click", function () {
    if ($(this).prop("checked")) {
      $(this).siblings("label").addClass("on");
    } else {
      $(this).siblings("label").removeClass("on");
    }
  });
  /* 옵션 선택 */
  $(".sel_opt li button").on("click", function () {
    var $choiceLi = $(this).closest("li");

    if ($choiceLi.hasClass("disable")) {
      return false;
    } else {
      $choiceLi.addClass("on").siblings("li").removeClass("on");
    }
    // 색상 선택 시 텍스트 변경
    var $choiceUl = $(this).closest(".sel_opt");
    $choiceUl.parent().find(".on_txt").text($(this).text());
  });

  // 약관 열기/닫기
  $(document).on("click", ".pre_list.checkBox .btnToggle", function () {
    var agreeBox = $(this).parents(".pre_list").find(".agreeBox");

    if (agreeBox.is(":visible")) {
      agreeBox.slideUp(200);
      $(this).removeClass("on");
    } else {
      agreeBox.slideDown(200);
      $(this).addClass("on");
    }
    return false;
  });

  /* 약관 열기/닫기(리뉴얼 이후 이벤트에서만 사용, 사용 필요할 경우 else 주석 해제 후 사용) */
  $(".pre_tit .pre_toggle").on("click", function () {
    var txtBox = $(this).parent().next(".pre_txt");

    if (txtBox.is(":visible")) {
      txtBox.slideUp(200);
      if ($(this).closest(".modal").hasClass("_event")) {
        $(this).removeClass("on");
      } else {
        $(this).removeClass("on").text("읽어보기");
      }
    } else {
      txtBox.slideDown(200);
      if ($(this).closest(".modal").hasClass("_event")) {
        $(this).addClass("on");
      } else {
        //$(this).addClass('on').text('닫기');
      }
    }
    return false;
  });

  $(".modal").attr("data-backdrop", "static");

  var now = window.location.href;
  var logo_img = $(".header_preOrder h2 a");

  /* 	if(now.includes("edition")){
		$(".foldable").removeClass("on");		
		$(".foldable_edi").addClass("on");
		$(".bottom-area").addClass("edition");
		$("footer").addClass("edition");
		//$("header.header_alarm2.ip283_header_type2").css('display','none');
		$(".edition_btn").css('display','none');
	}else if(now.includes("coming")){
		//커밍순 페이지 일때	
		//$("header.ip283_header_type2").css('display','none');
		//$("header.header_alarm2.ip283_header_type2").css('display','block');
		//$("header.header_alarm2.ip283_header_type2 .alarm_btn").css('display','none');
		$("#quickMenu,.ip283_btn_wrap.galaxy_foldable6_R").css('display','none');
		$(".footer_wrap").css('display','block');
		
	}else {
		//$("header.header_alarm2.ip283_header_type2").css('display','none');
	}*/

  //tab wrap
  $(".section-object-wrap .tab_wrap li").click(function () {
    var activeTab = $(this).attr("data-tab");
    $(".tab_wrap li").removeClass("active");
    $(".tab_cont").removeClass("active");
    $(this).addClass("active");
    $("#" + activeTab).addClass("active");
  });
  //tab wrap
  //inner_tab_wrap
  $(".section-object-wrap .inner_tab_wrap.inner1 li").click(function () {
    var activeTab = $(this).attr("data-tab");
    $(".inner_tab_wrap.inner1 li").removeClass("active");
    $(".inner_tab_cont.inner1").removeClass("active");
    $(this).addClass("active");
    $("#" + activeTab).addClass("active");
  });
  //inner_tab_wrap2
  $(".section-object-wrap .inner_tab_wrap.inner2 li").click(function () {
    var activeTab = $(this).attr("data-tab");
    $(".inner_tab_wrap.inner2 li").removeClass("active");
    $(".inner_tab_cont.inner2").removeClass("active");
    $(this).addClass("active");
    $("#" + activeTab).addClass("active");
  });
  //modal-tab
  $(".modal-tab_wrap li").click(function () {
    var activeTab = $(this).attr("data-tab");
    $(".modal-tab_wrap li").removeClass("active");
    $(".modal-tab_cont").removeClass("active");
    $(this).addClass("active");
    $("#" + activeTab).addClass("active");
  });
  //tab in change image
  $(".device-color-chip li button").on("click", function () {
    var i = $(this).closest("li").index();
    $(this)
      .parent()
      .parent()
      .find("li")
      .removeClass("active")
      .eq(i)
      .addClass("active");

    var targetData = $(this).parent().attr("data-src");
    var targetImg = $(this)
      .parent()
      .parent()
      .siblings(".device-img")
      .find("img");

    targetImg.removeClass("change");
    setTimeout(() => {
      targetImg.addClass("change");
      targetImg.attr("src", targetData);
    }, 300);
  });
  $(".device-detail > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().hide();
    } else {
      $(".device-detail > a").removeClass("active");
      $(".device-detail > a").next().hide();
      $(this).addClass("active");
      $(this).next().show();
    }
    return false;
  });
  $("#accordion2 a").on("click", function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(this).next().hide();
    } else {
      $("#accordion2 a").removeClass("on");
      $("#accordion2 a").next().hide();
      $(this).addClass("on");
      $(this).next().show();
    }
    return false;
  });

  /*	$('.device-btn-wrap button').on('click', function(){
		
		var checkModel = $('.tab_wrap').find('li.active a').attr('data-value');
		var checkSize = $(this).closest('.tab_cont').find('.inner_tab_wrap li.active').attr('data-value');
		var checkColor = $(this).closest('.device-box').find('.device-color-chip li.active').attr('data-value');
		
		if($('.ip283_wrap.galaxy_foldable6_R').hasClass('edition')){
			PreorderCtrl.open('20240002','PH001', 'SZ001', checkColor);
		}else{
			PreorderCtrl.open(checkModel,'PH001', checkSize, checkColor);
		}
		
	});*/
});
function headerPeorderBtn() {
  if ($(".ip283_wrap.galaxy_foldable6_R").hasClass("edition")) {
    PreorderCtrl.open();
  } else {
    PreorderCtrl.open();
  }
}
/* document ready end */

/* 윈도우 팝업 화면 중앙 위치 @author Medialog */
function popupCenter(url, title, w, h, popOpts) {
  // Fixes dual-screen position                          Most browsers       Firefox
  var dualScreenLeft =
    window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop =
    window.screenTop != undefined ? window.screenTop : screen.top;

  var width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  var height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  var left = width / 2 - w / 2 + dualScreenLeft;
  var top = height / 2 - h / 2 + dualScreenTop;
  var newWindow = window.open(
    url,
    title,
    "width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left +
      ", " +
      popOpts
  );

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
  return newWindow;
}

// 360도 뷰
$.fn.view360 = function (images) {
  var $rotateBox = $(this),
    $imgs = $rotateBox.find(".images");

  $.each(images, function (i, v) {
    $imgs.append('<img src="' + v + '" data-nth="' + i + '" />');
  });

  // 동적 css 삽입
  $imgs.find("img").css({ "z-index": "1", display: "none" });
  $imgs.find("img").first().css({ "z-index": "2", display: "block" });

  // 슬라이더 이벤트
  return $rotateBox.find(".slider").slider({
    min: 0,
    max: images.length,
    value: 0,
    slide: setView,
    change: setView,
  });

  function setView(evt, ui) {
    var target = ui.value % images.length;
    $imgs.find("img").css({ "z-index": "1", display: "none" });
    $rotateBox
      .find(".images img[data-nth=" + target + "]")
      .css({ "z-index": "2", display: "block" });
  }
};

/* GNB 메뉴 페이지 인식*/
$(function () {
  var subPage = new Array();
  console.log("subPage == ", subPage);

  var url = location.href;

  //혜택 모아보기 페이지에서의 고정값
  /*    	subPage[0] = "/benefit_preorder/discount";
    	subPage[1] = "/benefit_preorder/direct";
    	subPage[2] = "/benefit_preorder/creditcard";
    	subPage[3] = "/benefit_preorder/freegift";
    	subPage[4] = "/benefit_preorder/uplusbenefit";*/

  var getAr0 = url.indexOf(subPage[0]);
  var getAr1 = url.indexOf(subPage[1]);
  var getAr2 = url.indexOf(subPage[2]);
  var getAr3 = url.indexOf(subPage[3]);
  var getAr4 = url.indexOf(subPage[4]);

  console.log(getAr0);

  if (getAr0 != -1) {
    $(".bnf_btn1").trigger("click");
  }
  if (getAr1 != -1) {
    $(".bnf_btn2").trigger("click");
  }
  if (getAr2 != -1) {
    $("#sj3").trigger("click");
  }
  if (getAr3 != -1) {
    $("#sj4").trigger("click");
  }
  if (getAr4 != -1) {
    $("#sj5").trigger("click");
  }
});

//gnb action
function header_fixed() {
  // 플로트 탭이 없으면 노노
  if ($(".floatTab").length === 0) return;

  var element_position = $(".floatTab").offset().top - 90;

  if ($(window).scrollTop() > 0) {
    $("header").addClass("on");
  } else if ($(window).scrollTop() < 1) {
    $("header").removeClass("on");
  }

  //page tab fixed
  $(window).scroll(function () {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if (y_scroll_pos > scroll_pos_test) {
      $(".floatTab").addClass("on");
      $(".tabWrap.pageTab").addClass("on");
    } else if (y_scroll_pos < scroll_pos_test) {
      $(".floatTab").removeClass("on");
      $(".tabWrap.pageTab").removeClass("on");
    }
  });
}
//앵커

function age14_under_set() {
  $(".is-scroll > .step1_wrap").hide();
  $(".is-scroll > .step2_wrap").hide();
  $(".under14_container").show();
}
function age14_under_off() {
  $(".is-scroll > .step1_wrap").show();
  $(".is-scroll > .step2_wrap").show();
  $(".under14_container").hide();
}

//메인 카운터 스크립트 end
/*전체 모달 닫기 팝업*/
function Modalhide() {
  $(".modal").modal("hide");
  $("html").removeAttr("style");
}

function initializeCounter(targetDate, elementIds) {
  //console.log("counter..init");
  var dday = new Date(targetDate).getTime(); // End time
  var timer = setInterval(function () {
    var now = new Date().getTime(); // Current time
    var distance = dday - now;

    if (distance < 1000) {
      clearInterval(timer);
      $("#" + elementIds.secondsTens).attr("class", "num0");
    } else {
      var d = Math.floor(distance / (1000 * 60 * 60 * 24));
      var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((distance % (1000 * 60)) / 1000);

      var s1 = (s < 10 ? "0" : "") + s;
      var m1 = (m < 10 ? "0" : "") + m;
      var h1 = (h < 10 ? "0" : "") + h;
      var d1 = (d < 10 ? "0" : "") + d;

      updateHtml(elementIds, d1, h1, m1, s1);
    }
  }, 1000);
}

function updateHtml(ids, d, h, m, s) {
  $("#" + ids.daysTens)
    .html(d[0])
    .attr("class", "num" + d[0]);
  $("#" + ids.daysUnits)
    .html(d[1])
    .attr("class", "num" + d[1]);
  $("#" + ids.hoursTens)
    .html(h[0])
    .attr("class", "num" + h[0]);
  $("#" + ids.hoursUnits)
    .html(h[1])
    .attr("class", "num" + h[1]);
  $("#" + ids.minutesTens)
    .html(m[0])
    .attr("class", "num" + m[0]);
  $("#" + ids.minutesUnits)
    .html(m[1])
    .attr("class", "num" + m[1]);
  $("#" + ids.secondsTens)
    .html(s[0])
    .attr("class", "num" + s[0]);
  $("#" + ids.secondsUnits)
    .html(s[1])
    .attr("class", "num" + s[1]);
}

function startCounter(startDate, endDate, elementIds, wrapperClass) {
  $(wrapperClass).show();
  var st = setInterval(function () {
    var startday = new Date(startDate).getTime(); // Start time
    var nowday = new Date().getTime(); // Current time
    var start = startday - nowday;
    if (start < 1000) {
      initializeCounter(endDate, elementIds);
      clearInterval(st);
    }
  }, 1000);
}

// Element IDs configuration for counter2
const elementIds2 = {
  daysTens: "d1",
  daysUnits: "d0",
  hoursTens: "h1",
  hoursUnits: "h0",
  minutesTens: "m1",
  minutesUnits: "m0",
  secondsTens: "s1",
  secondsUnits: "s0",
};

// Element IDs configuration for counter3
const elementIds3 = {
  daysTens: "d11",
  daysUnits: "d00",
  hoursTens: "h11",
  hoursUnits: "h00",
  minutesTens: "m11",
  minutesUnits: "m00",
  secondsTens: "s11",
  secondsUnits: "s00",
};

const elementIds4 = {
  daysTens: "d111",
  daysUnits: "d000",
  hoursTens: "h111",
  hoursUnits: "h000",
  minutesTens: "m111",
  minutesUnits: "m000",
  secondsTens: "s111",
  secondsUnits: "s000",
};

// Start counters
startCounter(
  "Jun 20,2024,10:00:00",
  "Sep 20,2024,07:59:59",
  elementIds2,
  ".iphone16_R .timerWrap.ty2"
);
startCounter(
  "Jun 20,2024,10:00:00",
  "Sep 20,2024,07:59:59",
  elementIds3,
  ".timerWrap.bnf_timer"
);
