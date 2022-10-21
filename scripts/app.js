"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function 
(function () {
    let mypara = "This is my homepage";
    document.querySelector(".container.homepage p").innerHTML = mypara;
    let myhomepagenav = "Home page";
    document.querySelector(".nav-link.homenav").innerHTML = myhomepagenav;
    let mypic = "assets/img.jpg";
    $(".container.mypic").attr("src", mypic);
    // First method of using functions
    function Start() {
        console.log("App Started!");
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map