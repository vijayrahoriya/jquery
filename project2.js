$(document).ready(function(){
    $('.card-1').on({
        mouseover : function(){
            $(this).css({
                'background': 'black',
                'color' : 'white',
                'transform' : 'scale(1.2)'
            })
        },
        mouseleave : function(){
            $('.card-1').css({
                'background': '#333',
                'color' : 'white',
                'transform' : 'scale(1)'
            })
        }
        
    })
})