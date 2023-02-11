/* jQuery(document) . ready(function(e) {
    alert("jQuery Funcionando!");
}) */

/* $(function(e) {
    alert("jQuery Funcionando!");
}) */

//alert(`Essa página tem ${$("nav a").length} links!`);

/* $(
    function()
    {
        $("nav a").css("color", "green");
        $("nav a").css("text-decoration", "none");
        $("nav a").css("font-size", "1.2rem");
        $("nav a").css("display", "block");
        $("nav a").css("background-color", "#323232");
        $("nav a").css("padding", "20px");
        $("nav a").css("margin", "20px");
        $("nav a").css("border", "5px solid #195689");
        
    }
) */


$(
    function(e){
        $("ul").css("background-color", "#111222");
        $("ul").css("padding", "20px");
        $("ul").css("border-radius", "20px");
        $("li").css("list-style", "none");
        $("li").css("margin-top", "3px");
        $("li").css("border-radius", "5px");
        $("li").css("background-color", "#ff9");
        $("li").css("color", "#323232");
        $("li[class]:last").css("background-color", "#323232");
        $("li[class]:last").css("color", "#fff");
        $("li[id]").css("background-color", "#879985");
        $("li[id]").css("color", "#fff");
        $("li[id]:last").css("background-color", "#ff9985");
        $("li[id]:last").css("color", "#323232");
    }
)