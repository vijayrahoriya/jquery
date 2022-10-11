$(document).ready(function(){
//    $('input').focus(function(){
//     $(this).css('background','greenyellow')
//    })
//    $('input').blur(function(){
//     $(this).css('background','none')
//    })
//    $('.select').change(function(){
//     $(this).css('background', 'red')
//    })
//    $('.form').submit(function(){
//     alert("submited")
//    })

    //   $('.but').click(function(){
    //     $('.box').addClass('box2')
    //   })
    //   $('.but').mouseout(function(){
    //     $('.box').removeClass('box2')
    //   })
    //   $('.but').click(function(){
    //     $('.box').toggleClass('box2')
    //   })

    // $('.but').click(function(){
    //     $('.box').css({
    //         'background': 'orangered',
    //         "color" : "white",
    //         'transform' : 'scale(1.2)',
    //         'transition' : '.8s'
    //     })
    // })

    // $('.box').on({
    //     'click' : function(){
    //         $(this).css('background', 'red')
    //     },
    //     'mouseup': function(){
    //         $(this).css('background', 'cyan')
    //     },
    //     'dblclick' : function(){
    //         $(this).css('background','oragne')
    //     }
    // })
    // $('.box').off('click dblclick')

    // $('.but').click(function(){
    //     $('.box').remove()
    // })

    // $('.but').click(function(){
    //     $('<h2>hello</h2><p>hello this is another para</p>').prependTo('.box')
    // })

    $('.but').click(function(){
        $(".box h1").clone().appendTo('.for')
    })
})