/*start navbar*/
// window.onscroll = function(){
//     let scr = window.scrollY;
//     let nav = document.querySelector(".navbar");
//     let heiNav =nav.getBoundingClientRect().height;
//     scr.valueOf >= heiNav.valueOf ? nav.classList.add("scrollOpa") : nav.classList.remove("scrollOpa");

//     if(scr.valueOf >= heiNav.valueOf){
//         nav.classList.add("scrollOpa");
//     }else{
//         nav.classList.remove("scrollOpa");
//     }
// }
/*End navbar*/

let selected = document.querySelectorAll(".tab")
let list = document.querySelectorAll(".list-switch");
let content =document.querySelectorAll(".content");

    selected.forEach(function(e){
        e.addEventListener("click",function(el){
            selected.forEach(function(ee){
                ee.classList.remove("selected")
            });
            el.target.classList.add("selected");
            let id =el.target.dataset.id;
            content.forEach(function(c){
                c.classList.remove("active");
            });
            let element = document.getElementById(id);
            element.classList.add("active")
        });
    });

/* Scroll to top*/
let STT = document.querySelector(".scrollToTop");
window.onscroll = function(){
    if(window.scrollY >500){
        STT.style.opacity="1";
    }
};
STT.addEventListener("click",function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
    
})
/*End Scroll to top*/