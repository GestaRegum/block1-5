new Swiper('.swiper',{ 

        pagination: {
        el: '.swiper-pagination',
        }
        });


let menuOpen = document.getElementById("menu_button");

let menuLinks = document.querySelectorAll('.hover__menu');

   
/*Открываем меню*/
 let openMenuList = menuOpen.addEventListener("click", function() {

        document.getElementById("menu_button").classList.add("menu_open");
        document.getElementById("menuList").classList.remove("close");
        document.getElementById("main").classList.add("blur");
        document.getElementById("feedback_form").classList.add("close");

    });

/*Закрываем меню нажимая на крестик*/
document.querySelector('.x').addEventListener("click", function() {

        document.getElementById("menu_button").classList.remove("menu_open");
        document.getElementById("menuList").classList.add("close");
        document.getElementById("main").classList.remove("blur");
       
});



/*Закрываем меню нажимая на Esc*/
window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
        document.getElementById("menu_button").classList.remove("menu_open");
        document.getElementById("menuList").classList.add("close");
        document.getElementById("main").classList.remove("blur");
}
});

let removeMenuList = document.addEventListener('click', function(e) {

        let header = document.querySelector('.header');

        if (!header.contains(e.target)) {
                document.getElementById("menu_button").classList.remove("menu_open");
                document.getElementById("menuList").classList.add("close");
                document.getElementById("main").classList.remove("blur");
              
        }
  

});




document.removeEventListener('click', removeMenuList);


 /*вызываем окно запроса звонка*/
 
document.querySelector('.phone').addEventListener("click", function () {

        document.getElementById("feedback_form").classList.remove("close");
        document.getElementById("main").classList.add("blur");
        document.getElementById("menuList").classList.add("close");
        document.getElementById("menu_button").classList.remove("menu_open");
});

document.addEventListener('click', function(e) {

        let callBackForm = document.querySelector('header');

                if (!callBackForm.contains(e.target)) {
                
                        document.getElementById("feedback_form").classList.add("close");
                        document.getElementById("main").classList.remove("blur");
                }


});






menuLinks.forEach(hover__menu => hover__menu.addEventListener('click', function() {
        document.getElementById("menu_button").classList.remove("menu_open");
        document.getElementById("menuList").classList.add("close");
        document.getElementById("main").classList.remove("blur");


}))







/*
let items = document.querySelectorAll('.item');
let open = document.querySelector('.open');

open.addEventListener('click', function(evn) {
    evn.preventDefault();

    items.forEach(item => 
        item.classList.toggle('hideItemLT'));

        items.forEach(item =>    
        item.classList.toggle('hideItemDT'));

        open.classList.toggle('rotate'); 

        


});*/

