$(document).ready(function () {
    $(".star-rating").on("click", function () {
        var tabId = $(this).data("tab");
        $(".star-content").hide();
        $("#" + tabId).show();
    });

    $(".star-rating").on('click', function () {
        for (let i = 0; i <= 4; i++) {
            document.getElementById(i).querySelector('i').style.color = "";
        }
        for (let i = 0; i <= this.id; i++) {
            document.getElementById(i).querySelector('i').style.color = "#fc0";
        }
    });

    $(".sub-btn").click(function () {
        var key = $(this).siblings(".head").text();
        var value = $(this).siblings(".input-box").val();
        localStorage.setItem(key, value);
        $(this).siblings(".input-box").val('');
    });
});
