new Swiper('.swiper',{ 

        pagination: {
        el: '.swiper-pagination',
        }
        });
   




let items = document.querySelectorAll('.item');
let open = document.querySelector('.open');

open.addEventListener('click', function(evn) {
    evn.preventDefault();

    items.forEach(item => 
        item.classList.toggle('hideItemLT'));

        items.forEach(item =>    
        item.classList.toggle('hideItemDT'));

        open.classList.toggle('rotate');

});



    
  

  







      


