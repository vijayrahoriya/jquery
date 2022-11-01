$(document).ready(function(){
    // $('.child-2').parent().css('background','cyan')
    // $('.child-2').parents().css('background','cyan')
    // $('.child-2').parents('.outer').css('background','cyan')
    // $(".child-2").parentsUntil('.outer').css('background','cyan')
    // $(".child-2").parentsUntil('.main-outer').css('background','cyan')
    // $('.child-2').offsetParent().css('background','red')
    // $('.child-2').closest('div').css('background','cyan')

    // decendant method    

    // $('.inner').children().css('background','cyan')
    // $('.inner').children('.child-3').css('background','cyan')
    // $('.outer').children('.child-3').css('background','cyan')         //yah select nahi karega
    // $('.outer').children().css('background','cyan')
    // $('.outer').find('.child-3').css('background','cyan')

    // siblings method

    // $('.child-3').siblings().css('background','cyan')
    // $('.child-3').siblings('.child-1').css('background','cyan')
    // $('.child-3').next().css('background','cyan')
    // $('.child-3').prev().css('background','cyan')
    // $('.child-3').nextAll().css('background','cyan')
    // $('.child-3').prevAll().css('background','cyan')
    // $('.child-1').nextUntil('.child-5').css('background','cyan')
    // $('.child-4').prevUntil('.child-1').css('background','cyan')

    // filtering methods

    // $('p').first().css('color','cyan')
    // $('p').last().css('color','cyan')
    // $('p').eq(2).css('color','cyan')
    // $('p').eq(-2).css('color','cyan')
    // $('p').filter('.test').css('color','cyan')
    // $('p').not('.test').css('color','cyan')
    // $('p').slice(1,3).css('color','cyan')

    // has() method

    // $('p').has('span').css('background','cyan')
    // $('p').has('.test').css('background','cyan')
    // if($('p').parent().is('div')){
    //     console.log($('p').parent().is('div'))
    // }
    // $('p').click(function(){
    //     if($(this).parent().is('div')){
    //         $(this).css('background','cyan')
    //     }
    // })

    // each() methods

    // $('li').each(function(){
    //     console.log($(this).text())
    // })
    // $('li').each(function(){
    //     $(this).text("hello")
    // })

    // evnet pageX and pageY

    // $(document).mousemove(function(event){
    //     // console.log($('.box').text(event.pageX))
    //     $('.box').text('x : ' + event.pageX + ' Y : ' + event.pageY)
    //     let x = event.pageX;
    //     let y = event.pageY;
    //     $('.box').offset({top:y,left:x})
    // })

    // event type method

    // $('.box').on('click mouseover mouseout dblclick',function(event){
    //     $('.box2').html('event : ' + event.type)
    // })

    // event which method

    // $('.box').on('mouseover mouseout',function(event){
    //     $('.box2').html(event.type + " : " + event.which)
    // })
    // $('body').on('keydown',function(event){
    //     $('.box2').html(event.type + ' : ' + event.which)
    // })

    // event target

    // $('body').on('click',function(event){
    //     // $('.box2').html('target event : ' + event.target.nodeName)
    //     $('.box2').html('target event : ' + event.target.innerHTML)
    // })

    //preventDefoult method

    // $('#result').click(function(e){
    //     e.preventDefault();
    //     let a = e.isDefaultPrevented();
    //     $(".box").append(a)
    // })

    //propagation method

    // $('.box').click(function(e){
    //     alert("you clicked on div")
    // })
    // $('.box p').click(function(e){
    //     e.stopPropagation();
    //     alert("you clicked on p : " + e.isPropagationStopped())
    // })

    // event.data

    // $('p').each(function(i){
    //     $(this).on('click',{value : i},function(e){
    //         alert(e.data.value)
    //     })
    // })
})