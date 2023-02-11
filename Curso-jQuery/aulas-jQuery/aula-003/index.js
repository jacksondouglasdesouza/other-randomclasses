$(
    function(e){
        $("<li><img src='../../imgs/001.jpg'></li>").insertAfter("li:last-child");
        $("<li><img src='../../imgs/003.jpg'></li>").insertBefore("li:first-child");
        $("<li><img src='../../imgs/002.webp'></li>").insertAfter("li:nth(2)");
        $("<li><img src='../../imgs/Logo-my-teacher.png'></li>").insertAfter("li:nth(4)");
    }

);