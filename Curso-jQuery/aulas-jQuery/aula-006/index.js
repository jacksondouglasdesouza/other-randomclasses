$(
    function (e){
        $("li:first").remove();
        $("li.node").remove();
        $("li.php").replaceWith("<li>Curso de PHP 8.5 Intermediário</li>");
        $("ul").wrapAll("<div style='border:1px solid #323232'></div>")
        $("div").css("margin", "10px");
        $("div").css("padding", "10px");
})