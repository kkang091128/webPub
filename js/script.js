$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
    }
);

/* tab */
$(".tab1").click(  //$(".tab li:eq(0) a")
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(  //$(".tab li:eq(1) a")
    function(){
        $(".notice").hide();
        //$(".gallery").show(); //show()는 display:block; 을 의미한다.
        $(".gallery").css("display","flex");
    }
);

/* popup */
$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);