let slaider1 = new Swiper('.swiper',{ 

        pagination: {
        el: '.swiper-pagination',
        }
        });


let menuOpen = document.getElementById("menu_button");
let menuLinks = document.querySelectorAll('.hover__menu>a');
let bodyTeg = document.body;

let closePopup = function() {
     document.getElementById("menu_button").classList.remove("menu_open");
        document.getElementById("menuList").classList.add("close");
        document.getElementById("main").classList.remove("blur");
        bodyTeg.setAttribute('style', 'overflow:none')
};

   
/*Открываем меню*/
 let openMenuList = menuOpen.addEventListener("click", function() {

        document.getElementById("menu_button").classList.add("menu_open");
        document.getElementById("menuList").classList.remove("close");
       
        document.getElementById("feedback_form").classList.add("close");
        bodyTeg.setAttribute('style', 'overflow:hidden')

    });


/*Закрываем меню нажимая на крестик*/
document.querySelector('.x').addEventListener("click", function() {
closePopup();
   
});



/*Закрываем меню нажимая на Esc*/
window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
                closePopup();
                document.querySelector('.header').classList.remove("blur");
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



/*вызываем окно запроса звонка*/
 
document.querySelector('.phone').addEventListener("click", function () {

        document.getElementById("feedback_form").classList.remove("close");
        document.getElementById("main").classList.add("blur");
        document.getElementById("menuList").classList.add("close");
        document.getElementById("menu_button").classList.remove("menu_open");
        bodyTeg.setAttribute('style', 'overflow:hidden')

        
});

let removeOrder = document.addEventListener('click', function(e) {

        let callBackForm = document.querySelector('header');

                if (!callBackForm.contains(e.target)) {
                
                        document.getElementById("feedback_form").classList.add("close");
                        document.getElementById("main").classList.remove("blur");
                         bodyTeg.setAttribute('style', 'overflow:none')
                }


});


document.removeEventListener('click', removeOrder);



menuLinks.forEach(hover__menu => hover__menu.addEventListener('click', function() {

        closePopup();


}));


/*окно запроса на декстопе*/

document.querySelector('.feedback_call__button').addEventListener("click", function () {

        document.getElementById("feedback_form").classList.remove("closeDT");
        document.getElementById("main").classList.add("blur");
       
        document.getElementById("menuList").classList.add("close");
        document.getElementById("menu_button").classList.remove("menu_open");
        bodyTeg.setAttribute('style', 'overflow:hidden')

        
});

let removeOrderDt = document.addEventListener('click', function(e) {

        let callBackForm = document.querySelector('header');

                if (!callBackForm.contains(e.target)) {
                
                        document.getElementById("feedback_form").classList.add("closeDT");
                        document.getElementById("main").classList.remove("blur");
                         bodyTeg.setAttribute('style', 'overflow:none')
                         
                }


});


document.removeEventListener('click', removeOrderDt);







/*всплывающие окна блоков*/

let items = document.querySelectorAll('.item');
let open = document.querySelector('.open');

open.addEventListener('click', function(evn) {
    evn.preventDefault();

    items.forEach(item => 
        item.classList.toggle('hideItem'));

        open.classList.toggle('rotate'); 
});
