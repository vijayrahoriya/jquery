$(document).ready(function(){
    $('#mode').click(function(){
        $('body').toggleClass('change-bg')
        $(this).css('border','2px solid #fff')
        $('#mode span').text($("#mode span").text()=="light mode"? "dark mode" : "light mode")
    })
    $('#mode').click(function(){
        $(this).find('i').toggleClass('fa-moon fa-sun')
    })
})