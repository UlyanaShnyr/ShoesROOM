$(function(){    
        $(".smooth").on("click", function (event) {               
            event.preventDefault();   
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href');                       
            var top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1800 мс    
            $('html').animate({scrollTop: top}, 1800);
   
        });
   
    });
    