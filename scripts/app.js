"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function 
(function () {
    let mypara = "This is my homepage";
    document.querySelector(".container.homepage p").innerHTML = mypara;
    let myhomepagenav = "Home page";
    document.querySelector(".nav-link.homenav").innerHTML = myhomepagenav;
    let mypic = "assets/image.jpeg";
    $(".container.mypic").attr("src", mypic);
    let mycontactpagenav = "Contact page";
    document.querySelector(".nav-link.contactnav").innerHTML = mycontactpagenav;
    let mypara1 = "Realizing your Potential is a challenge\.;
    We;
    all;
    try { }
    finally { }
    to;
    be;
    professional;
    and;
    know;
    our;
    services;
    and;
    products;
    better;
    than;
    anyone;
    You;
    need;
    a;
    tool;
    to;
    present;
    your;
    Business;
    to;
    the;
    rest;
    of;
    the;
    world;
    Your;
    website;
    is;
    more;
    than;
    just;
    a;
    formality.It;
    is;
    an;
    extension;
    of;
    your;
    business, and;
    often;
    the;
    first, and;
    possibly;
    only;
    the;
    one;
    way;
    that;
    customer;
    interacts;
    with (your)
        business.;
    ";;
    document.querySelector(".container.contactpage p").innerHTML = mypara1;
    // First method of using functions
    function Start() {
        console.log("App Started!");
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map