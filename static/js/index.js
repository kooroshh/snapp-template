document.addEventListener("DOMContentLoaded", () => {

    // Initialize Keen Slider
    var slider = new KeenSlider("#snapp_slider", {
        loop: true, 
        created: function (instance) {
            // Add event listeners to the dots
            var dots = document.querySelectorAll(".keen-dots .dot");
            dots.forEach(function (dot, idx) {
                dot.addEventListener("click", function () {
                    instance.moveToIdx(idx); // Correct method to move to the slide corresponding to the dot index
                });
            });

            // Update the active dot on slider creation
            updateActiveDot(instance);
        },
        slideChanged: function (instance) {
            // Update the active dot when the slide changes
            updateActiveDot(instance);
        }
    });

    // Function to update the active dot
    function updateActiveDot(instance) {
        var dots = document.querySelectorAll(".keen-dots .dot");
        dots.forEach(function (dot, idx) {
            dot.classList.remove("active");
            if (idx === instance.track.details.rel) {
                dot.classList.add("active");
            }
        });
    }

    // DropDowns
    let drop1 = document.getElementById("withDropDown1");
    let drop2 = document.getElementById("withDropDown2");
    let drop3 = document.getElementById("withDropDown3");
    let dropItem1 = document.getElementById("dropdown1");
    let dropItem2 = document.getElementById("dropdown2");
    let dropItem3 = document.getElementById("dropdown3");

    drop1.addEventListener("click", ()=>{
        dropItem1.classList.toggle("dropdownBlock");
    });

    drop2.addEventListener("click", ()=>{
        dropItem2.classList.toggle("dropdownBlock");
    });

    drop3.addEventListener("click", ()=>{
        dropItem3.classList.toggle("dropdownBlock");
    });


    let nav = document.getElementById("nav-visible");
    let navToggler = document.getElementById("nav-toggler");
    let navShadow = document.getElementById("nav-shadow");
    let body = document.querySelector("body");

    function navbarResponse()
    {
        nav.classList.toggle("navbar__hide");
        navShadow.classList.toggle("nav-shadow");
        body.classList.toggle("hidden");
    }

    function closeNavbar()
    {
        nav.classList.remove("navbar__hide");
        navShadow.classList.remove("nav-shadow");
        body.classList.remove("hidden");
    }

    navToggler.addEventListener("click", navbarResponse);

    window.addEventListener("resize", ()=>{        
        if(window.innerWidth >= 992)
        {
            closeNavbar();
        }
    });

});