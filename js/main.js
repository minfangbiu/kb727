(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-57120854-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

$( document ).ready(function() {
  $("[rel='tooltip']").tooltip();
});

$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

$(window).scroll(function() {
  $('.toSlideRight').each(function(){
    var itemPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

    if (itemPos < topOfWindow+600) {
      $(this).addClass("slideRight");
    }
  });

  $('.toSlideDown').each(function(){
    var itemPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

    if (itemPos < topOfWindow+600) {
      $(this).addClass("slideDown");
    }
  });
});

jQuery.scrollDepth({
  elements: ['#portfolio', '#contact'],
  percentage: false,
  nonInteraction: false,
});




<script>//搜索功能
        var oldKey0 = "";
        var index0 = -1;var oldCount0 = 0;
        var newflag = 0;
        var currentLength = 0;

        function wordSearch(flg) {
            var key = $("#key").val(); //取key值
            if (!key) {
                return; //key为空则退出
            }
            getArray();
            focusNext(flg);

        }

        function focusNext(flg) {
            if (newflag == 0) {//如果新搜索,index清零
                index0 = 0;
            }
            if (!flg) {
                if (oldCount0 != 0) {//如果还有搜索
                    if (index0 < oldCount0) {//左边如果没走完，走左边
                        focusMove(index0);
                        index0++;
                    } else if (index0 == oldCount0) {//都走完了
                        index0 = 0;
                        focusMove(index0);
                        index0++;
                    }
                    else {
                        index0 = 0;//没确定
                        focusMove(index0);
                        index0++;
                    }
                }

            } else {
                if (oldCount0 != 0) {//如果还有搜索
                    if (index0 <= oldCount0 && index0 > 0) {//左边如果没走完，走左边
                        index0--;
                        focusMove(index0);
                    } else if (index0 == 0) {//都走完了
                        index0 = oldCount0;
                        index0--
                        focusMove(index0);
                    }
                }
            }
        }
        function getArray() {
            newflag = 1;
            $(".contrast .result").removeClass("res");
            var key = $("#key").val(); //取key值
            if (!key) {
                oldKey0 = "";
                return; //key为空则退出
            }
            if (oldKey0 != key || $(".current").length != currentLength) {
                //重置
                index0 = 0;
                var index = 0;
                $(".contrast .result").each(function () {
                    $(this).replaceWith($(this).html());
                });
                pos0 = new Array();
                if ($(".contrast-wrap").hasClass("current")) {
                    currentLength = $(".current").length;
                    $(".current .contrast").each(function () {
                        $(this).html($(this).html().replace(new RegExp(key, "gm"), "<span id='result" + (index++) + "' class='result'>" + key + "</span>")); // 替换
                    });
                } else {
                    $(".contrast-wrap").addClass('current');
                    currentLength = $(".current").length;
                    $(".contrast").each(function () {
                        $(this).html($(this).html().replace(new RegExp(key, "gm"), "<span id='result" + (index++) + "' class='result'>" + key + "</span>")); // 替换
                    });
                }
                //$("#key").val(key);
                oldKey0 = key;

                //$(".contrast .result").each(function () {
                //    $(this).parents('.contrast-wrap').addClass('current');
                //    pos0.push($(this).offset().top);
                //});
                // pos0.push($(".contrast .result:eq(2)").offset().top - $(".contrast .result:eq(2)").parents(".contrast").offset().top);
                oldCount0 = $(".contrast .result").length;
                newflag = 0;
            }
        }
        function focusMove(index0) {
            $(".contrast .result:eq(" + index0 + ")").parents('.contrast-wrap').addClass('current');
            $(".contrast .result:eq(" + index0 + ")").addClass("res");
            var top = $(".contrast .result:eq(" + index0 + ")").offset().top + $(".contrast .result:eq(" + index0 + ")").parents(".contrast").scrollTop();
            var intop = top - $(".contrast .result:eq(" + index0 + ")").parents(".contrast").offset().top;
            $(".contrast .result:eq(" + index0 + ")").parents(".contrast").animate({ scrollTop: intop }, 200);
            if ($(".contrast .result:eq(" + index0 + ")").parents(".contrast").scrollTop() == 0) {
                $("html, body").animate({ scrollTop: top - 200 }, 200);
            } else {
                $("html, body").animate({ scrollTop: $(".contrast .result:eq(" + index0 + ")").parents(".contrast").offset().top - 200 }, 200);
            }

        }


        $('#key').change(function () {
            if ($('#key').val() == "") {
                index0 = 0;
                $(".contrast .result").each(function () {
                    $(this).replaceWith($(this).html());
                });
                oldKey0 = "";
            }
        });
    </script>