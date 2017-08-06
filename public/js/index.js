(function() {
    "use strict";

    $(document).ready(function() {
        var $background = $("#background");
        var src = $background.data("src");
        if (!src) {
            return;
        }

        var $img = $('<img>');
        $img.hide();
        $img.on("load", function() {
            $(this).fadeIn(1000);
        })
        $img.attr("src", src);
        $img.appendTo($background);
    });
})();