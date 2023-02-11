jQuery(Document).ready(
    function(e){

        // Eventos de Clique
        $("#curso-html").click(
            function(){
                alert("Você acaba de Clicar no HTML5!");
            }
        )

        // Eventos de Clique

        $("#curso-css").click(
            function(){
                alert("Você acaba de Clicar no CSS3!");
            }
        )

        // -->

/*  
    // Eventos de Over sem sub-eventos... 
    $("#curso-html").on("mouseover",
        function(){
            alert("Você acaba de Passar o mouse no HTML5!");
        }
    )

    $("#curso-css").on("mouseover",
        function(){
            alert("Você acaba de Passar o mouse no CSS3!");
        }
    )

    */

    // -->

        // CSS3 - Eventos de Over - Passar o mouse por Cima!
        function mostrarMessagemOver(){
            alert("Você acaba de Passar o mouse no CSS3 uma vez!");
            $("#curso-css").off("mouseover", mostrarMessagemOver);
        }
        function mostrarMessagemOver02(){
            alert("OK você clicou no Botação do CSS3!");
        }
        $("#curso-css").on("mouseover", mostrarMessagemOver);
        $("#curso-css").on("click", mostrarMessagemOver02);

        // -->


        // HTML5 - Eventos de Over - Passar o mouse por Cima!
    function mostrarMessagemHtml(){
        alert("Você acaba de Passar o mouse no HTML5 uma vez!");
        $("#curso-html").off("mouseover", mostrarMessagemHtml);
    }
    function mostrarMessagemHtml02(){
        alert("OK você clicou no Botação do HTML5!");
    }
    $("#curso-html").on("mouseover", mostrarMessagemHtml);
    $("#curso-html").on("click", mostrarMessagemHtml02);

    // -->

    }
);


// --> Eventos de mostrar e esconder elementos! ...

jQuery(Document).ready(
    function(e){
        $('#janela').hide();

        $('#mostrar-elemento').click(
            function(){
                $('#janela').show();
            }
        )

        $('#esconder-elemento').click(
            function(){
                $('#janela').hide();
            }
        )
    }

);

$(
    function(e){
        // --> Eventos de mostrar e esconder elementos ao passar pelo elementos...

        $('#janela-dois').hide();
        $('#mostrar-elemento-dois').hover(mostrarOver, esconderOver);
        
        function mostrarOver(e){
            $('#janela-dois').show();
        };
        function esconderOver(e){
            $('#janela-dois').hide();
        };
});