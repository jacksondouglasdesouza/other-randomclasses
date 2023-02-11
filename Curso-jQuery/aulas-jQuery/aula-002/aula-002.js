/* $(
    function(e)
    {   
        $("li a[href$='.pdf']").after("*****").css("color", "#fff");
        $("li a[href$='.pdf']").before("*****").css("color", "#fff");
        $("li a[href$='.zip']").after("#####").css("color", "#fff");
        $("li a[href$='.zip']").before("#####").css("color", "#fff");
    }
) */


$(
    function(e)
    {   
        // ** Documentos Pdf ** //
        $("li a[href$='pdf']").before("<img src='../../imgs/pdf.svg'>").css("color", "#323232");
        // ** Documentos Zip ** //
        $("li a[href$='zip']").before("<img src='../../imgs/zip.svg'>").css("color", "#323232");
    }
)