
// history slide
$hSlider.slick({
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
});

// CI guide button click

const $colorBtn = $(".ciGuide").find(".btn.color");
const $monoBtn = $(".ciGuide").find(".btn.mono");

$colorBtn.on("click", function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");


    if($body.hasClass("light-mode")) {
        $(this).closest(".contentArea").find(".verticalLogo").css({
            "background":`url("../images/light_mode/logo_ci_guide_vertical.png")`,
            "background-repeat" : "no-repeat",
            "background-position": "center center",
        });
        $(this).closest(".contentArea").find(".horizontalLogo").css({
            "background":`url("../images/light_mode/logo_ci_guide_horizontal.png")`,
            "background-repeat" : "no-repeat",
            "background-position": "center center",
        });

    } else {
        $(this).closest(".contentArea").find(".verticalLogo").css({
            "background":`url("../images/dark_mode/logo_ci_guide_vertical.png")`,
            "background-repeat" : "no-repeat",
            "background-position": "center center",
        });
        $(this).closest(".contentArea").find(".horizontalLogo").css({
            "background":`url("../images/dark_mode/logo_ci_guide_horizontal.png")`,
            "background-repeat" : "no-repeat",
            "background-position": "center center",
        });
    }
});
$monoBtn.on("click", function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");

    if($body.hasClass("light-mode")) {
        $(this).closest(".contentArea").find(".verticalLogo").css({
            "background":`url("../images/light_mode/logo_ci_guide_vertical_mono.png")`,
            "background-repeat" : "no-repeat",
            "background-position": "center center",
        });
        $(this).closest(".contentArea").find(".horizontalLogo").css({
            "background":`url("../images/light_mode/logo_ci_guide_horizontal_mono.png")`,
            "background-repeat" : "no-repeat",
            "background-position": "center center",
        });

    } else {
        $(this).closest(".contentArea").find(".verticalLogo").css({
            "background":`url("../images/dark_mode/logo_ci_guide_vertical_mono.png")`,
            "background-repeat" : "no-repeat",
            "background-position": "center center",
        });
        $(this).closest(".contentArea").find(".horizontalLogo").css({
            "background":`url("../images/dark_mode/logo_ci_guide_horizontal_mono.png")`,
            "background-repeat" : "no-repeat",
            "background-position": "center center",
        });
    }
});