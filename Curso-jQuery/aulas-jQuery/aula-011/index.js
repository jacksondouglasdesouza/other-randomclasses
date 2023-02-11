jQuery(Document).ready(
    $(function(jQuery){
        
        function aplicarCor(selColor){
            $('#window').css('background-color', selColor.data.selCor);
            $('#window').css('width', selColor.data.dimension);
            $('#window').css('height', selColor.data.extension);
        }

        $(
            function(){
                $('#button-blue').on("click", {selCor:'blue', dimension:'300px', extension:'500px'} ,aplicarCor);
                $('#button-red').on("click", {selCor:'red', dimension:'400px', extension:'600px'} ,aplicarCor);
                $('#button-green').on("click", {selCor:'green', dimension:'500px', extension:'700px'} ,aplicarCor);
            }
        )

    })

    /*function colorBlue(){
            $('#window').css('background-color','blue');
        }
    
        function colorRed(){
            $('#window').css('background-color','red');
        }
        
        function colorGreen(){
            $('#window').css('background-color','green');
        }

        $('#button-blue').on("click", colorBlue);
        $('#button-red').on("click", colorRed);
        $('#button-green').on("click", colorGreen);       
    
    }) */


); 