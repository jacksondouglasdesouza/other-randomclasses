jQuery(Document).ready(
    function($jQuery){

        $(
            function(){
                $('#mostra').click(acaoMostrar);
                $('#esconder').click(acaoEsconder);
                $('#reverso').click(acaoReversa);
    
            }

        )

        function acaoEsconder(){
            $('#janela').hide(500);
        }
        function acaoMostrar(){
            $('#janela').show(600, 
                    function(){
                        alert("Mostrei com Sucesso.")
                    }
                );
        }
        function acaoReversa(){
            $('#janela').toggle(500);
        }
        


    }
)