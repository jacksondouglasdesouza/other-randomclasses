jQuery(document).ready(function(){
    console.log("A posição do elemento no Topo é: " + $('#janela').position().top + 
    "px");
    console.log("A posição do elemento na Esquerda é: " + $('#janela').position().left + 
    "px");
});

$(
    function(e){
        console.log("A posição do elemento no Topo é: " + $('.janelinha').position().top + 
        "px");
        console.log("A posição do elemento na Esquerda é: " + $('.janelinha').position().left + 
        "px");

    }
);

$(
    function(e){
        $("#janela").offsetParent().css("background-color", "#545689");
    }
)

$(
    function(e){
        $(".janelinha").offsetParent().css("background-color", "#545669");
    }
)



