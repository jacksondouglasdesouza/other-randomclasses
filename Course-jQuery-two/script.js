jQuery(document).ready(
    function(){
    /*     $("div").css(
            "background-color", "#323232"
        ); */

    jQuery("div")
        .css({
            "color": "#FFFFFF",
            "font-size": "2rem",
            "font-weight": "bold",
            "backgroundColor": "#598758",
            "padding": "15px 30px",
            "width": "300px",
            "border-radius": "30px",
            "margin-top": "20px"
        })
    jQuery("body")
        .css({
            "background-color": "#323232",
            "color": "#FFFFFF",
            "max-width": "90%",
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            "margin": "0 auto"
        })
    jQuery("p")
        .css({
        "font-size": "1.1rem",
        "text-align": "justify",
        "justify-content": "center",
        "align-items": "center",
        "display": "flex"
        })
        /*     jQuery("td").first()
                .css({
                    "background-color": "aquamarine",
                    "color": "#323232",
                    "font-weight": "bold"
                }) */
        /*     jQuery("td").last()
                .css({
                    "background-color": "#113344",
                    "color": "#f2f2f2",
                    "font-weight": "bold"
                }) */

    jQuery("td").first()
            .css({
            "background-color": "aquamarine",
            "color": "#323232",
            "font-weight": "bold"
        }).end().last()
            .css({
            "background-color": "#113344",
            "color": "#f2f2f2",
            "font-weight": "bold"
        }).end().eq(4)
            .css({
            "background-color": "#331155",
            "color": "#f2f2f2",
            "font-weight": "bold"
        }).end().eq().add("b")
            .css({
            "background-color": "#665599",
            "color": "#f2f2f2",
            "font-weight": "bold",
            "padding": "5px",
            "width": "10px",
            "height": "10px",
            "border-radius": "60%"
        })

    jQuery("tr").not(".row1")
        .css({
            "background-color":"#f2f2f2",
            "color": "#331155"
    })

    jQuery('td').slice(1, 3)
        .css("background-color", '#ff99ee')

    jQuery("td").has("b")
        .css("background-color", "#776655")
    
    jQuery('table')
            .css("border-radius", "30px")

    jQuery('td')
            .css('border-radius', '30px')
    
    
    /*  ***** ***** *****  */


    

})

/* END jQuery Ready*/
