$(document).ready(function () {
    $(".scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});




$(document).ready(function () {
    flag = 1;
    $("#nex").click(function () {
        if (flag == 0) {
            $("#card1").css({
                "z-index": "999",
                "transform": "translateX(0px) scale(1.3)",
                "filter": "blur(0px)"
            });
            $("#card2").css({
                "z-index": "9",
                "transform": "translateX(-65%) scale(1)",
                "filter": "blur(1px)"
            });
            $("#card3").css({
                "z-index": "9",
                "transform": "translateX(65%)",
                "filter": "blur(1px)"
            });
            flag = 1;
        } else if (flag == 1) {
            $("#card3").css({
                "z-index": "999",
                "transform": "translateX(0px) scale(1.3)",
                "filter": "blur(0px)"
            });
            $("#card2").css({
                "z-index": "9",
                "transform": "translateX(65%)",
                "filter": "blur(1px)"
            });
            $("#card1").css({
                "z-index": "9",
                "transform": "translateX(-65%) scale(1)",
                "filter": "blur(1px)"
            });
            flag = 2;
        } else if (flag == 2) {
            $("#card2").css({
                "z-index": "999",
                "transform": "translateX(0px) scale(1.3)",
                "filter": "blur(0px)"
            });
            $("#card3").css({
                "z-index": "9",
                "transform": "translateX(-65%) scale(1)",
                "filter": "blur(1px)"
            });
            $("#card1").css({
                "z-index": "9",
                "transform": "translateX(65%)",
                "filter": "blur(1px)"
            });
            flag = 0;
        }
    });
    $("#pre").click(function () {
        if (flag == 0) {
            $("#card3").css({
                "z-index": "999",
                "transform": "translateX(0px) scale(1.3)",
                "filter": "blur(0px)"
            });
            $("#card2").css({
                "z-index": "9",
                "transform": "translateX(65%)",
                "filter": "blur(1px)"
            });
            $("#card1").css({
                "z-index": "9",
                "transform": "translateX(-65%) scale(1)",
                "filter": "blur(1px)"
            });
            flag = 2;
        } else if (flag == 1) {
            $("#card2").css({
                "z-index": "999",
                "transform": "translateX(0px) scale(1.3)",
                "filter": "blur(0px)"
            });
            $("#card3").css({
                "z-index": "9",
                "transform": "translateX(-65%) scale(1)",
                "filter": "blur(1px)"
            });
            $("#card1").css({
                "z-index": "9",
                "transform": "translateX(65%)",
                "filter": "blur(1px)"
            });
            flag = 0;
        } else if (flag == 2) {
            $("#card1").css({
                "z-index": "999",
                "transform": "translateX(0px) scale(1.3)",
                "filter": "blur(0px)"
            });
            $("#card2").css({
                "z-index": "9",
                "transform": "translateX(-65%) scale(1)",
                "filter": "blur(1px)"
            });
            $("#card3").css({
                "z-index": "9",
                "transform": "translateX(65%)",
                "filter": "blur(1px)"
            });
            flag = 1;
        }
    });
});



$(document).ready(function () {
    share = 0;
    $(".share-to").click(function () {
        if (share == 0) {
            $(".share").css({
                "display": "block"
            })
            share = 1;
        } else if (share == 1) {
            $(".share").css({
                "display": "none"
            })
            share=0;
        }
    });
});

$(document).ready(function () {
    $(".share-to").click(function () {
        var current_add= window.location.href;
        document.getElementById("twitter").href="http://twitter.com/share?text=I'm Sharing on Twitter&url="+current_add;
        document.getElementById("facebook").href="https://www.facebook.com/sharer.php?u="+current_add;
        document.getElementById("whatsapp").href="https://api.whatsapp.com/send?text="+current_add;
    });
});