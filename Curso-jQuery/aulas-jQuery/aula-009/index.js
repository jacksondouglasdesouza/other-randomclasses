jQuery(Document).ready(
    function(e){

        //  Função para receber a altura e largura da página do usuário.
        function redimensionar(){
            
            let userWh = $(window).height();

            $('#primeira').css('height', userWh);
            $('#segunda').css('height', userWh);
            $('#terceira').css('height', userWh);
            
        }
        // fim Função


        //Página segue para primeira div - Home Page
        $('nav li:nth-child(1)').click(
            function(e){
                $('html, body').animate( {scrollTop: $('#primeira').offset().top}, 1 );
        });
        //Página segue para segunda div
        $('nav li:nth-child(2)').click(
            function(e){
                $('html, body').animate( {scrollTop: $('#segunda').offset().top}, 200 );
        });
        //Página segue para terceira div
        $('nav li:nth-child(3)').click(
            function(e){
                $('html, body').animate( {scrollTop: $('#terceira').offset().top}, 200 );
        });
        
        //Dimensionamento da página do usuário
        $(window).resize(
            function(e){
                redimensionar();
        });

        redimensionar();
});


