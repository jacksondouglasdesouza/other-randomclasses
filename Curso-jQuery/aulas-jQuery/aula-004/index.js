$(
    function(e){
        //precisa inserir o H1 no documento HTML antes...
        $("h1").html("Formação - Web Desenvolvedor");
        $("ul li").prepend("<li>Curso Lógica de Programação Essencial na Prática</li>");
        //Adiciona Antes...
        $("ul li").append("<li>Curso Bootstrap Essencial na Prática</li>");
        //Adiciona Depois...
        
    }
)